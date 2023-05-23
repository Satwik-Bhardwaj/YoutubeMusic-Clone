import React, {useState} from "react";
import "./header.css";
import SearchBox from "./Searchbox/searchbox";

function Header() {

  const [openSearch, setOpenSearch] = useState(false);
  
  return (
    <>
      <header id="header-prime">
        <nav>
          <div className="site-logo">
            <p>Satwik</p>
          </div>
          <ul className="nav-items">
            <li className="item selected-item">
              <div onClick="redirec('#')">
                <span className="material-symbols-outlined">home</span>
                <label>Home</label>
              </div>
            </li>
            <li className="item">
              <div onClick="redirect('explore.html')">
                <span className="material-symbols-outlined">explore</span>
                <label>Explore</label>
              </div>
            </li>
            <li className="item">
              <div href="#">
                <span className="material-symbols-outlined">library_music</span>
                <label>Library</label>
              </div>
            </li>
            <li className="item">
              <div href="#" id="search-sec" onClick={() => {setOpenSearch(true)}}>
                <span className="material-symbols-outlined">search</span>
                <label>Search</label>
              </div>
            </li>
          </ul>
          <div className="account-sec">
            <span className="material-symbols-outlined">account_circle</span>
          </div>
        </nav>
      </header>

      <SearchBox show={openSearch} onClickOutside={() => {setOpenSearch(false)}}/>
      </>
  );
}

export default Header;
