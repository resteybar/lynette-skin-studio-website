import React from 'react'
import './NavBarScrolling.css'
import menuIcon from '../images/menu.png'
import { styled } from 'styletron-react'

interface NavBarScrollingProps {
    renderLinks: JSX.Element[]
}

const NavBarScrolling: React.FC<NavBarScrollingProps> = props => {
    const size: string = '21'
    var isMenuDisplayed: boolean = false

    const displayLinks = () => {
        const menuLinks = document.getElementById('menu-links-2')
        
        if (isMenuDisplayed)
            menuLinks?.setAttribute('style', 'display: none;')
        else 
            menuLinks?.setAttribute('style', 'display: block;')

        isMenuDisplayed = !isMenuDisplayed
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
                <CondensedLinks id='menu-links-2'>
                    { props.renderLinks }
                </CondensedLinks>
            </div>
            <ul id='menu-links'>
                { props.renderLinks }
            </ul>
        </div>
    )
}

// CSS
const CondensedLinks = styled('ul', {
    // Change to 'none'
    display: 'block',
    position: 'absolute',
    top: '50px',
    backgroundColor: 'white'
})

export default NavBarScrolling