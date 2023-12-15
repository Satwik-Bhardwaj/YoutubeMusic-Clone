import {useState, useContext, useEffect} from 'react';
import axios from "axios";

import { getCookie } from '../../cookieAndSession/cookiesOperator';
import { AppStateContext } from "../../AppStateContext/AppStateContext";
import config from '../../AppStateContext/config';
import TrackCard from '../Trackcard/TrackCard';

import './playlist.css'

function PlaylistsList({playlist_id}){
    const { appState, setAppState } = useContext(AppStateContext);
    const token = getCookie('youtube-music-clone').token;

    const [ items, setItems ] = useState(null)
    useEffect(()=>{
        if (token) {

          // fetching the tracks in playlist
          // axios.get(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
          //   headers: {
          //     Authorization: `Bearer ${token}`
          //   }
          // })

          axios.get(`${config.apiDomain}v1/playlists/${playlist_id}/tracks`, {
            headers: {
              
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
            linkTo={`/w?=${item?.id}`}
            trackName={item?.name}
            tracktArtists={item?.artists}
            posterImg={`${item?.album?.images[0]?.url}`}
            track_id={`${item?.id}`}
          />
            
        ))
    )
}
export default PlaylistsList;