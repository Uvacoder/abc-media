import React, {useState, useContext} from 'react'
import {gamesPlaying, gamesPlayed, handshakeFiveGames} from '../data/gameList'
import { Context } from '../Context'

function Games() {

    const {fullStarMaker, halfStarMaker, reviewToggle, filterSet, dimmer,  gamesPlayingSlice, gamesPlayedSlice, handleGamesPlayingArrowToggle, handleGamesPlayedToggle} = useContext(Context)

    const [handshakeReview, setHandshakeReview] = useState()
    const [watchedReview, setWatchedReview] = useState()
    const [watchingReview, setWatchingReview] = useState()


    const gamesHandshake = handshakeFiveGames.map((music, index) => (
        <div className="musicHandshake"  key={music.id} style={filterSet(music, handshakeReview)}>
            <img src={`${music.cover}`} alt="album cover" className="music"  />
            <div  className="word_box">
            <h4 className="title"  style={{marginLeft: "2rem"}}>{music.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(music.rating)}</h4><h4 className="half-star">{halfStarMaker(music.rating)}</h4></span>
            { handshakeReview === music.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, handshakeFiveGames, handshakeReview, setHandshakeReview)}
                style={{display: music.review === "" ? "none" : ""}}
                >arrow_drop_up_icon</i>
                <p className="review" style={{display:  music.review ? "block" : "none"}}>{music.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, handshakeFiveGames, handshakeReview, setHandshakeReview)}
                 style={{display: music.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))

    const nowListening = gamesPlaying.slice(0, gamesPlayingSlice).map((music, index) => (
        <div className="now_listening"    key={music.id} style={filterSet(music, watchingReview)}>
            <img src={`${music.cover}`} alt="album cover" className="music" />
            <div  className="word_box">
            <h4 className="title" style={{marginLeft: "2rem"}}>{music.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(music.rating)}</h4><h4 className="half-star">{halfStarMaker(music.rating)}</h4></span>
             { watchingReview === music.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, gamesPlaying, watchingReview, setWatchingReview)} 
                style={{display: music.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  music.review ? "block" : "none"}}>{music.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, gamesPlaying, watchingReview, setWatchingReview)}
                 style={{display: music.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>    
        </div>
    ))

    const recentlyListened = gamesPlayed.slice(0, gamesPlayedSlice).map((music, index) => (
        <div className="recently_listened"  key={music.id} style={filterSet(music, watchedReview)} >
            <img src={`${music.cover}`} alt="album cover" className="music" />
            <div  className="word_box">
            <h4 className="title" style={{marginLeft: "2rem"}}>{music.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(music.rating)}</h4><h4 className="half-star">{halfStarMaker(music.rating)}</h4></span>
            { watchedReview === music.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, gamesPlayed, watchedReview, setWatchedReview)} 
                style={{display: music.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  music.review ? "block" : "none"}}>{music.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, gamesPlayed, watchedReview, setWatchedReview)}
                 style={{display: music.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))

    return (
        <div>
            <h1 className="section_title" id="music"   style={dimmer}>Games</h1>
            <h2 className="sub_section_title" title="handShakeFiveBooks" style={dimmer}>Handshake Five</h2>
            <div className="music_handshake_flex">
                {gamesHandshake}
            </div>
            <h2 className="sub_section_title" title="currentlyReading" style={dimmer}>Currently Playing</h2>
            <div className="currently_listening_flex">
                {nowListening}
                <div className="slice_toggle" style={{display: nowListening.length > 10 ? "" : "none"}} >
                    <span className="toggle_arrow" >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        viewBox="0 0 24 24" 
                        fill="white"
                        style={{ fontSize: 50 }} onClick={handleGamesPlayingArrowToggle} className={gamesPlayingSlice === 10 ? '' : 'rotate_arrow'}
                        >
                        <path d="M12 21l-12-18h24z" />
                    </svg>
                    </span>
                </div>
            </div>
            <h2 className="sub_section_title"  title="recentlyRead" style={dimmer}>Recently Played</h2>
            <div className="recently_listening_flex">
                {recentlyListened}
                <div className="slice_toggle" style={{display: recentlyListened.length > 10 ? "" : "none"}}>
                    <span className="toggle_arrow" >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        viewBox="0 0 24 24" 
                        fill="white"
                        style={{ fontSize: 50 }} onClick={handleGamesPlayedToggle} className={gamesPlayedSlice === 10 ? '' : 'rotate_arrow'}
                        >
                        <path d="M12 21l-12-18h24z" />
                    </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Games