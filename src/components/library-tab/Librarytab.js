import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';

import PlaylistShelf from "../Playlists/PlaylistShelf";
import { AppStateContext } from "../../AppStateContext/AppStateContext";

import './library.css'

function Librarytab() {
  const { appState, setAppState } = useContext(AppStateContext);
  const token = appState.token;

  const [data, setData] = useState(null);
  useEffect(()=>{
    if (token) {
      console.log("called")
      axios.get('https://api.spotify.com/v1/browse/categories', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setData(response);
        
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
    }
  },[token])
  console.log('Fetched data:', data);

  if(data === null) return data;
  
  
  return (
    <>
    <div id="library-main">
        
        {data.data.categories.items.map((data)=>(
        <PlaylistShelf shelfdata={data}/>
      ))}

    </div>
    </>
  );
}

export default Librarytab;