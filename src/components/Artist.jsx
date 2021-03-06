import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import '../styles/artist.css'
import IconButton from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';


function Artist() {

const { browseId } = useParams('')

const [content, setContent] = useState({})

const [images, setImages] = useState([])

const [songs, setSongs] = useState([])

const [albums, setAlbums] = useState([])


useEffect(()=>{
    axios
    .get(`https://yt-music-api.herokuapp.com/api/yt/artist/${browseId}`)
    .then(res => {  
            setContent(res.data)
            setImages(res.data.thumbnails)
            setSongs(res.data.products.songs.content)
            setAlbums(res.data.products.albums.content)
        })
},{browseId})

    const copyLinkUrl = () => {
    navigator.clipboard.writeText(window.location.href)
  }

    return (
    <div className="wholePage">
    <h1 className="artistName">
    {content.name} <IconButton style={{backgroundColor: '#ea4f4c', color: '#FFFFFF', marginBottom: '7px'}}  onClick={copyLinkUrl}><ShareIcon/></IconButton>
    </h1>
        <div className="artistWrapper"> 
        <div className="descriptionWrapper"> 
        <h2>Description</h2> 
            <p className="artistDesc">
            
            {content.description}
            </p>

            </div>
            
            <div className="songListWrapper"> 
            <ul className="songList">
            <h2>Songs</h2> 
                {songs.map(song => (<li key={song.videoId}>{song.name}</li>))} 
                
            </ul>
            </div>
            <ul className="albumList">
            <h2>Albums</h2> 
                {albums.map(album => (<li key={album.browseId}><div className="albumName">{album.name}</div> 
                    <img style={{width: "70px"}} src={album.thumbnails[1].url}/>
                </li>))} 
                
            </ul>
        </div>
    </div>
    )
}

export default Artist
