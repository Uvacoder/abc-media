import React, {useContext} from 'react'
import { Context } from '../Context'
import { MovieIcon, TVIcon, MusicIcon, GameIcon, BookIcon } from '../data/svgs'


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
            <a href="#music" 
                style={{fill: "white"}} 
                className="iconNav-icon">
                <MusicIcon />
            </a>
            <a href="#games" 
                style={{fill: "white"}} 
                className="iconNav-icon">
                <GameIcon />
            </a>
            <a href="#books" 
                style={{fill: "white"}} 
                className="iconNav-icon">
                <BookIcon />
            </a>
        </div>
    ) 
}