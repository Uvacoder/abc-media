import React, {useState, useContext} from 'react'
import {gamesPlaying, gamesPlayed, handshakeFiveGames} from '../data/gameList'
import { Context } from '../Context'

function Games() {

    const {fullStarMaker, halfStarMaker, reviewToggle, filterSet, dimmer,  gamesPlayingSlice, gamesPlayedSlice, handleGamesPlayingArrowToggle, handleGamesPlayedToggle} = useContext(Context)

    const [handshakeReview, setHandshakeReview] = useState()
    const [playedReview, setPlayedReview] = useState()
    const [playingReview, setPlayingReview] = useState()


    const gamesHandshake = handshakeFiveGames.map((game, index) => (
        <div className="bookHandshake"  key={game.id} style={filterSet(game, handshakeReview)}>
            <img src={`${game.cover}`} alt="album cover" className="book"  />
            <div  className="word_box">
            <h4 className="title" >{game.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(game.rating)}</h4><h4 className="half-star">{halfStarMaker(game.rating)}</h4></span>
            { handshakeReview === game.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, handshakeFiveGames, handshakeReview, setHandshakeReview)}
                style={{display: game.review === "" ? "none" : ""}}
                >arrow_drop_up_icon</i>
                <p className="review" style={{display:  game.review ? "block" : "none"}}>{game.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, handshakeFiveGames, handshakeReview, setHandshakeReview)}
                 style={{display: game.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))

    const nowPlaying = gamesPlaying.slice(0, gamesPlayingSlice).map((game, index) => (
        <div className="now_listening"    key={game.id} style={filterSet(game, playingReview)}>
            <img src={`${game.cover}`} alt="album cover" className="music" />
            <div  className="word_box">
            <h4 className="title" >{game.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(game.rating)}</h4><h4 className="half-star">{halfStarMaker(game.rating)}</h4></span>
             { playingReview === game.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, gamesPlaying, playingReview, setPlayingReview)} 
                style={{display: game.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  game.review ? "block" : "none"}}>{game.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, gamesPlaying, playingReview, setPlayingReview)}
                 style={{display: game.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>    
        </div>
    ))

    const recentlyPlayed = gamesPlayed.slice(0, gamesPlayedSlice).map((game, index) => (
        <div className="recently_listened"  key={game.id} style={filterSet(game, playedReview)} >
            <img src={`${game.cover}`} alt="album cover" className="music" />
            <div  className="word_box">
            <h4 className="title" >{game.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(game.rating)}</h4><h4 className="half-star">{halfStarMaker(game.rating)}</h4></span>
            { playedReview === game.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, gamesPlayed, playedReview, setPlayedReview)} 
                style={{display: game.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  game.review ? "block" : "none"}}>{game.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, gamesPlayed, playedReview, setPlayedReview)}
                 style={{display: game.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))

    return (
        <div>
            <h1 className="section_title" id="games"   style={dimmer}>Games</h1>
            <h2 className="sub_section_title" title="handShakeFiveBooks" style={dimmer}>Handshake Five</h2>
            <div className="book_handshake_flex">
                {gamesHandshake}
            </div>
            <h2 className="sub_section_title" title="currentlyReading" style={dimmer}>Currently Playing</h2>
            <div className="currently_reading_flex">
                {nowPlaying}
                <div className="slice_toggle" style={{display: nowPlaying.length > 10 ? "" : "none"}} >
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
            <h2 className="sub_section_title"  title="recentlyRead" style={{dimmer, display: recentlyPlayed.length === 0 ? 'none' : ''}} >Recently Played</h2>
            <div className="recently_read_flex" style={{display: recentlyPlayed.length === 0 ? 'none' : ''}}>
                {recentlyPlayed}
                <div className="slice_toggle" style={{display: recentlyPlayed.length > 10 ? "" : "none"}}>
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