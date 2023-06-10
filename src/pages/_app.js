import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle"
import Layout from "../components/Layout.js/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
        </Layout>
       
    )
}

export default MyApp;
