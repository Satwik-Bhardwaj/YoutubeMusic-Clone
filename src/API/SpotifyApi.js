import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';


export const Token = null;

export default function RequestToken()  {
    const navigate = useNavigate();
    const location = useLocation();

    const [ requestComplete, setRequestComplete ] = useState(false);
    
    if(!requestComplete && !Token){
    var client_id = 'aad40955c3df4cd1a82a27626997a0ae'; // Your client id

    // your application requests authorization
    const redirect_uri = 'http://localhost:3000/welcome/';

    const state = generateRandomString(16);
    const scope = 'user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state user-read-currently-playing';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    console.log(url);
    setRequestComplete(true);
    setTimeout(() => {
        console.log(requestComplete);
        window.location.href = url;
    }, 3000);
}

        if(!Token){
            const queries = new URLSearchParams(location.hash.substring(1));
            const tkn = queries.get('access_token')
            console.log(tkn)
            Token = tkn;
            // navigate('/')
        }
   
}


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    return randomString;
} 