import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/icons/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
