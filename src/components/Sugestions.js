import styled from "styled-components";
import Sugestion from "./Sugestion";

const sugestions = [
    {
        userImage: "bad.vibes.memes.svg",
        userName: "bad.vibes.memes",
        userState: "Segue você"
    },
    {
        userImage: "chibirdart.svg",
        userName: "chibirdart",
        userState: "Segue você"
    },
    {
        userImage: "razoesparaacreditar.svg",
        userName: "razoesparaacreditar",
        userState: "Novo no Instagram"
    },
    {
        userImage: "adorable_animals.svg",
        userName: "adorable_animals",
        userState: "Segue você"
    },
    {
        userImage: "smallcutecats.svg",
        userName: "smallcutecats",
        userState: "Segue você"
    }        
];

export default function Sugestions() {
    return (
        <Container>
            <div className="title">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestions.map(
                (s) => (
                    <Sugestion userImage={s.userImage} 
                    userName={s.userName} userState={s.userState} />
                )
            )}  
        </Container>
    );
}

const Container = styled.div`
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 20px 0 14px;
    }
`;