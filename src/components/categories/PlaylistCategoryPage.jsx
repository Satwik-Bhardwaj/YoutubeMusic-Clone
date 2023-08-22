import {useState, useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

import { AppStateContext } from "../../AppStateContext/AppStateContext";

import CategoryList from './CategoryList';

function PlaylistCategoryPage() {
    const { appState, setAppState } = useContext(AppStateContext);
    const token = appState.token;

    const { id: category_id } = useParams();
    
    const [ category, setCategory] = useState(null)
    
    useEffect(()=>{
        if (token) {
            axios.get(`https://api.spotify.com/v1/browse/categories/${category_id}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(response => {
                setCategory(response.data);
            })
            .catch(error => {
              console.error('Fetch error:', error);
            });
        }
    }, [token]);

    if(category === null) return null;

    return (
      <div id="main">
        <div className="sec" id="sec-id">
          <div className="head-o-sec">
            <div className="head-written">
              <h1 className="sec-heading">{category.name}</h1></div>
            {/* <div className="more-at-head">
              <div className="more-chips">
                <div className="more-chip-btn more-finder" id="sec-more-music">
                  <span>Follow</span>
                </div>
              </div>
            </div> */}  
          </div>
            
          <div className="playlist-internal-sec">
            <div className="playlist-items-list"> 
              <CategoryList category_id={category_id}/>
            </div>
          </div>
        </div>
      </div>
    )
}
export default PlaylistCategoryPage;