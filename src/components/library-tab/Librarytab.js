import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';

import PlaylistShelf from "../Playlists/PlaylistShelf";
import { AppStateContext } from "../../AppStateContext/AppStateContext";
import { getCookie } from "../../cookieAndSession/cookiesOperator";
import config from "../../AppStateContext/config";

import './library.css'
import AppLayout from "../AppLayout/AppLayout";

function Librarytab() {
  const { appState, setAppState } = useContext(AppStateContext);
  const token = getCookie('youtube-music-clone').token;

  const [data, setData] = useState(null);
  useEffect(()=>{
    if (token) {
      console.log(config.apiDomain)
      // axios.get('https://api.spotify.com/v1/browse/categories', {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // })
      axios.get(`${config.apiDomain}v1/browse/categories`, {
        headers: {
          
        }
      })
      .then(response => {
        console.log('Fetched data:', response);
        setData(response);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
    }
  },[token])
  
  console.log(token);

  if(data === null) return(<AppLayout/>);
  
  
  return (
    <AppLayout>
    <div id="library-main">
        
        {data.data.categories.items.map((data)=>(
        <PlaylistShelf shelfdata={data}/>
      ))}

    </div>
    </AppLayout>
  );
}

export default Librarytab;