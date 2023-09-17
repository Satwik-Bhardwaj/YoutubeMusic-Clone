import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { getCookie } from "../../cookieAndSession/cookiesOperator";
import { AppStateContext } from "../../AppStateContext/AppStateContext";
import PlaylistCard from "../PlaylistCard/PlaylistCard";

function PlaylistCategorySection({category_id}){
    const { appState, setAppState } = useContext(AppStateContext);
    const token = getCookie('youtube-music-clone').token;
    
    const [playlists, setPlayLists] = useState(null);

    useEffect(()=>{
        if (token) {
            axios.get(`https://api.spotify.com/v1/browse/categories/${category_id}/playlists`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            // axios.get(`http://localhost:9090/v1/browse/categories/${category_id}/playlists`, {
            //     headers: {
                
            //     }
            // })
            .then(response => {
                const playlists = response.data.playlists.items;
                setPlayLists(response.data.playlists.items);
            })
            .catch(error => {
              console.error('Fetch error:', error);
            });
        }
    }, [token]);

    if(playlists === null) return null;

    const limitedMappedData = playlists.slice(0, Math.min(10, playlists.length)).map(playlist => (
        <PlaylistCard 
            linkTo={`/playlist/${playlist?.id}`}
            playlistName={`${playlist?.name}`}
            playlistDesp={`${playlist?.type}`}
            posterImg={`${playlist?.images[0]?.url}`}
        />

        
    ));
    return (
        <div className="cards-list">
            {limitedMappedData}
        </div>
    )

}

export default PlaylistCategorySection;