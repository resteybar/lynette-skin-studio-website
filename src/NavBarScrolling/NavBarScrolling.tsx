import React from 'react'
import './NavBarScrolling.css'
import menuIcon from '../images/menu.png'
import CSS from 'csstype'

interface NavBarScrollingProps {
    renderLinks: JSX.Element[]
}

const NavBarScrolling: React.FC<NavBarScrollingProps> = props => {
    const size: string = '21'

    const displayLinks = () => {
        const isMenuClicked = document.getElementById('menu-icon')
        
    }

    return (
        <div id='NavBarScrolling' className='debug-border'>
            <div id='navbarscrolling-title'>
                <h1 className='title-lynette lynette-brown'>LYNETTE'S</h1>
                <h1 className='title-skin-studio lynette-brown'>SKIN STUDIO</h1>
            </div>
            <ul id='navbarscrolling-links'>
                { props.renderLinks }
            </ul>
            <div id='menu'>
                <img id='menu-icon' src={ menuIcon } height={ size + 'px' }  width={ size + 'px' } 
                onClick={ () => displayLinks() }
                />
            </div>
            <ul id='menu-links'>
                { props.renderLinks }
            </ul>
        </div>
    )
}

export default NavBarScrolling