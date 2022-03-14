import styled from "styled-components";
import Sugestions from "./Sugestions";
import User from "./User";

const {userImage, userName, userNickname} = 
      {userImage: "catanacomics.svg", userName: "catanacomics", userNickname: "Catana"};

export default function Sidebar() {
    return (
        <Container>
            <User userImage={userImage} userName={userName} userNickname={userNickname}/>
            <Sugestions/>

            <nav>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </nav>

            <footer>
                © 2021 INSTAGRAM DO FACEBOOK
            </footer>
        </Container>
    );
}

const Container = styled.div`
    width: 293px;

    padding-top: 24px;

    position: sticky;
    top: 88px;

    nav {
        margin: 40px 0 18px 0;
        cursor: pointer;
    }
    nav, footer {
        font-size: 11px;
        color: #C7C7C7;
    } 
    @media (max-width: 935px) {
        display: none;
    }
`;