import React from 'react'
import { styled } from "styletron-react";
import './Home.css'
import NavBar from '../NavBar/NavBar'
import ContactUsButton from '../images/Contact_Us_Button.png'
import ContactUsButtonFilled from '../images/Contact_Us_Button_Filled.png'

interface HomeProps {
    renderLinks: JSX.Element[]
}

const Home: React.FC<HomeProps> = props => {
    const ToFilled = () => {
        var contactButton = document.getElementById("OnHoverContact") as HTMLImageElement
        
        contactButton.src = ContactUsButtonFilled
    }
    const ToNotFilled = () => {
        var contactButton = document.getElementById("OnHoverContact") as HTMLImageElement
    
        contactButton.src = ContactUsButton
    }

    return (
        <div id="Home" className='debug-border'>
            <NavBar renderLinks={props.renderLinks} />
            <h1 >WELCOME MESSAGE</h1>
            <div id="ContactUsButton" className='debug-border'>
                <img className='debug-border' id="OnHoverContact" src={ContactUsButton} onMouseOver={ToFilled} onMouseOut={ToNotFilled}/>
            </div>
        </div>
    )
}

export default Home