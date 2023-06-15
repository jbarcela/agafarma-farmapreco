import Footer from "../Footer";
import Header from "../Header/index.jsx";

export default function Layout({children}){
    return(
        <>
            <Header/>
                <main>{children}</main>
            <Footer/>
        </>
    )
}