import {useState, useContext, useEffect} from 'react';
import axios from "axios";

import { AppStateContext } from "../../AppStateContext/AppStateContext";
import TrackCard from '../Trackcard/TrackCard';

import './playlist.css'

function PlaylistsList({playlist_id}){
    const { appState, setAppState } = useContext(AppStateContext);
    const token = appState.token;

    const [ items, setItems ] = useState(null)
    useEffect(()=>{
        if (token) {

          // fetching the tracks in playlist
          axios.get(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(response => {
              console.log(response)
              setItems(response.data.items)
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });
        }
    }, [token]);

    if (items == null) return null;

    return (
        items.map(item => (
            <TrackCard 
                linkTo={`/w?=${item?.track?.id}`} 
                trackName={item?.track?.name}
                tracktArtists={item?.track?.artists}
                posterImg={`${item?.track?.album?.images[0]?.url}`}
            />
            
        ))
    )
}
export default PlaylistsList;