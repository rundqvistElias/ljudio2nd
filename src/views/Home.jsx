import React from 'react'
import MusicLogo from '../assets/musiclogo.jpg'
import ArtistLogo from '../assets/artistlogo.jpg'

function Home() {
    return (
    <div className="homeHeader">
            <div className="homeWrapper">
        <div className="homeSongs">
         <div className="songDiv">
            Songs
        <p>“The music is not in the notes, but in the silence in between.”</p>
        </div>
        <div className="songPic">
        <img src={MusicLogo} alt="music"></img>
        </div>
        </div>
        <div className="homeArtists">
            <div className="artistDiv">
        Artists
        <p>“Creativity takes courage.”</p>
            </div>
            <div className="artistPic">
        <img src={ArtistLogo} alt="artist"></img>
          </div>
        </div>
        </div>

        </div>
    )
}

export default Home;