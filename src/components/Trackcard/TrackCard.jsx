function TrackCard({linkTo, trackName, tracktArtists , posterImg}) {
    return (
        <div className="m-card" id="track-card">
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
                <a className="card-title" href={linkTo}>{trackName}</a>
                <p className="card-album" >{tracktArtists.map((artist)=>(`${artist.name}`)).join(' • ')}</p>
                </div>
            </div>
        </div>
    )
}
export default TrackCard;