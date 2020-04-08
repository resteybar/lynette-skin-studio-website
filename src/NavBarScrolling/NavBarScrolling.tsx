import React from 'react'
import './NavBarScrolling.css'

interface NavBarScrollingProps {
    renderLinks: JSX.Element[]
}

const NavBarScrolling: React.FC<NavBarScrollingProps> = props => {
    
    return (
        <div id='NavBarScrolling'>
            <h1 className='title-lynette'>LYNETTE'S</h1>
            <h1 className='title-skin-studio'>SKIN STUDIO</h1>
            <ul id='links'>
                { props.renderLinks }
            </ul>
        </div>
    )
}

export default NavBarScrolling