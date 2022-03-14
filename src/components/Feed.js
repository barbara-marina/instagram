import styled from "styled-components";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed() {
    return(
        <Container>
                <Stories/>
                <Posts/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    max-width: 614px;

    @media (max-width: 935px) {
        width: 100%;
        
        justify-content: center;
    }
    @media (max-width: 614px) {
        margin-top: 0;
    }
`;