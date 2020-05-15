import React from 'react'
import './NavBar.css'
import { styled } from 'styletron-react'

interface NavBarProps {
    renderLinks: JSX.Element[]
}

const NavBar: React.FC<NavBarProps> = props => {
    return (
        <div id='NavBar' className='debug-border'>
            <div id='navbar-title'>
                <h1 className='title-lynette lynette-brown'>LYNETTE'S</h1>
                <h1 className='title-skin-studio lynette-brown'>SKIN STUDIO</h1>
            </div>
            <StylingNavBar id='NavBar-links'>
                { props.renderLinks }
            </StylingNavBar>
        </div>
    )
}
const StylingNavBar = styled ('ul', {
    '@media screen and (max-width: 422px)': {
        // marginLeft: '10px',
        // marginRight: '10px',
    }
})
export default NavBar