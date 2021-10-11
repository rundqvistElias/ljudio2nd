import React, {useState, useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import { Context } from '../components/context'
import axios from 'axios'

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

        <div>
            {<ul>
        {content.map(song => (
          <li key={song.videoId}>
            <Link to={`/watch/${song.videoId}`}>
              {song.name} - {song.artist.name}

            </Link>
          </li>
        ))}
      </ul>}
        </div>
    )
}

export default SearchSong;