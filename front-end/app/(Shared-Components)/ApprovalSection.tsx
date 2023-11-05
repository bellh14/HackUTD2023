"use client";
import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { createPost } from "../api/API";
import { PostFormData } from "../types";

type Props = {
    approvalStatus?: string;
    loanAmount?: number;
    monthlyPayment?: number;
    reasonForDenial?: string;
    resources?: string;
    formData?: PostFormData;
};

const renderSwitch = (props: Props) => {
    switch (props.approvalStatus) {
        case "approved":
            return (
                <Card className="w-full items-center text-center h-auto text-info_text">
                    <h1 className="text-4xl font-bold mb-4 text-black">
                        Congratulations!
                    </h1>
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
            );
        case "denied":
            return (
                <Card className="w-full items-center text-center h-auto text-info_text">
                    <h1 className="text-4xl font-bold mb-4 text-black">
                        We are Sorry
                    </h1>
                    <h4 className="text-2xl font-bold mb-4">
                        You have been denied for a home mortgage loan
                    </h4>
                    <h6 className="text-lg">{props.reasonForDenial}</h6>
                    <h2 className="text-4xl font-bold mb-4 text-success "></h2>
                    <h6 className="text-lg`">Resources</h6>
                    <h4 className="text-4xl font-bold mb-4"></h4>
                </Card>
            );
        case "R-LTV":
            return (
                <Card className="w-full items-center text-center h-auto text-info_text">
                    <h1 className="text-4xl font-bold mb-4 text-black">
                        We are Sorry
                    </h1>
                    <h4 className="text-2xl font-bold mb-4">
                        You have been denied for a home mortgage loan
                    </h4>
                    <h6 className="text-lg">{props.reasonForDenial}</h6>
                    <h2 className="text-4xl font-bold mb-4 text-success "></h2>
                    <h6 className="text-lg`">Resources</h6>
                    <h4 className="text-4xl font-bold mb-4"></h4>
                </Card>
            );
        case "R-DTI":
            return (
                <Card className="w-full items-center text-center h-auto text-info_text">
                    <h1 className="text-4xl font-bold mb-4 text-black">
                        We are Sorry
                    </h1>
                    <h4 className="text-2xl font-bold mb-4">
                        You have been denied for a home mortgage loan
                    </h4>
                    <h6 className="text-lg">{props.reasonForDenial}</h6>
                    <h2 className="text-4xl font-bold mb-4 text-success "></h2>
                    <h6 className="text-lg`">Resources</h6>
                    <h4 className="text-4xl font-bold mb-4"></h4>
                </Card>
            );
        default:
            return (
                <Card className="w-full items-center text-center h-auto text-info_text"></Card>
            );
    }
};

const ApprovalSection = (props: Props) => {
    return (
        <div className="flex flex-col items-center text-center shadow-lg my-8">
            {renderSwitch(props)}
        </div>
    );
};

export default ApprovalSection;
