"use client";
import React from "react";
import EstimatorInput from "./EstimatorInput";
import { Button } from "flowbite-react";

type Props = {};

const Estimator = (props: Props) => {
    return (
        <section className="items-center text-center flex flex-col shadow-lg">
            <h1 className="text-4xl font-bold mb-10 text-black">Estimate Mortgage</h1>
            <div className="flex flex-row">
                <EstimatorInput
                    label="Monthly Car Payment"
                    placeholder="$200"
                />
                <EstimatorInput
                    label="Student Loan Payment"
                    placeholder="$100"
                />
                <EstimatorInput label="Credit Score" placeholder="600" />
                <EstimatorInput
                    label="Gross Monthly Income"
                    placeholder="$3,500"
                />
                <EstimatorInput
                    label="Monthly Credit Card Payment"
                    placeholder="$80"
                />
                <EstimatorInput
                    label="Home Appraised Value"
                    placeholder="$600,000"
                />
                <EstimatorInput
                    label="Down Payment Amount"
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
