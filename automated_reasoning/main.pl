% Predicate:
credit_score(user, bad). % bad, good
down_payment(user, below). % below, met
house_value(user, above). % below, above
cc_debt(user, above). % below, above
car_debt(user, above). % below, above
student_debt(user, above). % below, above
fedit(user, above). % met, above
% income(user, below). % below, avg, above


not_cheap_house(user) :- house_value(user, above).
not_cheap_house(user) :- house_value(user, avg).

% 1. If the user has a bad credit score and high credit card debt, suggest paying off credit card debt first.
suggest(user, pay_off_credit_card_debt_first) :- credit_score(user, bad), cc_debt(user, above).

% 2. If the user just has a bad credit score, suggest a way to improve the credit score.
suggest(user, improve_credit_score) :- credit_score(user, bad).

% 3. If the user's down payment is below and house value is high or mid, suggest finding a cheaper house.
suggest(user, find_a_cheaper_house) :- down_payment(user, below), not_cheap_house(user).

% 4. If the user's down payment is below, but house value is low, suggest getting more income for the down payment.
suggest(user, get_more_income) :- down_payment(user, below), house_value(user, low).

% 5. If fedit is above, suggest finding a cheaper house or getting more income.
suggest(user, find_a_cheaper_house) :- down_payment(user,met), fedit(user, above), not_cheap_house(user).
suggest(user, get_more_income) :- fedit(user, above), house_value(user, low).

% 6. Suggest the users to pay off above average debt first.
suggest(user, pay_off_credit_card_debt_first) :- cc_debt(user, above).
suggest(user, pay_off_student_debt_first) :- student_debt(user, above).
suggest(user, pay_off_car_debt_first) :- car_debt(user, above).


% Find the suggestion orders for the user.
best_suggestion(user) :- suggest(user, pay_off_credit_card_debt_first).
best_suggestion(user) :- suggest(user, improve_credit_score).
best_suggestion(user) :- suggest(user, find_a_cheaper_house).
% Suggest the users to pay off above average debt first based on interest rate estimate.
best_suggestion(user) :- suggest(user, pay_off_credit_card_debt_first).
best_suggestion(user) :- suggest(user, pay_off_car_debt_first).
best_suggestion(user) :- suggest(user, pay_off_student_debt_first).
% Final suggestion, get more income.
best_suggestion(user) :- suggest(user, get_more_income).




?- best_suggestion(user).



