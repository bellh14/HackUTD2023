"use client";
import React from "react";
import LineCharts from "./LineCharts";
import BarCharts from "./BarCharts";
import ApprovalSection from "./ApprovalSection";
import dynamic from "next/dynamic";

const BarChart = dynamic(() => import("./BarCharts"), { ssr: false });

type Props = {};

export default function dashboard(props: Props) {
    return (
        <main className="flex flex-col bg-white items-center justify-between">
            <section className="py-8 w-4/5">
                <ApprovalSection
                    approvalStatus="Y"
                    loanAmount={150000}
                    monthlyPayment={2000}
                />
            </section>
            <section
                className="py-8 mx-4 grid grid-cols-3 grid-flow-row gap-2 shadow-md"
                suppressHydrationWarning={true}
            >
                <BarChart title="Credit Score" label="CreditScore" />
                <BarChart title="Gross Monthly Income" label="GrossMonthlyIncome" />
                <BarChart title="Credit Card Payment" label="CreditCardPayment" />
                <BarChart title="Car Payment" label="CarPayment" />
                <BarChart title="Student Loan Payment" label="StudentLoanPayments" />
                <BarChart title="Appraisal Value" label="AppraisedValue" />
                <BarChart title="Down Payment" label="DownPayment" />
            </section>
        </main>
    );
}
