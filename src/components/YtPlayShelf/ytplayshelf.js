import React from "react";
import "./lCard.css";
import "./mCard.css";
import "./wCard.css";
import "./optionList.css";
import Poster from "./posterForCard.jpg";
import HeadLogo from "./sec-head-img.png";

function YtPlayShelf({type}){

    const shelfTypes = [
      {stype: "more-head", heading: "Recently Played", description: "Listen Again", secLogo: HeadLogo},
      {stype: "more-head", heading: "Javed Ali", description: "Similar to", secLogo: HeadLogo},
      {stype: "only-head", heading: "More for you", description: "", secLogo: null},
      
    ];

    return (
      <>
      {shelfTypes.map((value)=>(
        <div className="sec" id="sec-id">
          <div className="head-o-sec">
            <div className="head-written">
              {
                value.stype === "more-head" ?
                <>
                  <div className="head-img">
                    <img src={value.secLogo} alt="Shelf-Logo"/>
                  </div>
                  <h1 className="sec-heading">{value.heading}</h1>
                  <p className="sec-disp">{value.description}</p> 
                </>:
                <>
                  <h1 className="sec-heading">{value.heading}</h1>
                </>
              }
              
            </div>
            <div className="more-at-head">
              <div className="more-chips">
                <div className="more-chip-btn navigator-chips" id="sec-mov-lft">
                  <span className="material-symbols-outlined">
                    navigate_before
                  </span>
                </div>
                <div className="more-chip-btn more-finder" id="sec-more-music">
                  <label>More</label>
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
          <div className="cards-list">
            <div className="m-card" id="m-card">
              <div className="m-card-insides">
                <div className="card-poster">
                  <div className="poster-hover">
                    <div className="more-option-button">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                    <div className="play-pause-button">
                      <span className="material-symbols-outlined">
                        play_circle
                      </span>
                    </div>  
                  </div>
                  <img src="src/posterForCard.jpg" />
                </div>
                <div className="card-abouts">
                  <a className="card-title">Song Name</a>
                  <a className="card-album">Album</a>
                </div>
              </div>
            </div><div className="m-card" id="m-card">
              <div className="m-card-insides">
                <div className="card-poster">
                  <div className="poster-hover">
                    <div className="more-option-button">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                    <div className="play-pause-button">
                      <span className="material-symbols-outlined">
                        play_circle
                      </span>
                    </div>  
                  </div>
                  <img src={Poster} />
                </div>
                <div className="card-abouts">
                  <a className="card-title">Song Name</a>
                  <a className="card-album">Album</a>
                </div>
              </div>
            </div><div className="m-card" id="m-card">
              <div className="m-card-insides">
                <div className="card-poster">
                  <div className="poster-hover">
                    <div className="more-option-button">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                    <div className="play-pause-button">
                      <span className="material-symbols-outlined">
                        play_circle
                      </span>
                    </div>  
                  </div>
                  <img src="src/posterForCard.jpg" />
                </div>
                <div className="card-abouts">
                  <a className="card-title">Song Name</a>
                  <a className="card-album">Album</a>
                </div>
              </div>
            </div><div className="m-card" id="m-card">
              <div className="m-card-insides">
                <div className="card-poster">
                  <div className="poster-hover">
                    <div className="more-option-button">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                    <div className="play-pause-button">
                      <span className="material-symbols-outlined">
                        play_circle
                      </span>
                    </div>  
                  </div>
                  <img src="src/posterForCard.jpg" />
                </div>
                <div className="card-abouts">
                  <a className="card-title">Song Name</a>
                  <a className="card-album">Album</a>
                </div>
              </div>
            </div><div className="m-card" id="m-card">
              <div className="m-card-insides">
                <div className="card-poster">
                  <div className="poster-hover">
                    <div className="more-option-button">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                    <div className="play-pause-button">
                      <span className="material-symbols-outlined">
                        play_circle
                      </span>
                    </div>  
                  </div>
                  <img src="src/posterForCard.jpg" />
                </div>
                <div className="card-abouts">
                  <a className="card-title">Song Name</a>
                  <a className="card-album">Album</a>
                </div>
              </div>
            </div>
            <div className="m-card" id="m-card">
              <div className="m-card-insides">
                <div className="card-poster">
                  <div className="poster-hover">
                    <div className="more-option-button">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                    <div className="play-pause-button">
                      <span className="material-symbols-outlined">
                        play_circle
                      </span>
                    </div>
                  </div>
                  <img src="src/posterForCard.jpg" />
                </div>
                <div className="card-abouts">
                  <a className="card-title">Song Name</a>
                  <a className="card-album">Album</a>
                </div>
              </div>
            </div>
            <div className="w-card" id="w-card">
              <div className="w-card-insides">
                <div className="card-poster">
                  <div className="poster-hover">
                    <div className="more-option-button">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                    <div className="play-pause-button">
                      <span className="material-symbols-outlined">
                        play_circle
                      </span>
                    </div>
                  </div>
                  <img src="src/posterForCard.jpg" />
                </div>
                <div className="card-abouts">
                  <a className="card-title">Song Name</a>
                  <a className="card-album">Album</a>
                </div>
              </div>
            </div>
          </div>
      </div>
      ))}
      </>
      
    )
}

export default YtPlayShelf;