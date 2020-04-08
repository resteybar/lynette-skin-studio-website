import React from 'react'
import './NavBarScrolling.css'
import menuIcon from '../images/menu.png'

interface NavBarScrollingProps {
    renderLinks: JSX.Element[]
}

const NavBarScrolling: React.FC<NavBarScrollingProps> = props => {
    const size: string = '21'

    return (
        <div id='NavBarScrolling' className='debug-border'>
            <div id='navbarscrolling-title'>
                <h1 className='title-lynette lynette-brown'>LYNETTE'S</h1>
                <h1 className='title-skin-studio lynette-brown'>SKIN STUDIO</h1>
            </div>
            <ul id='links'>
                { props.renderLinks }
            </ul>
            <div id='menu'>
                <img id='menu-icon' src={ menuIcon } height={ size + 'px' }  width={ size + 'px' } />
            </div>
        </div>
    )
}

export default NavBarScrolling