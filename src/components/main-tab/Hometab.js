import React, { useEffect, useState} from "react";
import axios from 'axios';

import MoodChips from "./MoodChips/moodchips";
import YtPlayShelf from "../YtPlayShelf/ytplayshelf";

import "./hometab.css";

export const MajorCategories = {
  categories: [
    {mood: "Indian", request: "seed_genres=indian", type: "block"},
    {mood: "Classical", request:"seed_genres=classical", type: "tiles"}
  ]
}

function Hometab() {

  

  if(MajorCategories === null) return MajorCategories;
    
  return (
    <>
    <div id="main">
      {/* mood chips */}
      <MoodChips/>

      {/* shelf section */}
      {MajorCategories.categories.map((type)=>(
        <YtPlayShelf shelfdata={type}/>
      ))}

      
      
    </div>
    </>
  );
}

export default Hometab;