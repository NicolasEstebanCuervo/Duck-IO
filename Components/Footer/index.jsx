import React from "react";
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.sub_container_footer}>
                <h1 className={styles.title_footer}>Duck IO</h1>
                <h3 className={styles.copyright_text}>
                    &copy; {new Date().getFullYear()} Duck IO All Rights
                    Reserved.
                </h3>
            </div>
        </footer>
    );
}

export default Footer;
