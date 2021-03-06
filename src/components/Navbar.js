import styled from "styled-components";

export default function Navbar({logo}) {
    return (
        <Container>
            <section>
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="bar"></div>
                    <img src={logo} alt="logo"/>
                </div>
        
                <input className="search-bar" type="text" placeholder="Pesquisar" />
        
                <nav className="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </nav>

                <div className="logo-mobile">            
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <img className="instagram-mobile" src={logo} alt="logo" />

                <nav className="icons-mobile">            
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </nav>
                
            </section>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 54px;

    display: flex;
    justify-content: center;

    border-bottom: 1px solid #DBDBDB;
    background-color: #FFF;
    font-size: 22px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    ion-icon, img {
        cursor: pointer;
    }
    img {
        position: relative;
        top: 3px;
    }
    section {
        width: 100%;
        max-width: 935px;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        
        * {
            height: 29px;

            display: flex;
            align-items: center;
        }
        .icons {
            gap: 10px
        }
        .logo-mobile, .instagram-mobile, .icons-mobile {
            display: none;
        }
        .bar {
            width: 1px;
            height: 22px;

            background-color: #DBDBDB;

            margin: 0 10px;
        }
        .search-bar {
            width: 215px;
            height: 28px;

            border: 1px solid #DBDBDB;
            border-radius: 3px;

            background-color: #FAFAFA;
            color: #979797;

            text-align: center;
        }
    }
    @media (max-width: 935px) {
        section  {
            padding: 0 20px;
        }
    }
    @media (max-width: 614px) {
        section {
            .logo-mobile, .instagram-mobile, .icons-mobile {
                display: flex;
            }
            .instagram-mobile {
                position: relative;
                top: 4px;
            }
            .icons, .search-bar, .logo{
                display: none;
            }
        }
    }
`;