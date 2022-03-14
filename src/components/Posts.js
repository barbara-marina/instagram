import styled from "styled-components";
import Post from "./Post";

const posts = [
    {
        user: {
            userImage: "meowed.svg",
            userName: "meowed"
        },
        post:{
            format: "video",
            acess: "video"
        },
        like:{
            likeImage: "adorable_animals.svg",
            likeName: "adorable_animals",
            more: "64.999"
        }
    },
    {
        user: {
            userImage: "meowed.svg",
            userName: "meowed"
        },
        post: {
            format: "img",
            acess: "gato-telefone"
        },
        like:{
            likeImage: "respondeai.svg",
            likeName: "respondeai",
            more: "101.523"
        }
    },
    {
        user: {
            userImage: "barked.svg",
            userName: "barked"
        },
        post: {
            format: "img",
            acess: "dog"
        },
        like:{
            likeImage: "adorable_animals.svg",
            likeName: "adorable_animals",
            more: "99.159"
        }
    }
];

export default function Posts() {
    return (
        <Container>
            {posts.map(
                (p) => (
                    <Post user={p.user} post={p.post} like={p.like}/>
                )
            )}
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