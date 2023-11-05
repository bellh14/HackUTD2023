"use client";
import React from "react";
import {
    BarChart,
    Bar,
    Cell,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import HomeBuyerStats from "../HomeBuyerStats";
import AnalyzedHomeBuyerInfo from "../estimator/AnalyzedHomeBuyerInfo";
import UserInfo from "../UserInfo";

type Props = {};

const BarCharts = (props: Props) => {
    return (
        <div suppressHydrationWarning={true}>
            <BarChart
                width={800}
                height={600}
                data={UserInfo}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                className="bg-white"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="key" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="GrossMonthlyIncome" fill="#8884d8">
                    {UserInfo.map((entry, index) => (
                        <Cell
                            cursor="pointer"
                            fill={index === 0 ? "#82ca9d" : "#8884d8"}
                            key={`cell-${index}`}
                        />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default BarCharts;
