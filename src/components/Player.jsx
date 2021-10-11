import { Context } from "./context";
import React, {useState, useRef, useContext} from 'react'
import ReactPlayer from 'react-player'
import { useHistory, useParams } from 'react-router'




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
        <div>
           <div className='videoWrapper'>
                <ReactPlayer 
                className="musicVideoItem" 
                url={'https://www.youtube.com/watch?v=' + videoId} 
                playing={playState}
                width="100%"
                height="100%"
                 />
            </div>
            <div>
                <button onClick={handlePrev}>PREV</button>
                <button onClick={handlePlay}>PLAY</button>
                <button onClick={handleNext}>NEXT</button>
            </div>



        </div>
    )
}

export default Player
