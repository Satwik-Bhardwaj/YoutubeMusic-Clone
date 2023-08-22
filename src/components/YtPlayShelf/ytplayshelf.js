import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { AppStateContext } from "../../AppStateContext/AppStateContext";

import "./lCard.css";
import "./mCard.css";
import "./optionList.css";
import shelfItems from "../../selfItemfetcher";
import TrackCategorySection from './../categories/TrackCategorySection';

function YtPlayShelf({shelfdata}){
    const { appState, setAppState } = useContext(AppStateContext);
    const token = appState.token;

    console.log(`https://api.spotify.com/v1/recommendations?${shelfdata.request}`);

    var shelfHead = (<></>);
    if(shelfdata.stype === "more-head"){
      shelfHead = (
        <>
          <h1 className="sec-heading">{shelfdata.mood}</h1>
          <p className="sec-disp">{shelfdata.description}</p> 
        </>
      )
    }else{
      shelfHead = (
        <>
          <h1 className="sec-heading">{shelfdata.mood}</h1>
        </>
      )
    }

    var putItems = (<></>);
    if(shelfdata.itemArr === "tiles"){
      putItems = (
        <div className="longcards-list">
          {
          // shelfItem.map((value)=>(
          // <div className="l-card" id="l-card">
          //   <div className="l-card-insides">
          //     <div className="card-poster">
          //       <div class="poster-hover">
          //         <div class="play-pause-button">
          //           <span class="material-symbols-outlined">
          //             play_arrow
          //           </span>
          //         </div>
          //       </div>
          //       <img src={value.MusicPoster} />
          //     </div>
          //     <div className="card-abouts">
          //       <a className="card-title">{value.MusicName}</a>
          //       <a className="card-album">{value.AlbumName}</a>
          //     </div>
          //     <div className="additional-btns">
          //       <div className="functionality-btn">
          //         <div className="button-to-like">
          //           <span className="material-symbols-outlined">
          //             favorite
          //           </span>
          //         </div>
          //       </div>
          //       <div className="functionality-btn">
          //         <div className="more-option-button" id="more-option-oncard">
          //           <span className="material-symbols-outlined">
          //             more_vert
          //           </span>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          // ))
          }
        </div>
      )
      
    }else{
      putItems = (
          <TrackCategorySection request={shelfdata.request}/>
      )
    }

    return (
        <div className="sec" id="sec-id">
          <div className="head-o-sec">
            <div className="head-written">
              {shelfHead}
            </div>
            <div className="more-at-head">
              <div className="more-chips">
                <a className="more-chip-btn more-finder" id="sec-more-music" href={`/category/tracks/${shelfdata.mood}`}>
                  <span>More</span>
                </a>
                <div className="more-chip-btn navigator-chips" id="sec-mov-lft">
                  <span className="material-symbols-outlined">
                    navigate_before
                  </span>
                </div>
                <div className="more-chip-btn navigator-chips" id="sec-mov-rght">
                  <span className="material-symbols-outlined">
                    navigate_next
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* cards implementation */}
          {putItems}
      </div>
    )
}

export default YtPlayShelf;