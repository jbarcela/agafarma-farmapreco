// import { GlobalStyle } from "../styles/GlobalStyle"
import "../styles/global.css";
import Layout from "../components/Layout.js/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            {/* <GlobalStyle /> */}
            <Component {...pageProps} />
        </Layout>
       
    )
}

export default MyApp;
