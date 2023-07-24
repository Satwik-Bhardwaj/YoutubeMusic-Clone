import React from "react";
import "./lCard.css";
import "./mCard.css";
import "./optionList.css";
import shelfItems from "../../selfItemfetcher";

function YtPlayShelf({shelftype}){

    const shelfType = shelftype;

    let shelfItem = shelfItems(shelfType.heading)

    var shelfHead = (<></>);
    if(shelfType.stype === "more-head"){
      shelfHead = (
        <>
          <h1 className="sec-heading">{shelfType.heading}</h1>
          <p className="sec-disp">{shelfType.description}</p> 
        </>
      )
    }else{
      shelfHead = (
        <>
          <h1 className="sec-heading">{shelfType.heading}</h1>
        </>
      )
    }

    var putItems = (<></>);
    if(shelfType.itemArr === "n-icons"){
      putItems = (
          
        <div className="cards-list">
          {
            shelfItem.map((value)=>(
              <div className="m-card" id="m-card">
                <div className="m-card-insides">
                  <div className="card-poster">
                    <div className="play-pause-button">
                      <span className="material-symbols-outlined">
                        play_arrow
                      </span>
                    </div>
                    <div className="poster-hover">
                      <div className="more-option-button">
                        <span className="material-symbols-outlined">
                          more_vert
                        </span>
                      </div>
                      
                    </div>
                    <img src={value.MusicPoster} alt="poster"/>
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">{value.MusicName}</a>
                    <a className="card-album">{value.AlbumName} •</a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      )
    }else if(shelfType.itemArr === "tiles"){
      putItems = (
        <div className="longcards-list">
          {
          shelfItem.map((value)=>(
          <div className="l-card" id="l-card">
            <div className="l-card-insides">
              <div className="card-poster">
                <div class="poster-hover">
                  <div class="play-pause-button">
                    <span class="material-symbols-outlined">
                      play_arrow
                    </span>
                  </div>
                </div>
                <img src={value.MusicPoster} />
              </div>
              <div className="card-abouts">
                <a className="card-title">{value.MusicName}</a>
                <a className="card-album">{value.AlbumName}</a>
              </div>
              <div className="additional-btns">
                <div className="functionality-btn">
                  <div className="button-to-like">
                    <span className="material-symbols-outlined">
                      favorite
                    </span>
                  </div>
                </div>
                <div className="functionality-btn">
                  <div className="more-option-button" id="more-option-oncard">
                    <span className="material-symbols-outlined">
                      more_vert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))
          }
        </div>
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
          {putItems}
      </div>
    )
}

export default YtPlayShelf;