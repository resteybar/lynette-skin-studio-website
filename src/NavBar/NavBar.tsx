import React from 'react'
import './NavBar.css'

interface NavBarProps {
    renderLinks: JSX.Element[]
}

const NavBar: React.FC<NavBarProps> = props => {
    return (
        <div id='NavBar'>
            <h1 className='title-lynette'>LYNETTE'S</h1>
            <h1 className='title-skin-studio'>SKIN STUDIO</h1>
            <ul>
                { props.renderLinks }
            </ul>
        </div>
    )
}

export default NavBar