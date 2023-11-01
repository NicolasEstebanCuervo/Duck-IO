"use client"
import React, { useState } from "react";
import styles from "./Navigation.module.css"; 

export default function Navigation () {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <div className={`${styles.menu}${isMenuOpen ? `${styles.open} ` : ""}`}>
                <a className={styles.link} href="/">Home</a>
                <a className={styles.link} href="/about">About</a>
                <a className={styles.link} href="/post">Post</a>
            </div>
        </div>
    );
};

