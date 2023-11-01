import Head from "next/head";
import React, { useEffect } from "react";
import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {

    useEffect(() => {
        typeof document !== undefined
            ? require("bootstrap/dist/js/bootstrap")
            : null;
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
