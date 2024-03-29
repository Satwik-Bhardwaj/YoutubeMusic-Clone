import React, {useState, useEffect, useContext} from "react";
import { NavLink } from "react-router-dom";

import SearchBox from "./Searchbox/searchbox";
import "./header.css";
import avatar from "./avatar.jpg";

import { AppStateContext } from "../../AppStateContext/AppStateContext";
function Header() {

  const [openSearch, setOpenSearch] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const { appState, setAppState } = useContext(AppStateContext);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled beyond the top position
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  

  const handleButtonClick = () => {
    const contextMenuState = appState.contextMenuOpened;
    setAppState({...appState, contextMenuOpened: !contextMenuState});
  };
  return (
    <>
      <header id="header-prime" style={isScrolled || appState.appearance.headerHighlighted ?{backgroundColor:'black', borderBottom:'1px solid var(--theme-color-4)'}:{}}>
        <nav>
          <div className="site-logo">
            <p>Cassette</p>
          </div>
          <ul className="nav-items">
            <li className="item">
              <NavLink to="/Home" style={({isActive})=>{return{color: isActive ? 'white': ''}}}>
                <div>
                  <span className="material-symbols-outlined">home</span>
                  <label>Home</label>
                </div>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/explore" style={({isActive})=>{return{color: isActive ? 'white': ''}}}>
                <div>
                  <span className="material-symbols-outlined">explore</span>
                  <label>Explore</label>
                </div>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/library" style={({isActive})=>{return{color: isActive ? 'white': ''}}}>
                <div>
                  <span className="material-symbols-outlined">library_music</span>
                  <label>Library</label>
                </div>
              </NavLink>
            </li>
            <li className="item">
              <div href="#" id="search-sec" onClick={() => {setOpenSearch(true)}}>
                <span className="material-symbols-outlined">search</span>
                <label>Search</label>
              </div>
            </li>
          </ul>
          <div className="account-sec"  onClick={handleButtonClick}>
            <span className="account-btn">
              <img src={avatar} className="account-dp" alt="profile"/>
            </span>
          </div>
        </nav>
      </header>

      <SearchBox show={openSearch} onClickOutside={() => {setOpenSearch(false)}}/>
      </>
  );
}

export default Header;
