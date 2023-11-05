"use client";
import React from "react";
import { Label, TextInput } from "flowbite-react";

type Props = {
    label: string;
    placeholder: string;
};

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
                />
            </div>
        </div>
    );
};

export default EstimatorInput;
