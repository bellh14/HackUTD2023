"use client";
import React from "react";
import { Label, TextInput, RangeSlider } from "flowbite-react";
import AnalyzedHomeBuyerInfo from "./AnalyzedHomeBuyerInfo";

type Props = {
    label: string;
    key: string;
    placeholder: string;
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

const minValues = (label: string) => {
    switch (label) {
        case keys.GrossMonthlyIncome:
            return 2000;
        case keys.CreditCardPayment:
            return 200;
        case keys.CarPayment:
            return 350;
        case keys.StudentLoanPayments:
            return 200;
        case keys.AppraisedValue:
            return 230020;
        case keys.DownPayment:
            return 11510;
        case keys.CreditScore:
            return 500;
        default:
            return 0;
    }
}

const maxValues = (label: string) => {
    switch (label) {
        case keys.GrossMonthlyIncome:
            return 9999;
        case keys.CreditCardPayment:
            return 500;
        case keys.CarPayment:
            return 500;
        case keys.StudentLoanPayments:
            return 450;
        case keys.AppraisedValue:
            return 500000;
        case keys.DownPayment:
            return 144250;
        case keys.CreditScore:
            return 850;
        default:
            return 0;
    }
}


const EstimatorInput = (props: Props) => {
    return (
        <div className="flex max-w-md flex-col gap-4 my-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="small" value={props.label} />
                </div>
                <TextInput
                    id="small"
                    type="number"
                    sizing="sm"
                    placeholder={props.placeholder}
                    min={minValues(props.label)}
                    max={maxValues(props.label)}
                />
                {/* <RangeSlider onRateChange={}/> */}
            </div>
        </div>
    );
};

export default EstimatorInput;
