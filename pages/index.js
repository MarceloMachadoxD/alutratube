import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../source/components/Menu";
import { StyledTimeLine } from "../source/components/timeline";

function HomePage() {
    const estilosDaHomePage = {
        //backgroundColor: "red"
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <div style={estilosDaHomePage}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <TimeLine valorDoFiltro={valorDoFiltro} playlists={config.playlists} />
            </div>
        </>
    );
}

export default HomePage


const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius:50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 16px 32px;
        gap: 16px
    }
  `;

const StyledBanner = styled.div`
    background-color: brown;
    background-image: url(${({ bg }) => bg});
    height: 230px;
  `;

function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg} />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine({ valorDoFiltro, ...props }) {
    const playlistsNames = Object.keys(props.playlists);
    return (
        <StyledTimeLine>
            {playlistsNames.map((playlistsName) => {
                const videos = props.playlists[playlistsName]
                return (
                    <section key={playlistsName}>
                        <h2>{playlistsName}</h2>
                        <div>
                            {videos.filter((video) => {
                                return video.title.toLowerCase().includes(valorDoFiltro.toLowerCase())
                            })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url} >
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                }
                                )}
                        </div>
                    </section>
                )
            }
            )}
        </StyledTimeLine>
    )
}
