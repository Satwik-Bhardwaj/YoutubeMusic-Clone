import React, { useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation} from "react-router-dom";

import { AppStateContext } from "../../AppStateContext/AppStateContext";

import "./playerOver.css";
import "./playerNavDesign.css";

import posterSample from "./../../temp/p3.jpg";


function PlayerNavigation(){
    const {appState, setAppState} = useContext(AppStateContext);

    const [audioPlayer, setAudioPlayer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    

    useEffect(()=>{
        const player = new Audio("https://learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3");


        player.addEventListener("timeupdate", () => {
        setCurrentTime(player.currentTime);
        });

        player.addEventListener("ended", () => {
            setIsPlaying(false);
          });
      
        setAudioPlayer(player);
        
    }, [])

    // to initialize the playing
    useEffect(()=>{
        if(appState.player.onPlay && audioPlayer){
            audioPlayer.play();
            setAppState({...appState, player: {...appState.player, onPlay: false}});
        }
    },[audioPlayer])

    const formatTime=(milliseconds)=>{
        if (milliseconds <= 0) {
            return "0:00";
          }
        
          // Calculate hours, minutes, and seconds
          const hours = Math.floor(milliseconds / 3600000);
          const minutes = Math.floor((milliseconds % 3600000) / 60000);
          const seconds = Math.floor((milliseconds % 60000) / 1000);
        
          // Format the time
          let formattedTime = "";
        
          if (hours > 0) {
            formattedTime += `${hours}:`;
          }
        
          formattedTime += `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
          
          return formattedTime;
    }


    const [isMusicTextOverflowing, setIsMusicTextOverflowing] = useState(false);
    const [isArtistTextOverflowing, setIsArtistTextOverflowing] = useState(false);

    const musicNameRef = useRef(null);
    const artistNameRef = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    const musicDetails = appState.player;

    const handlePlayerSlide = (event) => {
        if (event.target.closest('BUTTON') || event.target.closest('.music-progress')) return;

        if(location.pathname !== '/w'){
            navigate('/w?ddd');
        }else{
            navigate(-1);
        }
    }

    const togglePlay = () => {
        if (audioPlayer) {
          if (audioPlayer.paused) {
            audioPlayer.play();
            setIsPlaying(true);
          } else {
            audioPlayer.pause();
            setIsPlaying(false);
          }
        }
      };

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
        if(appState.player.playNStop === false) return;

        setIsMusicTextOverflowing(musicNameRef.current.firstChild.scrollWidth > musicNameRef.current.offsetWidth);
        setIsArtistTextOverflowing(artistNameRef.current.firstChild.scrollWidth > artistNameRef.current.offsetWidth);
    }, []);

    const currentTimeOutput = formatTime(currentTime*1000);

    if(appState.player.playNStop === false){ return (<></>)}

    return (
        <div className="playerNavBar">
            <div className="navbar-internal" onClick={handlePlayerSlide}>
                <div className="music-poster">
                    <img src={musicDetails.musicPoster} alt="Music Poster" />
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

                    <button className="play-pause-button" aria-label="Play/Pause" onClick={togglePlay}>
                    <span className="material-symbols-outlined">{appState.player.onPlay? "pause" : "play_arrow"}</span>
                    </button>

                    <button className="next-button" aria-label="Next" onClick={skipNextHandle}>
                    <span className="material-symbols-outlined">skip_next</span>
                    </button>
                </div>

                <div className="music-progress">
                    <div className="current-time">{currentTimeOutput}</div>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: `${(currentTime*1000/musicDetails.musicDuration)*100}%`}}>
                            <div className="dot" id="dot"></div>
                        </div>
                    </div>
                    <div className="duration">{formatTime(musicDetails.musicDuration)}</div>
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