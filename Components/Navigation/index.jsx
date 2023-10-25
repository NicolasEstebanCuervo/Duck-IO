"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";

const links = [
    {
        label: "Home",
        route: "/",
    },
    {
        label: "About",
        route: "/about",
    },
    { label: "Post", route: "/post" },
];

const NavbarComponent = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <Navbar>
            <Hamburger onClick={toggleMenu}>
                <Bar />
                <Bar />
                <Bar />
            </Hamburger>
            <Menu isOpen={isMenuOpen}>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/post">Post</NavItem>
            </Menu>
        </Navbar>
    );
};

export default NavbarComponent;

const Navbar = styled.nav`
    border: 1px solid white;
    border-radius: 5px;
    padding: 1%;
`;

const NavItem = styled.a`
    transition: border-bottom 0.5s ease;
    font-size: 25px !important;
    transition: border-color 0.3s;
    border: 2px solid transparent;
    text-decoration-line: none;
    color: #fff;

    &:hover {
        color: #cfcdcd9d;
    }

    @media (max-width: 400px) {
        font-size: 5vw !important;
    }
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
    }
`;

const Bar = styled.div`
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
`;

const Menu = styled.div`
    display: flex;
    justify-content: center;
    gap: 2%;

    @media (max-width: 768px) {
        width: 100%;
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
    }
`;
