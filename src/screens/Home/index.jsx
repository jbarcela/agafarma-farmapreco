import Contact from "../../components/Contact";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Stores from "../../components/Stores";

export default function Home(){
    return(
        <Container>
            <Header/>
            <Hero />
            <Stores/>
            <Contact/>
        </Container>
    )
}