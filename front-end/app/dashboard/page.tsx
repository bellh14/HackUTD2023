"use client";
import React from "react";
import LineCharts from "./LineCharts";

type Props = {};

export default function page({}: Props) {
    return (
        <div>
            <h1>Dashboard</h1>
            <LineCharts />
        </div>
    );
}
