import "../styles/global.css";
import Layout from "../components/Layout.js/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (        
        <Layout>
            <Head>
                <title>Farmácias Agafarma</title>
                <link rel="icon" href="/caminho/para/o/seu/icone.png" />
            </Head>
            <Component {...pageProps} />
        </Layout>       
    )
}

export default MyApp;
