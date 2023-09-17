import React, { useEffect, useState} from "react";
import axios from 'axios';

import MoodChips from "./MoodChips/moodchips";
import YtPlayShelf from "../YtPlayShelf/ytplayshelf";
import PlayerKit from "../../PlayerKit/playerkit";

import "./hometab.css";
import AppLayout from "../AppLayout/AppLayout";

export const MajorCategories = {
  categories: [
    {mood: "Indian", request: "seed_genres=indian", type: "block"},
    {mood: "Classical", request:"seed_genres=classical", type: "tiles"}
  ]
}

function Hometab() {

  

  if(MajorCategories === null) return MajorCategories;
    
  return (
    <AppLayout>
      <div id="main">
        {/* mood chips */}
        <MoodChips/>
        {/* <PlayerKit/> */}
        {/* shelf section */}
        {MajorCategories.categories.map((type)=>(
          <YtPlayShelf shelfdata={type}/>
        ))}

        
        
      </div>
    </AppLayout>
  );
}

export default Hometab;