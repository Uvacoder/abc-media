import React, {useContext} from 'react'
import { Context } from '../Context'
import { MovieIcon, TVIcon, MusicIcon, GameIcon, BookIcon, ComicIcon } from '../data/svgs'
import '../style/IconNav.css'

export default function IconNav() {

    const {fullDim} = useContext(Context)

    return (
        <div className="iconNav-container" style={fullDim}>
            
            <a href="#movies" 
                style={{fill: "white"}} 
                className="iconNav-icon" 
                id="movie-icon-nav">
                <MovieIcon /> 
            </a>
            <a href="#television" 
                style={{fill: "white"}} 
                className="iconNav-icon">
                <TVIcon />
            </a>
             <a href="#books" 
                style={{fill: "white"}} 
                className="iconNav-icon">
                <BookIcon />
            </a>
             <a href="#games" 
                style={{fill: "white"}} 
                className="iconNav-icon">
                <GameIcon />
            </a>
            <a href="#music" 
                style={{fill: "white"}} 
                className="iconNav-icon">
                <MusicIcon />
            </a>
            <a href="#comics" 
                style={{fill: "white"}} 
                className="iconNav-icon">
                <ComicIcon />
            </a>
        </div>
    ) 
}