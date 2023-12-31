"use client";
import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import exampleLogo from "../../public/next.svg";
import fmLogo from "../../public/fmLogo.png";

type Props = {};

const NavBar = (props: Props) => {
    return (
        <Navbar fluid rounded className="bg-primary">
            <Navbar.Brand href="https://flowbite-react.com">
                <Image
                    src={fmLogo.src}
                    width={64}
                    height={64}
                    className={"mr-4"}
                    alt={"Example Logo"}
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                    HomeVISOR
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={<Avatar alt="User settings" rounded />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="text-xl">
                <Navbar.Link href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#" active>
                    About
                </Navbar.Link>
                <Navbar.Link href="#" active>
                    Services
                </Navbar.Link>
                <Navbar.Link href="/dashboard" active>
                    Dashboard
                </Navbar.Link>
                <Navbar.Link href="/estimator" active>
                    Estimator
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
