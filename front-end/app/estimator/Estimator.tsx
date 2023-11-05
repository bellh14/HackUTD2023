"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import EstimatorInput from "./EstimatorInput";
import { Button, Modal } from "flowbite-react";
import { createPost, fetchPosts, createPostAsync } from "../api/API";
import HomeBuyerStats from "../HomeBuyerStats";
import axios from "axios";
import UserInfo from "../UserInfo";
import ApprovalSection from "../(Shared-Components)/ApprovalSection";
import { PostFormData } from "../types";

type Props = {};

const Estimator = (props: Props) => {
    // const dispatch = useDispatch<AppDispatch>();
    const [state, setState] = useState(1);
    const [carPayment, setCarPayment] = useState(0);
    const [forceUpdate, setForceUpdate] = useState(false);
    const [studentLoanPayments, setStudentLoanPayments] = useState(0);
    const [creditCardPayment, setCreditCardPayment] = useState(0);
    const [creditScore, setCreditScore] = useState(0);
    const [grossMonthlyIncome, setGrossMonthlyIncome] = useState(0);
    const [appraisedValue, setAppraisedValue] = useState(0);
    const [downPayment, setDownPayment] = useState(0);
    const [openModal, setOpanModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        CarPayment: 0,
        StudentLoanPayments: 0,
        CreditCardPayments: 0,
        CreditScore: 0,
        GrossMonthlyIncome: 0,
        AppraisedValue: 0,
        DownPayment: 0,
    });

    const [modelResponse, setModelResponse] = useState({
        status: "",
        message: "",
    });

    async function submitHandler(e: any) {
        e.preventDefault();
        const formData: PostFormData = {
            CarPayment: carPayment,
            StudentLoanPayments: studentLoanPayments,
            CreditCardPayments: creditCardPayment,
            CreditScore: creditScore,
            GrossMonthlyIncome: grossMonthlyIncome,
            AppraisedValue: appraisedValue,
            DownPayment: downPayment,
        };
        const data = await createPost(formData);
        console.log(data);
        setModelResponse(data);
        setState(state + 1);
        setFormData(formData);
        const handleForceUpdate = () => {
            setForceUpdate((prevState) => !prevState);
        };
        handleForceUpdate();
        setLoading(false);
    }

    return (
        <main className="items-center justify-between p-24">
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
            {/* <Modal show={openModal} onClose={() => setOpanModal(false)} popup>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <ApprovalSection
                        approvalStatus={modelResponse.status}
                        reasonForDenial={modelResponse.message}
                    />
                </Modal.Body>
            </Modal> */}
            {/* <Modal show={openModal} onClose={() => setOpanModal(false)} popup>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <ApprovalSection
                        approvalStatus={modelResponse.status}
                        reasonForDenial={modelResponse.message}
                    />
                </Modal.Body>
            </Modal> */}
            {modelResponse.status === "approved" && !loading && (
                <ApprovalSection
                    approvalStatus={modelResponse.status}
                    message={modelResponse.message}
                />
            )}
            {modelResponse.status === "denied" && !loading && (
                <ApprovalSection
                    approvalStatus={modelResponse.status}
                    reasonForDenial={modelResponse.message}
                />
            )}{" "}
        </main>
    );
};

export default Estimator;
