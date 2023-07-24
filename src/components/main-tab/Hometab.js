import React from "react";
import MoodChips from "./MoodChips/moodchips";
import YtPlayShelf from "../YtPlayShelf/ytplayshelf";

import "./hometab.css";


function Hometab() {
  const shelfTypes = [
    {itemArr: "n-icons", stype: "more-head", heading: "Recently Played", description: "Listen Again"},
    {itemArr: "n-icons", stype: "more-head", heading: "Javed Ali", description: "Similar to"},
    {itemArr: "tiles", stype: "only-head", heading: "More for you", description: ""},
    
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