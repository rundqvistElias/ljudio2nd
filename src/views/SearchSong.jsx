import React, {useState, useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import { Context } from '../components/context'
import axios from 'axios'
import '../styles/video.css'

function SearchSong(){
    const {songs, setSongs} = useContext(Context)
    const {search} = useParams()
    const { content = [] } = songs
    

    

    useEffect(()=>{
        axios
        .get(`https://yt-music-api.herokuapp.com/api/yt/songs/${search}`)
        .then(res => {
            console.log(res);
            setSongs(res.data)
        })
    },[search])
     
    return (

        <div className="videoListWrapper">
            {<ul className="videoList">
        {content.map(song => (
          <li className="videoListItem" key={song.videoId}>
            <div className="listItem">
            <Link to={`/watch/${song.videoId}`}>
            
            <img src={song.thumbnails[1].url} />
            <div className="titleText">
              {song.name} - {song.artist.name}
            </div>
            </Link>
            </div>
          </li>
        ))}
      </ul>}
        </div>
    )
}

export default SearchSong;