import React, { createContext } from "react";
import MoodChips from "./MoodChips/moodchips";
import YtPlayShelf from "../YtPlayShelf/ytplayshelf";
import shelfItems from "../../selfItemfetcher";
import HeadLogo from "../YtPlayShelf/sec-head-img.png"

import "./hometab.css";


function Hometab() {
  const shelfTypes = [
    {itemArr: "n-icons", stype: "more-head", heading: "Recently Played", description: "Listen Again", secLogo: HeadLogo},
    {itemArr: "n-icons", stype: "more-head", heading: "Javed Ali", description: "Similar to", secLogo: HeadLogo},
    {itemArr: "tiles", stype: "only-head", heading: "More for you", description: "", secLogo: null},
    
  ];

  return (
    <>
      
    <div id="main">
      {/* mood chips */}
      <MoodChips/>

      {/* shelf section */}
      {shelfTypes.map((type)=>(
        <YtPlayShelf shelftype={type}/>
      ))}

      
      
    </div>
    </>
  );
}

export default Hometab;