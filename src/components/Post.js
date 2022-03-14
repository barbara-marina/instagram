import styled from "styled-components";

export default function Post({user:{userImage, userName}, post:{format, acess}, like:{likeImage,likeName, more}}) {
    return (
        <Container>
            <header>
                <div className="user">
                    <img src={`assets/img/${userImage}`} alt={`Perfil de ${userName}.`} />
                    {userName}
                </div>
                <div className="actions">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </header>

            <article>
                {format==="img" 
                    ? <img src={`./assets/img/${acess}.svg`} alt="post" />
                    : <video autoPlay loop>
                        <source src={`./assets/video/${acess}.mp4`} type="video/mp4" />
                        <source src={`./assets/video/${acess}.ogv`} type="video/ogv" />
                      </video>
                }
            </article>

            <footer>
                <div className="actions">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                </div>

                <div className="likes">
                    <img src={`assets/img/${likeImage}`} alt={likeName} />
                    <div className="text">
                        Curtido por <strong>{likeName}</strong> e <strong>outras {more} pessoas</strong>
                    </div>
                </div>
            </footer>
        </Container>
    );
}

const Container = styled.div`
    border-radius: 3px;
    border: 1px solid #DBDBDB;

    display: flex;
    flex-direction: column;

    background-color: #FFFFFF;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 13px 16px;

        font-size: 14px;
        font-weight: 500;

        .user, .atcions {
            height: 32px;

            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;
        }
        img {
            width: 32px;
            height: 32px;
            
            margin-right: 10px;

            cursor: pointer;
        }
        ion-icon {
            width: 16px;
        }
    }
    ion-icon, strong {
        cursor: pointer;
    }
    article, article img, article video{
        width:100%;
        height: auto;
    }
    footer {
        .actions {
            height: 32px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 25px 0 25px  18px;

            font-size: 24px;

            ion-icon {
                margin-right: 18px;
            }
        }
        .likes {
            display: flex;
            align-items: center;

            padding: 0 16px 13px;

            font-weight: 300;

            img {
                width: 20px;
                height: 20px;

                margin-right: 10px;
            }
        }
    }
    @media (max-width: 614px) {
        width: 100%;  
        
        border-radius: 0;
        border-left: none;
        border-right: none;
    }
`;