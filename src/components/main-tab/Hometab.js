import React from "react";
import MoodChips from "./MoodChips/moodchips";
import YtPlayerSection from "../YtPlayerSection/ytplayersection";

import "./hometab.css";
import "./navAndSearch.css";

function Hometab() {
      return (
  
        <div id="main">
          <MoodChips/>
          <YtPlayerSection type="Recently Played"/>
          
          <div className="sec" id="sec-id">
            <div className="head-o-sec">
              <div className="head-written">
                <div className="head-img">
                  <img src="src/sec-head-img.png" />
                </div>
                <h1 className="sec-heading">HEADING</h1>
                <p className="sec-disp">Discription</p> 
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
                      <div className="more-option-button" id="more-option-oncard">
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
                    <p className="card-album">Album</p>
                  </div>
                </div>
              </div>
              <div className="m-card" id="m-card">
                <div className="m-card-insides">
                  <div className="card-poster">
                    <div className="poster-hover">
                      <div className="more-option-button" id="more-option-oncard">
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
                    <p className="card-album">Album</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* quick picks */}
          <div className="l-sec" id="sec-id">
            <div className="head-o-sec">
              <div className="head-written">
                <div className="head-img">
                  <img src="src/sec-head-img.png" />
                </div>
                <h1 className="sec-heading">Quick Picks</h1>
                <p className="sec-disp">START RADIO FROM A SONG</p> 
              </div>
              <div className="more-at-head">
                <div className="more-chips">
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
            <div className="longcards-list">
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    {/* <div class="poster-hover">
                                      <div class="play-pause-button">
                                          <span class="material-symbols-outlined">
                                              play_circle
                                              </span>
                                      </div>
                                  </div> */}
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkffvfgdsfsdfsf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    {/* <div class="poster-hover">
                                      <div class="play-pause-button">
                                          <span class="material-symbols-outlined">
                                              play_circle
                                              </span>
                                      </div>
                                  </div> */}
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkffvfgdsfsdfsf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    {/* <div class="poster-hover">
                                      <div class="play-pause-button">
                                          <span class="material-symbols-outlined">
                                              play_circle
                                              </span>
                                      </div>
                                  </div> */}
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkffvfgdsfsdfsf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    {/* <div class="poster-hover">
                                      <div class="play-pause-button">
                                          <span class="material-symbols-outlined">
                                              play_circle
                                              </span>
                                      </div>
                                  </div> */}
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkffvfgdsfsdfsf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    {/* <div class="poster-hover">
                                      <div class="play-pause-button">
                                          <span class="material-symbols-outlined">
                                              play_circle
                                              </span>
                                      </div>
                                  </div> */}
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkffvfgdsfsdfsf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>  
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    <div className="poster-hover">
                      <div className="play-pause-button">
                        <span className="material-symbols-outlined">
                          play_circle
                        </span>
                      </div>
                    </div>
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    <div className="poster-hover">
                      <div className="play-pause-button">
                        <span className="material-symbols-outlined">
                          play_circle
                        </span>
                      </div>
                    </div>
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    <div className="poster-hover">
                      <div className="play-pause-button">
                        <span className="material-symbols-outlined">
                          play_circle
                        </span>
                      </div>
                    </div>
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    <div className="poster-hover">
                      <div className="play-pause-button">
                        <span className="material-symbols-outlined">
                          play_circle
                        </span>
                      </div>
                    </div>
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    <div className="poster-hover">
                      <div className="play-pause-button">
                        <span className="material-symbols-outlined">
                          play_circle
                        </span>
                      </div>
                    </div>
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    <div className="poster-hover">
                      <div className="play-pause-button">
                        <span className="material-symbols-outlined">
                          play_circle
                        </span>
                      </div>
                    </div>
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-card" id="l-card">
                <div className="l-card-insides">
                  <div className="card-poster">
                    <div className="poster-hover">
                      <div className="play-pause-button">
                        <span className="material-symbols-outlined">
                          play_circle
                        </span>
                      </div>
                    </div>
                    <img src="src/posterForCard.jpg" />
                  </div>
                  <div className="card-abouts">
                    <a className="card-title">Song Name fdkfjdkfjdsklfjdfkjsdflkdjflkdsjfkldsjfkf</a>
                    <p className="card-album">Album</p>
                  </div>
                  <div className="additional-btns">
                    <div className="button-to-like">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                    </div>
                    <div className="more-option-button" id="more-option-oncard">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Hometab;