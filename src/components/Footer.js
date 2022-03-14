import styled from "styled-components";

export default function App() {
    return (
        <Container>
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </Container>
    );
}

const Container = styled.div`
    display: none;

    @media (max-width: 614px) {
        width: 100%;
        height: 54px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 24px;
        
        background-color: #FFF;
        border-top: 1px solid #DBDBDB;
        
        padding: 0 20px;

        position: fixed;
        bottom: 0;
        left: 0;

        ion-icon {
            cursor: pointer;
        }
    }
`;