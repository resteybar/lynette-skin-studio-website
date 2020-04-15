import React from 'react'
import { styled, withStyle } from 'styletron-react'
import menuIcon from '../images/menu.png'

// Tutorial: https://itnext.io/how-to-build-a-responsive-navbar-using-flexbox-and-javascript-eb0af24f19bf
const TestNavBar: React.FC = () => {
    const links: string[] = [
        'Home',
        'Product',
        'About Us',
        'Contact Us',
        'Blog'
    ]

    // Automate Rendering Links
    const renderLinks = () => {
        var renderedLinks = []

        for (let i = 0; i < links.length; i++)
            renderedLinks.push(
                <List key={ i }>
                    <Link href='#'>{ links[i] }</Link>
                </List>
            )
        
        return renderedLinks
    }
    
    const size: string = '21'
    var isMenuDisplayed: boolean = false

    const displayLinks = () => {
        const mainNav = document.getElementById('menu')

        if (isMenuDisplayed)
            mainNav?.setAttribute('style', 'display: none;')
        else 
            mainNav?.setAttribute('style', 'display: block;')

        isMenuDisplayed = !isMenuDisplayed
    }

    return (
        <div id='TestNavBar' className='debug-border'>
            <NavBar>
                <MenuIcon id='navbar-toggle'>
                    <img src={ menuIcon } height={ size + 'px' }  width={ size + 'px' } 
                    onClick={ () => displayLinks() }
                    />
                </MenuIcon>
                <Logo href="#" className="logo">logo</Logo>
                <LinksList id="menu">
                    { renderLinks() }
                </LinksList>
            </NavBar>
        </div>
    )
}

// CSS
const NavBar = styled('nav', {
    fontSize: '18px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    backgroundImage: 'linear-gradient(260deg, #2376ae 0%, #c16ecf 100%)',
    fontFamily: '"Josefin Sans", sans-serif'
})

const LinksList = styled('ul', {
    listStyleType: 'none',
    margin: '15px auto',
    textAlign: 'center',
    display: 'none'
})

const Link = styled('a', {
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.7)'
})

const Logo = withStyle(Link, {
    display: 'inline-block',
    fontSize: '22px',
    marginTop: '10px',
    marginLeft: '20px'
})

const List = styled('li', {
    textAlign: 'center',
    margin: '15px auto'
})

const MenuIcon = styled('span', {
    position: 'absolute',
    top: '10px',
    right: '20px',
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.8)',
    fontSize: '24px'
})

// EXPORT
export default TestNavBar