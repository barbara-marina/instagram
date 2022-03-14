import styled from "styled-components";
import Post from "./Post";

const posts = [{user: {userImage: "meowed.svg", userName: "meowed"},
                post: {format: "img", acess: "gato-telefone"},
                likes:{likesImage: "respondeai.svg", likesName: "respondeai", more: "101.523"}},
               {user: {userImage: "meowed.svg", userName: "meowed"},
                post:{format: "video", acess: "video"},
                likes:{likesImage: "adorable_animals.svg", likesName: "adorable_animals", more: "64.199"}},
               {user: {userImage: "barked.svg", userName: "barked"},
                post: {format: "img", acess: "dog"},
                likes:{likesImage: "adorable_animals.svg", likesName: "adorable_animals", more: "99.159"}}];

export default function Posts() {
    return (
        <Container>
            {posts.map((p) => (<Post user={p.user} post={p.post} likes={p.likes}/>))}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 18px 0;

    gap: 60px;

    @media (max-width: 614px) {
        margin: 0 0  72px 0;
    }
`;