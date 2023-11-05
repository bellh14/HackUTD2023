
    % Predicate:
    
    credit_score(good). % bad, good
    down_payment(below). % below, met
    house_value(below). % below, same, above
    cc_debt(below). % below, higher
    car_debt(below). % below, higher
    student_debt(below). % below, higher
    fedit(above). % met, above
    
    #pred credit_score(X) :: 'the user has a @(X) credit score'.
    #pred down_payment(X) :: 'the user down payment @(X) expectation'.
    
    #pred house_value(same) :: 'the user house value same as the market rate'.
    #pred house_value(X) :: 'the user house value @(X) the market rate'.
    
    #pred cc_debt(X) :: 'the user credit card debt is @(X) than average'.
    #pred car_debt(X) :: 'the user car debt is @(X) than average'.
    #pred student_debt(X) :: 'the user student debt is @(X) than average'.
    #pred fedit(X) :: 'the user Front-end debt to income ratio @(X) expectation'.

    #pred suggest(X) :: 'The best suggestion for the user currently is to @(X)'.
    
    % 1. If the user has a bad credit score and higher credit card debt, suggest paying off credit card debt first.
    suggest(pay_off_credit_card_debt_first) :- credit_score(bad), cc_debt(higher).

    % 2. If the user just has a bad credit score, suggest a way to improve the credit score.
    suggest(improve_their_credit_score) :- credit_score(bad).

    % 3. If the user's down payment is below and house value is higher or mid, suggest finding a cheaper house.
    suggest(find_a_cheaper_house) :- down_payment(below), house_value(same).
    suggest(find_a_cheaper_house) :- down_payment(below), house_value(above).

    % 4. If the user's down payment is below, but house value is below, suggest getting more income for the down payment.
    suggest(get_more_income) :- down_payment(below), house_value(below).

    % 5. If fedit is above, suggest finding a cheaper house or getting more income.
    suggest(find_a_cheaper_house) :- down_payment(user,met), fedit(above), not_cheap_house(user).
    suggest(get_more_income) :- fedit(above), house_value(low).

    % 6. Suggest the users to pay off above average debt first.
    suggest(pay_off_credit_card_debt_first) :- cc_debt(higher).
    suggest(pay_off_student_debt_first) :- student_debt(higher).
    suggest(pay_off_car_debt_first) :- car_debt(higher).


    % Find the suggestion orders for the user.
    
    best_suggestion(user) :- suggest(pay_off_credit_card_debt_first).
    best_suggestion(user) :- suggest(improve_their_credit_score).
    best_suggestion(user) :- suggest(find_a_cheaper_house).
    % Suggest the users to pay off above average debt first based on interest rate estimate.
    best_suggestion(user) :- suggest(pay_off_credit_card_debt_first).
    best_suggestion(user) :- suggest(pay_off_car_debt_first).
    best_suggestion(user) :- suggest(pay_off_student_debt_first).
    % Final suggestion, get more income.
    best_suggestion(user) :- suggest(get_more_income).

    ?- best_suggestion(user).

