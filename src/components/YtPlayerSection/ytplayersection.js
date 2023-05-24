import React from "react";
import "./lCard.css";
import "./mCard.css";
import "./sec-one.css";
import "./wCard.css";
import "./optionList.css";
import Poster from "./posterForCard.jpg";
import HeadLogo from "./sec-head-img.png";

function YtPlayerSection({type}){
    let sectionContent;
    switch (type) {
        case "Recently Played":
            sectionContent=(
                <div className="sec" id="sec-id">
            <div className="head-o-sec">
              <div className="head-written">
                <div className="head-img">
                  <img src={HeadLogo} />
                </div>
                <h1 className="sec-heading">HEADING</h1>
                <p className="sec-disp">Description</p> 
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
            )
            break;
    
        default:
            break;
    }
    return sectionContent;
}

export default YtPlayerSection;