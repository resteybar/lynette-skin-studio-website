import React from 'react'
import './NavBar.css'

interface NavBarProps {
    renderLinks: JSX.Element[]
}

const NavBar: React.FC<NavBarProps> = props => {
    // var isScrolledPast = false

    // window.addEventListener('scroll', function() {
    //     const navbarLinks = document.getElementById('NavBar-links')
    //     if (navbarLinks) {
    //         if (window.scrollY > navbarLinks.offsetTop + navbarLinks.offsetHeight) {
    //             this.console.log('Scrolled past nav bar links')
    //             isScrolledPast = true
    //         } else {
    //             isScrolledPast = false
    //         }
    //     }

    //     console.log(document.getElementById('NavBar')?.clientHeight)
    // })

    return (
        <div id='NavBar' className='debug-border'>
            <div id='navbar-title'>
                <h1 className='title-lynette lynette-brown'>LYNETTE'S</h1>
                <h1 className='title-skin-studio lynette-brown'>SKIN STUDIO</h1>
            </div>
            <ul id='NavBar-links'>
                { props.renderLinks }
            </ul>
        </div>
    )
}

export default NavBar