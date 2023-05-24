import React from "react";
import "./chips.css";

function MoodChips(){
    const chipMood = [
        {link: "https://this.com", name: "Relax"},
        {link: "https://this.com", name: "Energize"},
        {link: "https://this.com", name: "Commute"},
        {link: "https://this.com", name: "Workout"},
    ]

    return(
        <div className="sec chips-sec">
            {chipMood.map((chip)=>(
                <a className="a-chip" href={chip.link}>{chip.name}</a>
            ))}
        </div>
    )
}

export default MoodChips;