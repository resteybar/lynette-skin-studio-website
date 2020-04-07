import React from 'react'
import './NavBarScrolling.css'

interface NavBarScrollingProps {
    renderLinks: JSX.Element[]
}

const NavBarScrolling: React.FC<NavBarScrollingProps> = props => {
    
    return (
        <div id="NavBarScrolling">
            <h1>NavBarScrolling Page Showing</h1>
            <h1>Lynette's Skin Studio</h1>
            { props.renderLinks }
        </div>
    )
}

export default NavBarScrolling