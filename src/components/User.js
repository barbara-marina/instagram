import styled from "styled-components";

export default function User({userImage, userName, userNickname}) {
    return (
        <Container>
            <img src={`assets/img/${userImage}`} alt={userImage}/>
            <div className="text">
                <strong>{userName}</strong>
                {userNickname}
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
    .text {
        display: flex;
        flex-direction: column;
        margin-left: 14px;
        font-weight: 300;
        color: #8E8E8E;

        strong {
            font-weight: 500;
            color: #262626;
        }
    }
`;