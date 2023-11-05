"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import Home1 from "../public/Carousel/home1.jpg";
import Home2 from "../public/Carousel/home2.jpg";
import Home3 from "../public/Carousel/home3.jpg";
import ApprovalSection from "./dashboard/ApprovalSection";

export default function Home() {
    return (
        <main className="items-center justify-between pb-24  bg-white ">
            <div
                className="h-400 sm:h-64 xl:h-80 2xl:h-96 pb-8"
                style={{ height: "850px" }}
            >
                <Carousel slideInterval={5000}>
                    <Image src={Home1} alt="Home1"/>
                    <Image src={Home2} alt="Home2"/>
                    <Image src={Home3} alt="Home3"/>
                </Carousel>
            </div>
        </main>
    );
}
