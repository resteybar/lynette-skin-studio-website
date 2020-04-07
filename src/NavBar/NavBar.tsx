import React from 'react'
import './NavBar.css'

interface NavBarProps {
    renderLinks: JSX.Element[]
}

const NavBar: React.FC<NavBarProps> = props => {
    return (
        <div id="NavBar">
            <h1>Lynette's Skin Studio</h1>
            <ul>
                { props.renderLinks }
            </ul>
        </div>
    )
}

export default NavBar