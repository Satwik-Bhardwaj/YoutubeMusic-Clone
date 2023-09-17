import React from "react";
import './exploretab.css';

import p1 from './../../temp/p1.jpg'
import AppLayout from "../AppLayout/AppLayout";

function Exploretab(){
    return(
        <AppLayout>
            <div className="explore">
                <div className="sec">
                    <div className="grid-general-grid-items">
                        <div className="explore-navigate-button">
                            <div className="icon">
                            <span class="material-symbols-outlined">new_releases</span>
                            </div>
                            <div className="label">
                                <span>New Releases</span>
                            </div>
                        </div>
                        <div className="explore-navigate-button">
                            <div className="icon">
                                <span class="material-symbols-outlined">show_chart</span>
                            </div>
                            <div className="label">
                                <span>New Releases</span>
                            </div>
                        </div>
                        <div className="explore-navigate-button">
                            <div className="icon">
                                <span class="material-symbols-outlined">sentiment_satisfied</span>
                            </div>
                            <div className="label">
                                <span>Moods & Genres</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sec" id="sec-id">
                    <div className="head-o-sec">
                        <div className="head-written">
                            <h1 className="sec-heading">Heading</h1>
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
                    <div className="longcards-list">
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
                                    <img src={p1} alt="poster"/>
                                </div>
                                <div className="card-abouts">
                                    <a className="card-title">Hello</a>
                                    <a className="card-album">Artist</a>
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
                                    <img src={p1} alt="poster"/>
                                </div>
                                <div className="card-abouts">
                                    <a className="card-title">Hello</a>
                                    <a className="card-album">Artist</a>
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
                                    <img src={p1} alt="poster"/>
                                </div>
                                <div className="card-abouts">
                                    <a className="card-title">Hello</a>
                                    <a className="card-album">Artist</a>
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
                                    <img src={p1} alt="poster"/>
                                </div>
                                <div className="card-abouts">
                                    <a className="card-title">Hello</a>
                                    <a className="card-album">Artist</a>
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
                                    <img src={p1} alt="poster"/>
                                </div>
                                <div className="card-abouts">
                                    <a className="card-title">Hello</a>
                                    <a className="card-album">Artist</a>
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
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Exploretab;