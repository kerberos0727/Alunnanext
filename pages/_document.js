import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" type="image/png" href={require("../images/favicon.png")}></link> */}

                    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
                    <meta name="theme-color" content="#000000" />
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                    <link href="https://fonts.googleapis.com/css?family=Inter:300,400,500,700" rel="stylesheet" />
                    <meta name="description"
                        content="Alunna" />
                    <meta name="keywords" content="alunna" />
                    <meta name="author" content="Alunna" />
                    {/* <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/19690452.js"></script> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;