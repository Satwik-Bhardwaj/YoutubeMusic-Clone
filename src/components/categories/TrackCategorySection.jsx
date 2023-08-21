import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { AppStateContext } from "../../AppStateContext/AppStateContext";
import TrackCard from "../Trackcard/TrackCard";

function TrackCategorySection({request}){
    const { appState, setAppState } = useContext(AppStateContext);
    const token = appState.token;
    
    const [tracks, setTracks] = useState(null);
    useEffect(()=>{
        if (token) {
            axios.get(`https://api.spotify.com/v1/recommendations?${request}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                setTracks(response.data.tracks);
                console.log(response.data.tracks);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        }
    },[token])

    if(tracks === null) return null;

    const limitedMappedData = tracks.slice(0, Math.min(10, tracks.length)).map(item => (
        
        <TrackCard 
            linkTo={`/w?=${item?.id}`} 
            trackName={item?.name}
            tracktArtists={item?.artists}
            posterImg={`${item?.album?.images[0]?.url}`}
        />

    ));
    return (
        <div className="cards-list">
            {limitedMappedData}
        </div>
    )

}

export default TrackCategorySection;