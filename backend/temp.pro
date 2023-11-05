
        % Predicate:
        #pred credit_score(X) :: 'you have a @(X) credit score'.
        credit_score(bad). % bad, good
        #pred down_payment(X) :: 'your down payment is @(X) expectation'.
        down_payment(met). % below, met
        #pred house_price(same) :: 'your house appraisal value is average for market'.
        #pred house_price(X) :: 'your house appraisal value is @(X) the market average'.
        house_price(below). % below, same, above
        #pred cc_debt(X) :: 'your credit card debt is @(X) the average'.
        cc_debt(below). % below, higher
        #pred car_debt(X) :: 'your car debt is @(X) the average'.
        car_debt(below). % below, higher
        #pred student_debt(X) :: 'your student debt is @(X) average'.
        student_debt(below). % below, higher
        #pred fedti(X) :: 'your Front-end debt to income (FEDTI) ratio @(X) expectation'.
        fedti(met). % met, above
        

        #pred suggest(X) :: 'Compare to other buyers of home at this range, the best suggestion for you currently is to @(X)'.
        
        % 1. If the user has a bad credit score and higher credit card debt, suggest paying off credit card debt first.
        suggest(pay_off_credit_card_debt_first) :- credit_score(bad), cc_debt(higher).
        

        % 2. If the user just has a bad credit score, suggest a way to improve the credit score.
        suggest(improve_your_credit_score) :- credit_score(bad).

        % 3. If the user's down payment is below and house value is higher or mid, suggest finding a cheaper house.
        suggest(find_a_cheaper_house) :- down_payment(below), house_price(same).
        suggest(find_a_cheaper_house) :- down_payment(below), house_price(above).

        % 4. If the user's down payment is below, but house value is below, suggest getting more income for the down payment.
        suggest(get_better_income) :- down_payment(below), house_price(below).

        % 5. If fedti is above, suggest finding a cheaper house or getting more income.
        suggest(find_a_cheaper_house) :- down_payment(user,met), fedti(above), not_cheap_house(user).
        suggest(get_better_income) :- fedti(above), house_price(low).

        % 6. Suggest the users to pay off above average debt first.
        
        suggest(pay_off_student_debt_first) :- student_debt(higher).
        suggest(pay_off_car_debt_first) :- car_debt(higher).

        % Find the suggestion orders for the user.
        best_suggestion(user) :- suggest(pay_off_credit_card_debt_first).
        
        best_suggestion(user) :- suggest(improve_your_credit_score).
        
        suggest(pay_off_credit_card_debt_first) :- cc_debt(higher).
        
        
        best_suggestion(user) :- suggest(pay_off_credit_card_debt_first).
        best_suggestion(user) :- suggest(find_a_cheaper_house).
        % Suggest the users to pay off above average debt first based on interest rate estimate.
        
        best_suggestion(user) :- suggest(pay_off_car_debt_first).
        best_suggestion(user) :- suggest(pay_off_student_debt_first).
        % Final suggestion, get more income.
        best_suggestion(user) :- suggest(get_better_income).

        ?- best_suggestion(user).

    