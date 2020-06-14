import React from 'react'
import {moviesWatched, moviesWatching, handshakeFiveMovies} from './movieList'


 function Movies() {

    const handshakeId = handshakeFiveMovies.map(movie => (
     
        <div className="movieHandshake"  key={movie.id}>
            { <img src={movie.poster} alt="movie posters" className="movie" /> }
           
        </div>
    ))
    const nowWatchingMovies = moviesWatching.map(movie => (
        <div className="now_watching_movies"    key={movie.id}>
            { <img src={movie.poster} alt="movie posters" className="movie" /> }
        </div>
    ))
    const recentlyWatchedMovies = moviesWatched.map(movie => (
        <div className="recently_watched_movies"  key={movie.id}>
            { <img src={movie.poster} alt="movie posters" className="movie" /> }
        </div>
    ))
    
    
    
    
    
    return (
        <div>
            <h1>Movies</h1>
            <h2>Handshake Five</h2>
            <div className="movies_handshake_flex">
            {handshakeId}
            </div>
            <h2>Currently Watching
            </h2>
            <div className="currently_watching_flex">
            {nowWatchingMovies}
            </div>
            <h2>Recently Watched</h2>
            <div className="recently_watched_flex">
            {recentlyWatchedMovies}
            </div>
        </div>
    )
}

export default Movies