"use client";
import React from "react";
import { Card } from "flowbite-react";

type Props = {
    approvalStatus: string;
    loanAmount?: number;
    monthlyPayment?: number;
    reasonForDenial?: string;
    resources?: string;
};

const ApprovalSection = (props: Props) => {
    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold mb-10 text-black">
                {props.approvalStatus === "Y"
                    ? "Congratulations!"
                    : "We're sorry"}
            </h1>
            {props.approvalStatus === "Y" ? (
                <Card className="w-3/5 items-center text-center h-auto text-info_text">
                    <h3 className="text-2xl font-bold mb-4">
                        You have been approved for a home mortgage loan
                    </h3>
                    <h6 className="text-md">Loan Amount</h6>
                    <h2 className="text-4xl font-bold mb-4 text-[#28a745]">
                        ${props.loanAmount}
                    </h2>
                    <h6 className="text-md">Monthly Payment</h6>
                    <h4 className="text-4xl font-bold mb-4">
                        ${props.monthlyPayment}
                    </h4>
                </Card>
            ) : (
                <Card className="w-3/5 items-center text-center h-auto text-info_text">
                    <h4 className="text-2xl font-bold mb-4">
                        You have been denied for a home mortgage loan
                    </h4>
                    <h6 className="text-lg">Reason for denial</h6>
                    <h2 className="text-4xl font-bold mb-4 text-success "></h2>
                    <h6 className="text-lg`">Resources</h6>
                    <h4 className="text-4xl font-bold mb-4"></h4>
                </Card>
            )}
        </div>
    );
};

export default ApprovalSection;
