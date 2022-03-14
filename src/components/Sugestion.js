import styled from "styled-components";

export default function Sugestion({userImage, userName, userState}) {
    return (
        <Container>
            <div className="user">
                <img src={`assets/img/${userImage}`} alt={`Perfil de ${userName}`}/>
                <div className="text">
                <div className="name">{userName}</div>
                <div className="state">{userState}</div>
                </div>
            </div>

            <div className="follow">Seguir</div>
        </Container>
    );
}

const Container = styled.div`
    height: 31px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    cursor: pointer;
    
    margin-bottom: 16px;

    .user {
        display: flex;

        img {
            width: 32px;
            height: 32px;
        }
        .text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            margin-left: 10px;

            & :last-child {
                color: #8E8E8E;
                font-weight: 400;
            }
        }
    }
    .follow {
        color: #139EF2;
        font-weight: 600;
    }
`;