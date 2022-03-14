import styled from "styled-components";
import Story from "./Story";

const stories = [
    {
        userImage: "9gag.svg",
        userName: "9gag"
    },
    {
        userImage: "meowed.svg",
        userName: "meowed"
    },
    {
        userImage: "barked.svg",
        userName: "barked"
    },
    {
        userImage: "nathanwpylestrangeplanet.svg",
        userName: "nathanwpylestrangeplanet"
    },
    {
        userImage: "wawawicomics.svg",
        userName: "wawawicomics"
    },
    {
        userImage: "respondeai.svg",
        userName: "respondeai"
    },
    {
        userImage: "filomoderna.svg",
        userName: "filomoderna"
    },
    {
        userImage: "memeriagourmet.svg",
        userName: "memeriagourmet"
    }
]

export default function Stories() {   
    return (
        <Container>
           {stories.map(
                (story) => (<Story userImage={story.userImage} userName={story.userName}/>)
            )}

           <div className="arrow">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </Container>
    );
}

const Container = styled.div`
    height: 118px;
    
    display: flex;
    align-items: center;
    
    background-color: #FFFFFF;
    
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    
    padding: 0 18px;
    
    overflow: hidden;
    
    position: relative;

    .arrow {
        width: 32px;
        height: 32px;

        position: absolute;
        right: 10px;
        top: 45px;

        color: #FFF;
        font-size: 28px;
        
        cursor: pointer;
    }

    @media (max-width: 614px) {
        width: 100%;
        
        background-color: transparent;
        border: none;

        .arrow {
            display: none;
        }
    }
`;