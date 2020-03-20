import React from 'react'
import './NavBar.css'

const NavBar: React.FC = () => {
    // Links in Nav Bar
    const links = [
        { name: 'Home', path: '' },
        { name: 'Product', path: 'Product' }
    ]

    // Automate Rendering Links
    const renderLinks = () => {
        var renderedLinks = []

        for (let i = 0; i < links.length; i++)
            renderedLinks.push(
                <li key={ i }>
                    <a href={ '#' + links[i].path }>{ links[i].name }</a>
                </li>
            )
        
        return renderedLinks
    }

    return (
        <div id="NavBar">
            <h1>Lynette's Skin Studio</h1>
            <ul>
                { renderLinks() }
            </ul>
        </div>
    )
}

export default NavBar