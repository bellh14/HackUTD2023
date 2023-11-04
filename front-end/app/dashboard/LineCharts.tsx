import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import HomeBuyerInfo from "../HomeBuyerInfo";

type Props = {};

const LineCharts = (props: Props) => {
    return (
        <LineChart
            width={600}
            height={400}
            data={HomeBuyerInfo.slice(0, 20)}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            className="bg-white"
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ID" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="GrossMonthlyIncome"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
        </LineChart>
    );
};

export default LineCharts;
