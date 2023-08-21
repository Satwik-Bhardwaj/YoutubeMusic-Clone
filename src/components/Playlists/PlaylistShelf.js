import React from "react";
import PlaylistCategorySection from './../categories/PlaylistCategorySection';

function PlaylistShelf({shelfdata}){

    return (
        <div className="sec">
          <div className="head-o-sec">
            <div className="head-written">
                <h1 className="sec-heading">{shelfdata.name}</h1>
            </div>
            <div className="more-at-head">
              <div className="more-chips">
                <div className="more-chip-btn more-finder" id="sec-more-music">
                  <span>More</span>
                </div>
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
          <PlaylistCategorySection category_id={shelfdata.id}/>
      </div>
    )
}

export default PlaylistShelf;