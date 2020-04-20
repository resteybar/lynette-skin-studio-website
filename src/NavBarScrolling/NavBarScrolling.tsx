import React from 'react'
import './NavBarScrolling.css'
import menuIcon from '../images/menu.png'
import { styled, withStyle } from 'styletron-react'

type LinkValue = {
    name: string;
    path: string;
  }

interface NavBarScrollingProps {
    links: LinkValue[],
    renderLinks: JSX.Element[]
}

const NavBarScrolling: React.FC<NavBarScrollingProps> = props => {
    var isMenuDisplayed: boolean = false

    const displayLinks = () => {
        const menuLinks = document.getElementById('menu-links-2')
        
        if (isMenuDisplayed)
            menuLinks?.setAttribute('style', 'display: none;')
        else 
            menuLinks?.setAttribute('style', 'display: block;')

        isMenuDisplayed = !isMenuDisplayed
    }

    const renderLinks = (links: LinkValue[]) => {
        var renderedLinks = []
  
        renderedLinks.push(
          <List key={ 0 }>
              <Link href={ '#' + links[0].path }>{ links[0].name.toUpperCase() }</Link>
          </List>
        )
  
        for (let i = 1; i < links.length; i++)
            renderedLinks.push(
                <List key={ i }>
                    <Link href={ '#' + links[i].path }>{ links[i].name.toUpperCase() }</Link>
                </List>
            )
        
        return renderedLinks
    }

    const renderedLinks = renderLinks(props.links)

    return (
        <div id='NavBarScrolling' className='debug-border'>
            <div id='navbarscrolling-title'>
                <h1 className='title-lynette lynette-brown'>LYNETTE'S</h1>
                <h1 className='title-skin-studio lynette-brown'>SKIN STUDIO</h1>
            </div>
            <ul id='navbarscrolling-links'>
                { renderedLinks }
            </ul>
            <div id='menu' className='debug-border' onClick={ () => displayLinks() }>
                <MenuIcon src={ menuIcon }/>
            </div>
            
            <CondensedLinksList id='menu-links-2'>
                <CondensedLinks id='menu-link-2'>
                    { renderedLinks }
                </CondensedLinks>
            </CondensedLinksList>
        </div>
    )
}

// CSS
const CondensedLinks = styled('ul', {
    // Creates white space on the left and right of the condensed nav. bar
    marginLeft: '5%',
    marginRight: '5%'
})

const CondensedLinksList = styled('div', {
    display: 'none',
    position: 'absolute',
    top: '72px',
    right: '0px',
    backgroundColor: 'white',
    width: '100%',
    height: '92%',
    boxShadow: '0px 10px 5px -5px lightgrey',
    // border: '1px solid black',
})

const MenuIcon = styled('img', {
    height: '21px',
    width: '21px',
    
    // Turn off Highlighting menu icon
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none'
})

const LynetteBrown = '#862e08'
const paddingTopBot = '15px'

export const List = styled('li', {
  listStyleType: 'none',  /* Takes off Bullet Points from List */
  padding: '0px',
  paddingTop: paddingTopBot,
  paddingBottom: paddingTopBot,
  marginTop: '0px',
  marginLeft: '0px',
  marginRight: '0px',
  marginBottom: '0px',

  // To display Light Border below links FOR Condensed/Collapsed Links
  '@media screen and (max-width: 800px)': {
      borderBottom: '1px solid lightgrey'
  }
})

export const Link = styled('a', {
  textDecoration: 'none', /* Takes off Underline in Links */
  color: LynetteBrown,
})

export default NavBarScrolling