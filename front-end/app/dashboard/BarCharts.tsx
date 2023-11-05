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

type Props = {
    title: string;
    label: string;
};

const BarCharts = (props: Props) => {
    return (
        <div className={"flex flex-col text-center shadow-md"} suppressHydrationWarning={true}>
            <h3 className="text-2xl font-bold my-4 text-primary">{props.title}</h3>
            <BarChart
                width={480}
                height={300}
                data={UserInfo}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                className="bg-white my-4"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="key" />
                <YAxis />
                <Tooltip />
                <Bar dataKey={props.label} fill="#8884d8">
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
