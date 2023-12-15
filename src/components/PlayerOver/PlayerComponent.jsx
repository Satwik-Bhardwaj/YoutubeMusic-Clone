import { useState, useEffect, useContext } from "react";
import { AppStateContext } from "../../AppStateContext/AppStateContext";

export const audioPlayerFun=()=> {
    const player = PlayerComponent().audioPlayer;
    return player;
}

export function PlayerComponent() {
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
        
    }, [appState.player.playN])


}