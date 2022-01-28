import React, {useState, useContext} from 'react'
import {comicsReading, comicsRead, handshakeFiveComics} from '../data/comicList'
import { Context } from '../Context'
import {ComicIcon} from '../data/svgs'

function Comics() {

    const {fullStarMaker, halfStarMaker, reviewToggle, filterSet, dimmer, handleComicsReadingArrowToggle, handleComicsReadArrowToggle, comicsReadingSlice, comicsReadSlice} = useContext(Context)
      
    const [handshakeReview, setHandshakeReview] = useState()
    const [readReview, setReadReview] = useState()
    // eslint-disable-next-line no-unused-vars
    const [readingReview, setReadingReview] = useState()
    
   const bookHandshake = handshakeFiveComics.map((book, index) => (
        <div className="bookHandshake"  key={book.id} style={filterSet(book, handshakeReview)}>
            <img src={book.isbn.length !== 0 ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg` : '../bookCover.png'} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(book.rating)}</h4><h4 className="half-star">{halfStarMaker(book.rating)}</h4></span>
            { handshakeReview === book.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, handshakeFiveComics, handshakeReview, setHandshakeReview)}
                style={{display: book.review === "" ? "none" : ""}}
                >arrow_drop_up_icon</i>
                <p className="review" style={{display:  book.review ? "block" : "none"}}>{book.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, handshakeFiveComics, handshakeReview, setHandshakeReview)}
                 style={{display: book.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))

    const nowReading = comicsReading.slice(0, comicsReadingSlice).map((book, index) => (
        <div className="now_reading"    key={book.id} style={filterSet(book, readingReview)}>
            <img src={book.isbn.length !== 0 ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg` : '../bookCover.png'} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            {/* <span className="star-container" ><h4 className="star">{ fullStarMaker(book.rating)}</h4><h4 className="half-star">{halfStarMaker(book.rating)}</h4></span>
             { readingReview === book.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, comicsReading, readingReview, setReadingReview)} 
                style={{display: book.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  book.review ? "block" : "none"}}>{book.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, comicsReading, readingReview, setReadingReview)}
                 style={{display: book.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            } */}
            </div>    
        </div>
    ))

    const recentlyRead = comicsRead.slice(0, comicsReadSlice).map((book, index) => (
        <div className="recently_read"  key={book.id} style={filterSet(book, readReview)} >
            <img src={book.isbn.length !== 0 ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg` : '../bookCover.png'} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(book.rating)}</h4><h4 className="half-star">{halfStarMaker(book.rating)}</h4></span>
            { readReview === book.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, comicsRead, readReview, setReadReview)} 
                style={{display: book.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  book.review ? "block" : "none"}}>{book.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, comicsRead, readReview, setReadReview)}
                 style={{display: book.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))
   
    return (
        <div>
            <h1 className="section_title" id="comics"   style={dimmer}><span className="section_title_icon" >
                <ComicIcon />
                </span>Comics</h1>
            <h2 className="sub_section_title" title="handShakeFiveBooks" style={dimmer}>Handshake Five</h2>
            <div className="book_handshake_flex">
                {bookHandshake}
            </div>
            <h2 className="sub_section_title"  title="recentlyRead" style={dimmer}>Recently Read</h2>
            <div className="recently_read_flex">
                {recentlyRead}
                <div className="slice_toggle" style={{display: recentlyRead.length < 10 ? 'none' : ''}}>
                    <span className="toggle_arrow" >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        viewBox="0 0 24 24" 
                        fill="white"
                        style={{ fontSize: 50 }} onClick={handleComicsReadArrowToggle} className={comicsReadSlice === 10 ? '' : 'rotate_arrow'}                        
                        >
                        <path d="M12 21l-12-18h24z" />
                    </svg>
                    </span>
                </div>
            </div>
             <h2 className="sub_section_title" title="currentlyReading" style={dimmer}>Currently Reading</h2>
            <div className="currently_reading_flex">
                {nowReading}
                <div className="slice_toggle" style={{display: nowReading.length < 10 ? 'none' : ''}}>
                    <span className="toggle_arrow">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        viewBox="0 0 24 24" 
                        fill="white"
                        style={{ fontSize: 50 }} onClick={handleComicsReadingArrowToggle} className={comicsReadingSlice === 10 ? '' : 'rotate_arrow'}                        
                        >
                        <path d="M12 21l-12-18h24z" />
                    </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Comics