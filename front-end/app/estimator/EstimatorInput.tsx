"use client";
import React, { useState } from "react";
import { Label, TextInput, RangeSlider } from "flowbite-react";
import AnalyzedHomeBuyerInfo from "./AnalyzedHomeBuyerInfo";

type Props = {
    label: string;
    key: string;
    placeholder: string;
    min: number;
    max: number;
    onChange: (e: any) => void;
    mean?: number;
};

type keyTypes = Record<string, string>;

const keys: keyTypes = {
    GrossMonthlyIncome: "GrossMonthlyIncome",
    CreditCardPayment: "CreditCardPayment",
    CarPayment: "CarPayment",
    StudentLoanPayments: "StudentLoanPayments",
    AppraisedValue: "AppraisedValue",
    DownPayment: "DownPayment",
    CreditScore: "CreditScore",
};

const EstimatorInput = (props: Props) => {
    const [value, setValue] = useState(0);

    const handleChange = (e: any) => {
        props.onChange(+e.currentTarget.value);
    };

    return (
        <div className="flex max-w-md flex-col gap-4 my-4">
            <div>
                <div className="mb-2 block">
                    <Label
                        className="text-lg"
                        htmlFor="small"
                        value={props.label}
                    />
                </div>
                {value === 0 ? (
                    <TextInput
                        id="lg"
                        type="number"
                        sizing="lg"
                        placeholder={props.placeholder}
                        className="shadow-inner"
                        onChange={handleChange}
                    />
                ) : (
                    <TextInput
                        id="lg"
                        type="number"
                        sizing="lg"
                        placeholder={props.placeholder}
                        className="shadow-inner"
                        value={value}
                        onChange={handleChange}
                    />
                )}

                <div className="flex items-center justify-center text-xs px-2">
                    {/* <RangeSlider
                        className="mt-2 w-full"
                        onChange={handleChange}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default EstimatorInput;
