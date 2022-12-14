import React, {useContext} from 'react'
import { Context } from '../Context'
import { Linkedin, Github } from '../data/svgs'
import '../style/Footer.css'

function Footer() {

    const {dimmer} = useContext(Context)

    return (
            <div  className="footer" style={dimmer}> 
            <div className="leftFlexContainer">
               <a href="https://scottjellen.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://s3.us-east-2.amazonaws.com/scottjellen.me.projectlist/sJellenLogo.jpg"
                    alt="logo"
                    className="logo"
                    />
                </a> 
                <a href="https://github.com/SJellen" target="_blank" rel="noopener noreferrer" style={{fill: "white"}} className="iconNav-icon">
                    <Github />
                </a> 
                <a href="https://www.linkedin.com/in/scottjellen" target="_blank" rel="noopener noreferrer" style={{fill: "white"}} className="iconNav-icon">
                    <Linkedin />
                </a>
            </div>
                <h1 className="copy_footer">S Jellen  &#169; 2020-22</h1>
            </div>
    )
}

export default Footer