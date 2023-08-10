import React, { useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

import { AppStateContext } from "../../AppStateContext/AppStateContext";

import "./playerOver.css";
import "./playerNavDesign.css";

import posterSample from "./../../temp/p3.jpg";
import mockData from "../../mock/mockData";

function PlayerNavigation(){
    const {appState, setAppState} = useContext(AppStateContext);

    const [isMusicTextOverflowing, setIsMusicTextOverflowing] = useState(false);
    const [isArtistTextOverflowing, setIsArtistTextOverflowing] = useState(false);

    const musicNameRef = useRef(null);
    const artistNameRef = useRef(null);

    const navigate = useNavigate();

    const musicDetails = appState.player;

    const handlePlayerSlide = (event) => {
        if (event.target.closest('BUTTON') || event.target.closest('.music-progress')) return;
        
        const playerSlideState = appState.player.playerSlideOpen;


        if(playerSlideState){
            setAppState({...appState, player: {...appState.player, slideCloseClicking: true}});
            setTimeout(() => {
                
                setAppState({...appState, player: {...appState.player, playerSlideOpen: !playerSlideState}})
                navigate(-1);
            }, 200);
        }else{
            navigate("/w?onPlay="+appState.player.musicID);
            setAppState({...appState, player: {...appState.player, slideCloseClicking: false}});
            setAppState({...appState, player: {...appState.player, playerSlideOpen: !playerSlideState}})
        }
    }

    const playPauseHandle = () => {
        setAppState({...appState, player: {...appState.player, onPlay: !appState.player.onPlay}});
    }

    const skipPrevHandle = () => {}
    const skipNextHandle = () => {}
    const likeButtonHandle = () => {
        setAppState({...appState, player: {...appState.player, isFavorite: !appState.player.isFavorite}});
    }
    const shuffleModeHandle = () => {
        setAppState({...appState, player: {...appState.player, onShuffleMode: !appState.player.onShuffleMode}});
    }
    const queueButtonHandle = () => {
        // setAppState({...appState,player:{...appState.player, panelTab: 'queue'}})
        // console.log(appState.player.panelTab);
        // if state is something different and slide is closed then set the state to queue and open slide
         
    }
    useEffect(() => {
        setIsMusicTextOverflowing(musicNameRef.current.firstChild.scrollWidth > musicNameRef.current.offsetWidth);
        setIsArtistTextOverflowing(artistNameRef.current.firstChild.scrollWidth > artistNameRef.current.offsetWidth);
    }, []);

    
    return (
        <div className="playerNavBar">
            <div className="navbar-internal" onClick={handlePlayerSlide}>
                <div className="music-poster">
                    <img src={posterSample} alt="Music Poster" />
                    <div className="music-details">
                    <div className={isMusicTextOverflowing ? "music-name make-text-dynamic" : "music-name"} ref={musicNameRef}><span className={isMusicTextOverflowing ? "slide-text" : ""}>{musicDetails.musicName}</span></div>
                    <div className={isArtistTextOverflowing ? "artist-name make-text-dynamic" : "artist-name"} ref={artistNameRef}><span className={isArtistTextOverflowing ? "slide-text" : ""}>{musicDetails.artistName}</span></div>
                    </div>
                </div>

                <button className="liked-song-button" aria-label="Liked Song" onClick={likeButtonHandle}>
                    <span className={ musicDetails.isFavorite? "material-symbols-outlined liked": "material-symbols-outlined"}>favorite</span>
                </button>

                <div className="player-control-buttons">
                    <button className="previous-button" aria-label="Previous" onClick={skipPrevHandle}>
                    <span className="material-symbols-outlined">skip_previous</span>
                    </button>

                    <button className="play-pause-button" aria-label="Play/Pause" onClick={playPauseHandle}>
                    <span className="material-symbols-outlined">{appState.player.onPlay? "play_arrow" : "pause"}</span>
                    </button>

                    <button className="next-button" aria-label="Next" onClick={skipNextHandle}>
                    <span className="material-symbols-outlined">skip_next</span>
                    </button>
                </div>

                <div className="music-progress">
                    <div className="current-time">0:00</div>
                    <div class="progress-bar-container">
                        <div className="progress-bar">
                            <div className="dot" id="dot"></div>
                        </div>
                    </div>
                    <div className="duration">{musicDetails.musicDuration}</div>
                </div>

                <button className="shuffle-button" aria-label="Shuffle" onClick={shuffleModeHandle}>
                    <span className={musicDetails.onShuffleMode? "material-symbols-outlined onShuffle": "material-symbols-outlined"}>shuffle</span>
                </button>

                <button className="queue-button" aria-label="Queue" onClick={queueButtonHandle}>
                    <span className="material-symbols-outlined">queue_music</span>
                </button>
            </div>
        </div>
    )
}

export default PlayerNavigation;