import React, {useState, useContext} from 'react'
import {musicListening, musicListened, handshakeFiveMusic} from '../data/musicList'
import { Context } from '../Context'
import {MusicIcon} from '../data/svgs'

function Music() {

    const {fullStarMaker, halfStarMaker, reviewToggle, filterSet, dimmer,  handleMusicListeningArrowToggle, handleMusicListedArrowToggle, musicListeningSlice, musicListenedSlice} = useContext(Context)
      
    const [handshakeReview, setHandshakeReview] = useState()
    const [watchedReview, setWatchedReview] = useState()
    // eslint-disable-next-line no-unused-vars
    const [watchingReview, setWatchingReview] = useState()

   const musicHandshake = handshakeFiveMusic.map((music, index) => (
        <div className="musicHandshake"  key={music.id} style={filterSet(music, handshakeReview)}>
            <img src={`${music.cover}`} alt="album cover" className="music"  />
            <div  className="word_box">
            <h4 className="artist"  style={{marginLeft: "2rem"}}>{music.artist}</h4>
            <h4 className="title"  style={{marginLeft: "2rem"}}>{music.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(music.rating)}</h4><h4 className="half-star">{halfStarMaker(music.rating)}</h4></span>
            { handshakeReview === music.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, handshakeFiveMusic, handshakeReview, setHandshakeReview)}
                style={{display: music.review === "" ? "none" : ""}}
                >arrow_drop_up_icon</i>
                <p className="review" style={{display:  music.review ? "block" : "none"}}>{music.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, handshakeFiveMusic, handshakeReview, setHandshakeReview)}
                 style={{display: music.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))

    const nowListening = musicListening.slice(0, musicListeningSlice).map((music, index) => (
        <div className="now_listening"    key={music.id} style={filterSet(music, watchingReview)}>
            <img src={`${music.cover}`} alt="album cover" className="music" />
            <div  className="word_box">
            <h4 className="artist"  style={{marginLeft: "2rem"}}>{music.artist}</h4>
            <h4 className="title" style={{marginLeft: "2rem"}}>{music.title}</h4>
            {/* <span className="star-container" ><h4 className="star">{ fullStarMaker(music.rating)}</h4><h4 className="half-star">{halfStarMaker(music.rating)}</h4></span>
             { watchingReview === music.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, musicListening, watchingReview, setWatchingReview)} 
                style={{display: music.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  music.review ? "block" : "none"}}>{music.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, musicListening, watchingReview, setWatchingReview)}
                 style={{display: music.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            } */}
            </div>    
        </div>
    ))

    const recentlyListened = musicListened.slice(0, musicListenedSlice).map((music, index) => (
        <div className="recently_listened"  key={music.id} style={filterSet(music, watchedReview)} >
            <img src={`${music.cover}`} alt="album cover" className="music" />
            <div  className="word_box">
            <h4 className="artist"  style={{marginLeft: "2rem"}}>{music.artist}</h4>
            <h4 className="title" style={{marginLeft: "2rem"}}>{music.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(music.rating)}</h4><h4 className="half-star">{halfStarMaker(music.rating)}</h4></span>
            { watchedReview === music.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, musicListened, watchedReview, setWatchedReview)} 
                style={{display: music.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  music.review ? "block" : "none"}}>{music.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, musicListened, watchedReview, setWatchedReview)}
                 style={{display: music.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))
   
    return (
        <div>
            <h1 className="section_title" id="music"   style={dimmer}><span className="section_title_icon" >
                <MusicIcon />
                </span>Music</h1>
            <h2 className="sub_section_title" title="handShakeFiveBooks" style={dimmer}>Handshake Five</h2>
            <div className="music_handshake_flex">
                {musicHandshake}
            </div>
            <h2 className="sub_section_title" title="currentlyReading" style={dimmer}>Currently Listening</h2>
            <div className="currently_listening_flex">
                {nowListening}
                <div className="slice_toggle" style={{display: nowListening.length > 10 ? "" : "none"}} >
                    <span className="toggle_arrow" >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        viewBox="0 0 24 24" 
                        fill="white"
                        style={{ fontSize: 50 }} onClick={handleMusicListeningArrowToggle} className={musicListeningSlice === 10 ? '' : 'rotate_arrow'}
                        >
                        <path d="M12 21l-12-18h24z" />
                    </svg>
                    </span>
                </div>
            </div>
            <h2 className="sub_section_title"  title="recentlyRead" style={dimmer}>Recently Listened</h2>
            <div className="recently_listening_flex">
                {recentlyListened}
                <div className="slice_toggle" style={{display: recentlyListened.length > 10 ? "" : "none"}}>
                    <span className="toggle_arrow" >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        viewBox="0 0 24 24" 
                        fill="white"
                        style={{ fontSize: 50 }} onClick={handleMusicListedArrowToggle} className={musicListenedSlice === 10 ? '' : 'rotate_arrow'}
                        >
                        <path d="M12 21l-12-18h24z" />
                    </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Music