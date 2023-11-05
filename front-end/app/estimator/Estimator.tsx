"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EstimatorInput from "./EstimatorInput";
import { Button } from "flowbite-react";
import { createPost, createPostAsync } from "../api/API";
import HomeBuyerStats from "../HomeBuyerStats";
import axios from "axios";
import UserInfo from "../UserInfo";

type Props = {};

const Estimator = (props: Props) => {
    // const dispatch = useDispatch<AppDispatch>();
    const [carPayment, setCarPayment] = useState(0);
    const [studentLoanPayments, setStudentLoanPayments] = useState(0);
    const [creditCardPayment, setCreditCardPayment] = useState(0);
    const [creditScore, setCreditScore] = useState(0);
    const [grossMonthlyIncome, setGrossMonthlyIncome] = useState(0);
    const [appraisedValue, setAppraisedValue] = useState(0);
    const [downPayment, setDownPayment] = useState(0);

    async function submitHandler(e: any) {
        e.preventDefault();
        console.log("submitting");
        const formData = {
            CarPayment: carPayment,
            StudentLoanPayments: studentLoanPayments,
            CreditCardPayments: creditCardPayment,
            CreditScore: creditScore,
            GrossMonthlyIncome: grossMonthlyIncome,
            AppraisedValue: appraisedValue,
            DownPayment: downPayment,
        };
        console.log(formData);
        await createPost(formData);
    }

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
                    min={HomeBuyerStats[0].CarPayment}
                    max={HomeBuyerStats[1].CarPayment}
                    onChange={(e) => setCarPayment(e)}
                />
                <EstimatorInput
                    label="Student Loan Payment"
                    key="StudentLoanPayments"
                    placeholder="$100"
                    min={HomeBuyerStats[0].StudentLoanPayments}
                    max={HomeBuyerStats[1].StudentLoanPayments}
                    onChange={(e) => setStudentLoanPayments(e)}
                />
                <EstimatorInput
                    label="Credit Score"
                    key="CreditScore"
                    placeholder="600"
                    min={HomeBuyerStats[0].CreditScore}
                    max={HomeBuyerStats[1].CreditScore}
                    onChange={(e) => setCreditScore(e)}
                />
                <EstimatorInput
                    label="Gross Monthly Income"
                    key="GrossMonthlyIncome"
                    placeholder="$3,500"
                    min={HomeBuyerStats[0].GrossMonthlyIncome}
                    max={HomeBuyerStats[1].GrossMonthlyIncome}
                    onChange={(e) => setGrossMonthlyIncome(e)}
                />
                <EstimatorInput
                    label="Monthly Credit Card Payment"
                    key="CreditCardPayment"
                    placeholder="$80"
                    min={HomeBuyerStats[0].CreditCardPayment}
                    max={HomeBuyerStats[1].CreditCardPayment}
                    onChange={(e) => setCreditCardPayment(e)}
                />
                <EstimatorInput
                    label="Home Appraised Value"
                    key="AppraisedValue"
                    placeholder="$400,000"
                    min={HomeBuyerStats[0].AppraisedValue}
                    max={HomeBuyerStats[1].AppraisedValue}
                    onChange={(e) => setAppraisedValue(e)}
                />
                <EstimatorInput
                    label="Down Payment Amount"
                    key="DownPayment"
                    placeholder="$20,000"
                    min={HomeBuyerStats[0].DownPayment}
                    max={HomeBuyerStats[1].DownPayment}
                    onChange={(e) => setDownPayment(e)}
                />
            </div>
            <Button
                className="text-2xl bg-secondary w-2/5 my-8"
                type="submit"
                onClick={(e) => submitHandler(e)}
            >
                Estimate
            </Button>
        </section>
    );
};

export default Estimator;
