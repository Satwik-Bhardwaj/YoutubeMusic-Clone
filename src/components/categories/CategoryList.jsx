import {useState, useContext, useEffect} from 'react';
import axios from "axios";

import { AppStateContext } from "../../AppStateContext/AppStateContext";
import PlaylistCard from '../PlaylistCard/PlaylistCard';


function PlaylistsList({category_id}){
    const { appState, setAppState } = useContext(AppStateContext);
    const token = appState.token;

    const [ playlists, setPlayLists ] = useState(null)
    useEffect(()=>{
        if (token) {
            axios.get(`https://api.spotify.com/v1/browse/categories/${category_id}/playlists`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(response => {
                const playlists = response.data.playlists.items;
                setPlayLists(response.data.playlists.items);
            })
            .catch(error => {
              console.error('Fetch error:', error);
            });
        }
    }, [token]);

    if (playlists == null) return null;

    return (
        playlists.map(playlist => (
            <PlaylistCard 
            linkTo={`/playlist/${playlist?.id}`}
            playlistName={`${playlist?.name}`}
            playlistDesp={`${playlist?.type}`}
            posterImg={`${playlist?.images[0]?.url}`}
        />
            
        ))
    )
}
export default PlaylistsList;