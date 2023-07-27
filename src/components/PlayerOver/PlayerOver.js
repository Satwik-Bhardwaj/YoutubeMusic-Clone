import React, { useContext } from "react";

import { AppStateContext } from "../../AppStateContext/AppStateContext";

import "./playerOver.css";

function PlayerOver() {
    const { appState } = useContext(AppStateContext);
    if(appState.player.playerSlideOpen){
        return(
            <div className="playerInterface">
                <div className="playerNavBar">
                    <div className="playerControlBtns">
                        <div className="prevBtnSec">
    
                        </div>
                        <div className="playPauseSec">
    
                        </div>
                        <div className="nextBtnSec">
    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default PlayerOver;