import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../../AppStateContext/AppStateContext";
import axios from "axios";
import {getCookie} from "../../cookieAndSession/cookiesOperator"


function TrackCard({linkTo, trackName, tracktArtists , posterImg, track_id}) {
    const { appState, setAppState } = useContext(AppStateContext);
    const token = getCookie('youtube-music-clone').token;

    const [tracks, setTracks] = useState(null);
    const navigate = useNavigate();
    const clickHandle = () => {
        if (token) {
            axios.get(`https://api.spotify.com/v1/audio-features/${track_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                setTracks(response.data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
            console.log(track_id);
        }
    }
    useEffect(() => {
        
        if(tracks !== null){
            
            const tracktArtistsString = tracktArtists.map((artist)=>(`${artist.name}`)).join(' • ')
            
            if(!(appState.player.musicID === track_id)) {
                setAppState({
                    ...appState, 
                    player: {...appState.player, 
                        onPlay: true,
                        playNStop: true,
                        musicLink: linkTo,
                        musicPoster: posterImg,
                        musicName: trackName,
                        artistName: tracktArtistsString,
                        musicID: track_id,
                        musicDuration: tracks.duration_ms,
                    }
                });
            }
            navigate(linkTo);
        }
      }, [tracks]);

    return (
        // <NavLink to={linkTo}>
        <div className="m-card" id="track-card" onClick={clickHandle}>
            <div className="m-card-insides">
                <div className="card-poster">
                <div className="play-pause-button">
                    <span className="material-symbols-outlined">
                    play_arrow
                    </span>
                </div>
                <div className="poster-hover">
                    <div className="more-option-button">
                    <span className="material-symbols-outlined">
                        more_vert
                    </span>
                    </div>
                    
                </div>
                <img src={posterImg} alt="poster"/>
                </div>
                <div className="card-abouts">
                <a className="card-title" href={linkTo}>{trackName}</a>
                <p className="card-album" >{tracktArtists.map((artist)=>(`${artist.name}`)).join(' • ')}</p>
                </div>
            </div>
        </div>
        // </NavLink>
    )
}
export default TrackCard;