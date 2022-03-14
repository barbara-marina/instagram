import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
    return (
        <Container>
            <Navbar/>
            <Main/>
            <Footer/>
        </Container>
    );
}

const Container = styled.div`    
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;

    padding-top: 88px;

    background-color: #FAFAFA;
    color: #262626;

    @media (max-width: 614px) {
        padding-top: 53px;
    }
`;