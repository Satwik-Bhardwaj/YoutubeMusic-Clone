import { useState,useEffect, useContext } from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppStateContext } from "../../AppStateContext/AppStateContext";
import { getCookie } from "../../cookieAndSession/cookiesOperator";

function Welcome() {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    


    const navigate = useNavigate();
    useEffect(()=>{
        console.log(location.pathname)
        if(location.pathname === '/'){
            var client_id = 'aad40955c3df4cd1a82a27626997a0ae'; // Your client id

            // your application requests authorization
            const redirect_uri = 'http://localhost:3000/verify/';

            const state = generateRandomString(16);
            const scope = 'user-read-private user-read-email streaming user-read-playback-state user-modify-playback-state user-read-currently-playing';

            var url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(client_id);
            url += '&scope=' + encodeURIComponent(scope);
            url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            url += '&state=' + encodeURIComponent(state);

            window.location.href = url;
        }
    }, [])
}
export function Verify(){
    const location = useLocation();
    const queries = new URLSearchParams(location.hash.substring(1));
    const token = queries.get('access_token')
    const { appState, setAppState } = useContext(AppStateContext);
    const navigate = useNavigate();

    const [change, setChange] = useState(0);

    useEffect(() => {
        if (token) {
            
            const data = { token: token };
            const expirationTime = new Date();
            expirationTime.setTime(expirationTime.getTime() + 3600 * 1000); // 1 hour from now

            // Format the data as a cookie string
            const cookieString = `youtube-music-clone=${encodeURIComponent(JSON.stringify(data))}; expires=${expirationTime.toUTCString()}; path=/`;

            // Set the cookie
            document.cookie = cookieString;
            
            }
    }, [token]);

    useEffect(()=>{
        if(getCookie('youtube-music-clone')){
            navigate('/Home');
        }
    }, [change, appState.token])



    
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
export default Welcome;