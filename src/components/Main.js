import styled from "styled-components";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

export default function Main() {
    return (
        <Container>
            <Feed/>
            <Sidebar/> 
        </Container>
    );
}

const Container = styled.div`
    width: 935px;
    
    display: flex;
    justify-content: space-between;

    margin: 0 auto;

    @media (max-width: 935px) {
        width: 100%;

        justify-content: center;
    }
`;