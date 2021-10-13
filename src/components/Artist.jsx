import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Artist() {

const { browseId } = useParams('')

const [content, setContent] = useState({})

const [images, setImages] = useState([])

const [songs, setSongs] = useState([])

const [albums, setAlbums] = useState([])


console.log(browseId);
console.log(content);
console.log(images);
console.log(songs);
console.log(albums);

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

    return (
    <div>
            
        <h1>
           {content.name}
        </h1>

        <p>
           {content.description}
        </p>

        <ul>
            {songs.map(song => (<li key={song.videoId}>{song.name}</li>))} 
            
        </ul>

        <ul>
            {albums.map(album => (<li key={album.browseId}>{album.name} 
                <img src={album.thumbnails[1].url}/>
            </li>))} 
            
        </ul>

    </div>
    )
}

export default Artist
