import {useState, useContext, useEffect} from 'react';
import axios from "axios";

import { getCookie } from '../../cookieAndSession/cookiesOperator';
import { AppStateContext } from "../../AppStateContext/AppStateContext";
import TrackCard from '../Trackcard/TrackCard';


function TrackCategoryList({category_id}){
    const { appState, setAppState } = useContext(AppStateContext);
    const token = getCookie('youtube-music-clone').token;

    const [ tracks, setTracks ] = useState(null)
    useEffect(()=>{
        if (token) {
            axios.get(`https://api.spotify.com/v1/recommendations?${category_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                
                setTracks(response.data.tracks);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        }
    },[token])
    console.log(token);
    if (tracks == null) return null;

    return (
        tracks.map(item => (
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
export default TrackCategoryList;