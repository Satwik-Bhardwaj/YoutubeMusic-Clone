import { NavLink } from "react-router-dom";

function PlaylistCard({linkTo, playlistName, playlistDesp , posterImg}) {
    return (
        <NavLink to={linkTo}>
        <div className="m-card" id="m-card">
            <div className="m-card-insides">
                <div className="card-poster">
                <div className="play-pause-button">
                    <span className="material-symbols-outlined">
                    play_arrow
                    </span>
                </div>
                <div className="poster-hover">
                    <div className="more-option-button">
                    <span className="material-symbols-outlined">
                        more_vert
                    </span>
                    </div>
                    
                </div>
                <img src={posterImg} alt="poster"/>
                </div>
                <div className="card-abouts">
                <a className="card-title" href={linkTo}>{playlistName}</a>
                <p className="card-album" >{playlistDesp}</p>
                </div>
            </div>
        </div>
        </NavLink>
    )
}
export default PlaylistCard;