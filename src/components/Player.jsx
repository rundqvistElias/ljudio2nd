import { Context } from "./context";
import React, {useState, useRef, useContext} from 'react'
import ReactPlayer from 'react-player'
import { useHistory, useParams } from 'react-router'
import '../styles/video.css';
import IconButton from '@mui/material/Button';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';





function Player() {
    
    const [ playState, setPlayState ] = useState(false);
    const {songs} = useContext(Context)
    const { videoId } = useParams('')
    const history = useHistory()
    const { content = [] } = songs

    const handlePlay = (event) => {
        setPlayState(prevCheck => !prevCheck);
    };
    
    
  const handleNext = () => {
    for ( let i = 0; i < content.length - 1; i++) {
      if (content[i].videoId == videoId)  {
        content[i + 1].videoId === videoId
        history.push(content[i + 1].videoId)
      }
    }
  }

  const handlePrev = () => {
    for ( let i = 0; i < content.length - 1; i++) {
        if (content[i].videoId == videoId)  {
          content[i + 1].videoId === videoId
          history.push(content[i - 1].videoId)
        }
      }
  }
  


return (
    <div className="videoWholeItem">
        <div className='videoWrapper'>
                <ReactPlayer 
                className="musicVideoItem" 
                url={'https://www.youtube.com/watch?v=' + videoId} 
                playing={playState}
                width="100%"
                height="100%"
                 />
        </div>
        <div className="btnRow">
            <IconButton style={{backgroundColor: '#ea4f4c', color: '#FFFFFF'}}  onClick={handlePrev}><SkipPreviousIcon/></IconButton>
            <IconButton style={{backgroundColor: '#ea4f4c', color: '#FFFFFF'}}  onClick={handlePlay}>PLAY</IconButton>
            <IconButton style={{backgroundColor: '#ea4f4c', color: '#FFFFFF'}}  onClick={handleNext}><SkipNextIcon/></IconButton>
        </div>
    </div>
    )
}

export default Player
