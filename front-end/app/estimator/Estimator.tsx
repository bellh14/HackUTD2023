"use client";
import React from "react";
import EstimatorInput from "./EstimatorInput";
import { Button } from "flowbite-react";

type Props = {};

const Estimator = (props: Props) => {
    return (
        <section className="items-center text-center flex flex-col shadow-lg">
            <h1 className="text-4xl font-bold mb-10 text-black">
                Estimate Mortgage
            </h1>
            <div className="grid grid-flow-row grid-cols-4 gap-8">
                <EstimatorInput
                    label="Monthly Car Payment"
                    key="CarPayment"
                    placeholder="$200"
                />
                <EstimatorInput
                    label="Student Loan Payment"
                    key="StudentLoanPayments"
                    placeholder="$100"
                />
                <EstimatorInput
                    label="Credit Score"
                    key="CreditScore"
                    placeholder="600"
                />
                <EstimatorInput
                    label="Gross Monthly Income"
                    key="GrossMonthlyIncome"
                    placeholder="$3,500"
                />
                <EstimatorInput
                    label="Monthly Credit Card Payment"
                    key="CreditCardPayment"
                    placeholder="$80"
                />
                <EstimatorInput
                    label="Home Appraised Value"
                    key="AppraisedValue"
                    placeholder="$400,000"
                />
                <EstimatorInput
                    label="Down Payment Amount"
                    key="DownPayment"
                    placeholder="$20,000"
                />
            </div>
            <Button className="bg-secondary w-2/5 my-8" type="submit">
                Estimate
            </Button>
        </section>
    );
};

export default Estimator;
