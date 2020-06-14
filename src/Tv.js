import React from 'react'
import {tvWatched, tvWatching, handshakeFiveTv} from './tvList'






function Tv() {

    const handshakeTv = handshakeFiveTv.map(tv => (
     
        <div className="tvHandshake"  key={tv.id}>
            { <img src={tv.poster} alt="tv posters" className="tv" /> }
           
        </div>
    ))
    const nowWatchingTv = tvWatching.map(tv => (
        <div className="now_watching_tv"    key={tv.id}>
            { <img src={tv.poster} alt="tv posters" className="tv" /> }
        </div>
    ))
    const recentlyWatchedTv = tvWatched.map(tv => (
        <div className="recently_watched_tv"  key={tv.id}>
            { <img src={tv.poster} alt="tv posters" className="tv" /> }
        </div>
    ))

    return (
        <div>
             <h1>Movies</h1>
            <h2>Handshake Five</h2>
            <div className="tv_handshake_flex">
            {handshakeTv}
            </div>
            <h2>Currently Watching
            </h2>
            <div className="currently_watching_tv_flex">
            {nowWatchingTv}
            </div>
            <h2>Recently Watched</h2>
            <div className="recently_watched__tv_flex">
            {recentlyWatchedTv}
            </div>
        </div>
    )
}

export default Tv