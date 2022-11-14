import react from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../source/components/Menu";
import { StyledTimeLine } from "../source/components/timeline";
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://jcoqksrjdubjahidhaqt.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impjb3Frc3JqZHViamFoaWRoYXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjA4NjQsImV4cCI6MTk4MzgzNjg2NH0.otrv9rKhx76Vy_7QptkewgH8kU72zBKbULC_awsiF4w"
export const supabase = createClient(supabaseUrl, supabaseAnonKey)



function HomePage() {

    const [valorDoFiltro, setValorDoFiltro] = react.useState("");
    const [playlists, setPlaylists] = react.useState({})

    react.useEffect(() => {
        supabase.from("video")
            .select("*")
            .then((dados) => {
                console.log(dados.data);
                const novasPlayLists = { ...playlists };
                dados.data.forEach((video) => {
                    if (!novasPlayLists[video.playlist]) {
                        novasPlayLists[video.playlist] = []
                    }
                    novasPlayLists[video.playlist]?.push(video)
                })
                setPlaylists(novasPlayLists);

            });
    }, [])

    return (
        <>
            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <TimeLine valorDoFiltro={valorDoFiltro} playlists={playlists} />
            </div>
        </>
    );
}

export default HomePage


const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
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
