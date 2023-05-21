import React from "react";
import "./header.css";
import SearchBox from "./Searchbox/searchbox.js";

function Header(){
    return(
        <header id="header-prime">
            <nav>
                <div class="site-logo"><p>Satwik</p></div>
                <ul class="nav-items">
                    <li class="item selected-item">
                        <div onclick="redirec('#')">
                            <span class="material-symbols-outlined">home</span><label>Home</label>
                        </div>
                    </li>
                    <li class="item">
                        <div onclick="redirec('explore.html')">
                            <span class="material-symbols-outlined">explore</span><label>Explore</label>
                        </div>
                    </li>
                    <li class="item">
                        <div href="#">
                            <span class="material-symbols-outlined">library_music</span><label>Library</label>
                        </div>
                    </li>
                    <li class="item">
                        <div href="#" id="search-sec">
                            <span class="material-symbols-outlined">search</span><label>Search</label>
                        </div>
                    </li>
                </ul>
                <div class="account-sec">
                    <span class="material-symbols-outlined">
                        account_circle
                        </span>
                </div>
                
            </nav>
            
        </header>
    )
}

export default Header;