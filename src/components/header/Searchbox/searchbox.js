import React from "react";
import "./searchbox.css";


function SearchBox(){
    return(
        <div id="search-screen" class="inactive">
            <input type="text" class="search-box" id="search-box" name="search" autocomplete="off"/>
            <ul class="recent-searches-sec">
                <li class="searched-item">
                    <span class="material-symbols-outlined">
                        history
                        </span>
                    <label class="searched-item-text">Hello World</label>
                    <button class="search-item-del">
                        <span class="material-symbols-outlined">
                            delete
                            </span>
                    </button>
                </li>
                <li class="searched-item">
                    <span class="material-symbols-outlined">
                        history
                        </span>
                    <label class="searched-item-text">Aaj piya ghar</label>
                    <button class="search-item-del">
                        <span class="material-symbols-outlined">
                            delete
                            </span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SearchBox;