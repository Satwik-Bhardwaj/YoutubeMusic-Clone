import {useState, useContext, useEffect} from 'react';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

import { getCookie } from '../../cookieAndSession/cookiesOperator';
import { AppStateContext } from "../../AppStateContext/AppStateContext";
import config from '../../AppStateContext/config';
import './playlist.css'
import PlaylistsList from './PlaylistsList';
import AppLayout from '../AppLayout/AppLayout';

function Playlist() {
    const { appState, setAppState } = useContext(AppStateContext);
    const token = getCookie('youtube-music-clone').token;

    const { id: playlist_id } = useParams();

    
    const [ playlist, setPlayLists] = useState(null)
    
    useEffect(()=>{
        if (token) {

          //fetching the details of playlist
          // axios.get(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
          //   headers: {
          //     Authorization: `Bearer ${token}`
          //   }
          // })
          axios.get(`${config.apiDomain}v1/playlists/${playlist_id}`, {
            
          })
          .then(response => {
              console.log(response.data);
              setPlayLists(response.data)
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });

        }
    }, [token]);

    if(playlist === null) return null;

    function formatNumber(number) {
      const abbreviations = {
        T: 1000000000000,
        B: 1000000000,
        M: 1000000,
        K: 1000,
      };
    
      for (const symbol in abbreviations) {
        if (number >= abbreviations[symbol]) {
          return (number / abbreviations[symbol]).toFixed(1) + symbol;
        }
      }
    
      return number.toString();
    }

    return (
      <AppLayout>
      <div id="library-main">
        <div className="sec" id="sec-id">
          <div className="head-o-sec">
            <div className="head-written">
              <h1 className="sec-heading">{playlist.name}</h1>
              <p className="sec-disp">{playlist.description}</p>
              <p className="sec-more">Followers: {formatNumber(200000000 /*playlist.followers.total*/)} • Owner: {playlist.owner.display_name}</p>
            </div>
            <div className="more-at-head">
              <div className="more-chips">
                <div className="more-chip-btn more-finder" id="sec-more-music">
                  <span>Follow</span>
                </div>
              </div>
            </div>
          </div>
            
          <div className="playlist-internal-sec">
            <div className="playlist-items-list"> 
              <PlaylistsList playlist_id={playlist_id}/>
            </div>
          </div>
        </div>
      </div>
      </AppLayout>
    )
}
export default Playlist;