import React, { useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { AppStateContext } from "../../AppStateContext/AppStateContext";

import "./playerOver.css";
import "./playerNavDesign.css";

import posterSample from "./../../temp/p3.jpg";
import AppLayout from "../AppLayout/AppLayout";


function MusicPanel() {

    const { appState, setAppState } = useContext(AppStateContext);
    const musicDetails = appState.player;

    return (
        <>
        <div className="playerPanel">
            <div className="music-poster">
                <img src={musicDetails.musicPoster} alt="Music Poster" />
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
    const location = useLocation();

    const [elementStyle, setElementStyle] = useState({});

    useEffect(() => {
        // Check if the pathname matches the condition where you want to apply the style
        if (location.pathname === '/w') {
            // Update the style when the pathname matches
            setElementStyle({
            animation: "slide-in 0.2s linear",
            visibility: "visible"
            });
        } else {
            setElementStyle({
            animation: "slide-out 0.4s linear",
            });
            setTimeout(() => {
            setElementStyle({
                visibility: "hidden",
                });
            }, 400);
        }
      }, [location.pathname === '/w']);
      
    return (
        <div className="playerInterface" style={elementStyle}>
            {tab}
        </div>
    )
}
function PlayerOver(props) {

    const { appState, setAppState } = useContext(AppStateContext);
    if(appState.player.playNStop){    
        return(
            <AppLayout>
            <PlayerInterface/>
            </AppLayout>
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
                    <p class="music-name">Song 1    </p>
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