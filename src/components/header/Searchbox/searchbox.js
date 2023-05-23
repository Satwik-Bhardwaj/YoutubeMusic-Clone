import React, { useEffect, useRef } from "react";
import "./searchbox.css";

function SearchBox(props){
    const ref = useRef();

    const { onClickOutside } = props;
  
    useEffect(() => {
  
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      };
  
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [onClickOutside]);
  
    if(!props.show)
      return null;
  
    return(
        <div id="search-screen" ref={ref}>
            <input type="text" className="search-box" id="search-box" name="search" autoComplete="off" />
            <ul className="recent-searches-sec">
                <li className="searched-item">
                <span className="material-symbols-outlined">
                    history
                </span>
                <label className="searched-item-text">Hello World</label>
                <button className="search-item-del">
                    <span className="material-symbols-outlined">
                    delete
                    </span>
                </button>
                </li>
                <li className="searched-item">
                <span className="material-symbols-outlined">
                    history
                </span>
                <label className="searched-item-text">Aaj piya ghar</label>
                <button className="search-item-del">
                    <span className="material-symbols-outlined">
                    delete
                    </span>
                </button>
                </li>
            </ul>
        </div>
    )
  }

export default SearchBox;