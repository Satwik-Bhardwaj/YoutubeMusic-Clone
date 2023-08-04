import React, { useContext, useEffect, useRef, useState } from "react";

import { AppStateContext } from "../../AppStateContext/AppStateContext";

import "./playerOver.css";
import "./playerNavDesign.css";

import posterSample from "./../../temp/p3.jpg";

function RequestNewSong(param){

}

function PlayerOver() {
    const { appState, setAppState } = useContext(AppStateContext);

    const musicNameRef = useRef(null);
    const artistNameRef = useRef(null);

    const [slideCloseClicking, setSlideCloseClicking] = useState();

    const [isMusicTextOverflowing, setIsMusicTextOverflowing] = useState(false);
    const [isArtistTextOverflowing, setIsArtistTextOverflowing] = useState(false);

    const musicDetails = appState.player;

    useEffect(() => {
        setIsMusicTextOverflowing(musicNameRef.current.firstChild.scrollWidth > musicNameRef.current.offsetWidth);
        setIsArtistTextOverflowing(artistNameRef.current.firstChild.scrollWidth > artistNameRef.current.offsetWidth);
    }, []);

    const handlePlayerSlide = (event) => {

        if (event.target !== event.currentTarget) return;
            const playerSlideState = appState.player.playerSlideOpen;


            if(playerSlideState){
                setSlideCloseClicking(true);
                setTimeout(() => {
                    setAppState({...appState, player: {...appState.player, playerSlideOpen: !playerSlideState}})
                }, 200);
            }else{
                setSlideCloseClicking(false);
                setAppState({...appState, player: {...appState.player, playerSlideOpen: !playerSlideState}})
            }
    }

    const playPauseHandle = () => {
        const playingState = appState.player.onPlay;
        setAppState({...appState, player: {...appState.player, onPlay: !playingState}})
        console.log(appState.player.onPlay)
    }

    const skipPrevHandle = () => {
        
    }
    const skipNextHandle = () => {
    }

    var playerPanel = ("");

    if(appState.player.playerSlideOpen){
        var additionTab = "";

        if(appState.player.playerTab === "up-next"){
            additionTab = (
                <div className="upNextTab">
                    <div className="tabInternal">
                        <div className="nextMusicOption playingMusic" onClick={RequestNewSong()}>
                            <div className="optionPoster">
                                <img src={posterSample}/>
                            </div>
                            <div className="optionLabels">
                                <div className="musicName">
                                    <span>Tu Tu Hai Wohi</span>
                                </div>
                                <div className="artistName">
                                    <span>Jonita Gandhi</span>
                                </div>
                            </div>
                            <div className="musicDuration">
                                <span>5:16</span>
                            </div>

                        </div>
                        
                    </div>
                </div>
            )
        }

        playerPanel = (
            <div className="playerInterface" style={{animation: slideCloseClicking ? "slide-out 0.4s linear" : "slide-in 0.2s linear"}}>
                <div className="playerPanel">
                    <div className="music-poster">
                        <img src={posterSample} alt="Music Poster" />
                        <div className="music-details">
                            <div className="music-name"><span>{musicDetails.musicName}</span></div>
                            <div className="artist-name"><span>{musicDetails.artistName}</span></div>
                        </div>
                    </div>
                </div>
                <div className="player-addition">
                        No lyrics Available
                    </div>
            </div>
        )
    }else{
        playerPanel = (<></>)
    }
    if(appState.player.playNStop){
        
        return(
            <>
                {playerPanel}
                <div className="playerNavBar">
                    <div className="navbar-internal" onClick={handlePlayerSlide}>
                        <div className="music-poster">
                            <img src={posterSample} alt="Music Poster" />
                            <div className="music-details">
                            <div className={isMusicTextOverflowing ? "music-name make-text-dynamic" : "music-name"} ref={musicNameRef}><span className={isMusicTextOverflowing ? "slide-text" : ""}>{musicDetails.musicName}</span></div>
                            <div className={isArtistTextOverflowing ? "artist-name make-text-dynamic" : "artist-name"} ref={artistNameRef}><span className={isArtistTextOverflowing ? "slide-text" : ""}>{musicDetails.artistName}</span></div>
                            </div>
                        </div>

                        <button className="liked-song-button" aria-label="Liked Song">
                            <span className={musicDetails.isFavorite?"material-symbols-outlined liked": "material-symbols-outlined"}>favorite</span>
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

                        <button className="shuffle-button" aria-label="Shuffle">
                            <span className="material-symbols-outlined">shuffle</span>
                        </button>

                        <button className="queue-button" aria-label="Queue">
                            <span className="material-symbols-outlined">queue_music</span>
                        </button>
                    </div>
                </div>
            </>
        )
    }
    
}

export default PlayerOver;