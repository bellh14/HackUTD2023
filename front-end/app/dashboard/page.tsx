"use client";
import React from "react";
import LineCharts from "./LineCharts";
import BarCharts from "./BarCharts";
import ApprovalSection from "./ApprovalSection";

type Props = {};

export default function dashboard(props: Props) {
    return (
        <main className="flex flex-col bg-white items-center justify-between">
                <section className="py-8">
                    <ApprovalSection
                        approvalStatus="Y"
                        loanAmount={150000}
                        monthlyPayment={2000}
                    />
                </section>
                <section className="py-8">
                    <BarCharts />
                </section>
        </main>
    );
}
