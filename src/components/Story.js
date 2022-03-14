import styled from "styled-components";

export default function Story({userImage, userName}) {
    return (
        <Container>
            <div className="image">
                <img src={`assets/img/${userImage}`} alt={`Perfil de ${userName}`} />
            </div>
            <div className="user">
                {userName}
            </div>
        </Container>
    );
}

const Container = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 16px 0;
    margin-right: 10px;

    font-size: 12px;
    
    cursor: pointer;
    
    .image {
        width: 66px;
        height: 66px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-image: url('../assets/img/story-circle.svg');
        
        img {
            width: 56px;
            height: 56px;

            border-radius: 50%;
        }
    }
    .user {
        width: 66px;
        height: 14px;

        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }
`;