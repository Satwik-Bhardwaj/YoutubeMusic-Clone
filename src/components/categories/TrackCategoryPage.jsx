import {useState, useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

// for mock use only
import { MajorCategories } from '../main-tab/Hometab';

import { AppStateContext } from "../../AppStateContext/AppStateContext";

import TrackCategoryList from './TrackCategoryList';
import AppLayout from '../AppLayout/AppLayout';

// this function is also for mock
function getRequestByMood(mood) {
  const category = MajorCategories.categories.find(
    (category) => category.mood === mood
  );

  return category ? category.request : null;
}


function TrackCategoryPage() {
    const { appState, setAppState } = useContext(AppStateContext);
    const token = appState.token;

    const { id: category_id } = useParams();
    
    const [ category, setCategory] = useState(null)
    

    //mock use effect
    useEffect(()=>{
      const request = getRequestByMood(category_id);
      setCategory(request);
    }, [category_id])

    // useEffect(()=>{
    //     if (token) {
    //         axios.get(`https://api.spotify.com/v1/recommendations?${request}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         })
    //         .then(response => {
    //             setTracks(response.data.tracks);
    //             console.log(response.data.tracks);
    //         })
    //         .catch(error => {
    //             console.error('Fetch error:', error);
    //         });
    //     }
    // },[token])

    if(category === null) return null;

    return (
      <AppLayout>
      <div id="library-main">
        <div className="sec" id="sec-id">
          <div className="head-o-sec">
            <div className="head-written">
              <h1 className="sec-heading">{category_id}</h1></div>
              {/* useless elements removed */}
          </div>
            
          <div className="playlist-internal-sec">
            <div className="playlist-items-list"> 
              <TrackCategoryList category_id={category}/>
            </div>
          </div>
        </div>
      </div>
      </AppLayout>
    )
}
export default TrackCategoryPage;