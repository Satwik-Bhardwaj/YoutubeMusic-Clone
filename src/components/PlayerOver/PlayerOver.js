import React, { useContext, useEffect, useRef, useState } from "react";

import { AppStateContext } from "../../AppStateContext/AppStateContext";

import "./playerOver.css";
import "./playerNavDesign.css";

import posterSample from "./../../temp/p3.jpg";

function RequestNewSong(param){

}
function PlayerNavigation(){
    const {appState, setAppState} = useContext(AppStateContext);

    const [isMusicTextOverflowing, setIsMusicTextOverflowing] = useState(false);
    const [isArtistTextOverflowing, setIsArtistTextOverflowing] = useState(false);

    const musicNameRef = useRef(null);
    const artistNameRef = useRef(null);

    const musicDetails = appState.player;

    const handlePlayerSlide = (event) => {

        if (event.target.closest('BUTTON') || event.target.closest('.music-progress')) return;
            const playerSlideState = appState.player.playerSlideOpen;


            if(playerSlideState){
                setAppState({...appState, player: {...appState.player, slideCloseClicking: true}});
                setTimeout(() => {
                    setAppState({...appState, player: {...appState.player, playerSlideOpen: !playerSlideState}})
                }, 200);
            }else{
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

function MusicPanel() {
    const { appState, setAppState } = useContext(AppStateContext);
    const musicDetails = appState.player;

    return (
        <>
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
        </>
    )
}
function PlayerInterface() {
    const { appState, setAppState } = useContext(AppStateContext);
    const slideCloseClicking = appState.player.slideCloseClicking;

    var tab = (<></>);
    switch(appState.player.panelTab){
        case 'queue':
            tab = (<QueueC/>);
            break;
        default :
            tab = (<MusicPanel/>);
    }

    return (
        <div className="playerInterface" style={{animation: slideCloseClicking ? "slide-out 0.4s linear" : "slide-in 0.2s linear"}}>
            {tab}
        </div>
    )
}
function PlayerOver() {
    const { appState, setAppState } = useContext(AppStateContext);
    
    if(appState.player.playNStop){    
        return(
            <>
                {appState.player.playerSlideOpen?<PlayerInterface/>:<></>}
                <PlayerNavigation/>
            </>
        )
    }
    
}


function QueueC(){
    const { appState, setAppState } = useContext(AppStateContext);

    return (
        <div class="queue-list">
            <div class="queue-header">
                <span>Queue</span>
            </div>
            <div class="currently-playing">
                <div class="song-info">
                <img src="https://example.com/posters/current-song.jpg" alt="Poster" />
                <div class="details">
                    <div class="useful-details">
                    <p class="music-name">Song 1</p>
                    <p class="artist-name">Artist 1</p>
                    <p class="album-name">Album 1</p>
                    <p class="duration">3:45</p>
                    </div>
                </div>
                </div>
            </div>

            <div class="upcoming-songs">
                <div class="song-info">
                <img src="https://example.com/posters/song-2.jpg" alt="Poster" />
                <div class="details">
                    <p class="music-name">Song 2</p>
                    <p class="artist-name">Artist 2</p>
                    <p class="album-name">Album 2</p>
                    <p class="duration">4:10</p>
                </div>
                </div>
                <div class="song-info">
                <img src="https://example.com/posters/song-3.jpg" alt="Poster" />
                <div class="details">
                    <p class="music-name">Song 3</p>
                    <p class="artist-name">Artist 3</p>
                    <p class="album-name">Album 3</p>
                    <p class="duration">3:30</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerOver;