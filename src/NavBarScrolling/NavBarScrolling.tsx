import React from 'react'
import './NavBarScrolling.css'

// Images
import menuIcon from '../images/menu.png'
import facebookIcon from '../images/Facebook_Graphic-01.png'
import yelpIcon from '../images/Yelp_Graphic-01.png'

// Tools Used
import { styled, withStyle } from 'styletron-react'

type LinkValue = {
    name: string;
    path: string;
    pixelsAdjustment: number;
}

interface NavBarScrollingProps {
    links: LinkValue[],
    scrollToPage(id: string, pixelsAdjustment: number): void
}

const NavBarScrolling: React.FC<NavBarScrollingProps> = props => {
    var isMenuDisplayed: boolean = false

    const displayLinks = (): void => {
        const menuLinks: HTMLElement | null = document.getElementById('mobile-links')
        const app: HTMLElement | null = document.querySelector('*')

        if (menuLinks && app) {
            if (!isMenuDisplayed) {
                menuLinks.className += ' show-navbar'
                app.style.overflowY = 'hidden'
            } else {
                menuLinks.className = 'mobile-navbar'
                app.style.overflowY = 'scroll'
            }
        }

        isMenuDisplayed = !isMenuDisplayed
    }

    const navigateToPage = (id: string, pixelsAdjustment: number): void => {
        // Hides Mobile Nav. Links when link is clicked
        if (isMenuDisplayed)
            displayLinks()
        props.scrollToPage(id, pixelsAdjustment)
    }

    const renderLinks = (): JSX.Element[] => {
        var renderedLinks = []
        const links: LinkValue[] = props.links

        for (let i = 0; i < links.length; i++) {
            const pageName: string = links[i].name
            const path: string = links[i].path
            const linkRef: string = '#' + path
            const pixelsAdjustment: number = links[i].pixelsAdjustment

            renderedLinks.push(
                <List key={ i }>
                    <Link   onClick={ () => navigateToPage(path, pixelsAdjustment) } 
                            className='is-mobile-view' 
                            href={ linkRef }>
                        { pageName.toUpperCase() }
                    </Link>
                </List>
            )
        }
        
        return renderedLinks
    }

    const showNavBar = (): void => {
        const top = 118
        const navBar = document.getElementById('NavBarScrolling')
        
        if (navBar) {
            if (document.body.scrollTop > top || document.documentElement.scrollTop > top) {
                navBar.style.top = '0px'
            } else {
                navBar.style.top = '-150px'
            }
        }
    }

    window.onscroll = function() { showNavBar() }

    const renderedLinks = renderLinks()
    const facebookLink = 'https://www.facebook.com/LynetteSkinStudio/'
    const yelpLink = 'https://www.yelp.com/biz/lynettes-skin-studio-marina'

    return (
        <div id='NavBarScrolling' className='debug-border'>
            <div id='navbarscrolling-title'>
                <h1 className='title-lynette lynette-brown'>LYNETTE'S</h1>
                <h1 className='title-skin-studio lynette-brown'>SKIN STUDIO</h1>
            </div>
            
            <ul id='navbarscrolling-links'>
                { renderedLinks }
            </ul>

            {/* Mobile Nav. Bar */}
            {/*     - Menu Icon */}
            <Menu onClick={ () => displayLinks() }>
                <MenuIcon src={ menuIcon } draggable='false' />
            </Menu>
            
            {/*     - Mobile Links */}
            <div id='mobile-links' className='mobile-navbar'>
                <MobileLinks>
                    { renderedLinks }
                    <SocialIconList>
                        <SocialIcons>
                            <a href={ facebookLink } target='_blank' rel='noopener noreferrer'>
                                <FacebookIcon src={ facebookIcon } />
                            </a>
                            <a href={ yelpLink } target='_blank' rel='noopener noreferrer'>
                                <YelpIcon src={ yelpIcon } />
                            </a>
                        </SocialIcons>
                    </SocialIconList>
                </MobileLinks>
            </div>
        </div>
    )
}

// CSS
const MobileLinks = styled('ul', {
    // Creates white space on the left and right of the mobile nav. bar
    paddingLeft: '4%',
    paddingRight: '4%',
    backgroundColor: 'white',

    // Ensures the entire page is white
    height: '100vh'
})

const Menu = styled('div', {
    /* Hide menu icon when expanded on computer */
    display: 'none',
    ':hover': {
        cursor: 'pointer'
    },
    '@media screen and (max-width: 800px)': {
        /* Show icon */
        display: 'block',

        /* Ensure icon does not occupy room from Title  */
        position: 'absolute',

        /* Position Menu Icon to the right of the screen */
        left: '86%',

        paddingRight: '2%',
        paddingTop: '33px',
        paddingBottom: '33px',
        paddingLeft: '2%',
    }
})

const MenuIcon = styled('img', {
    height: '21px',
    width: '21px',
    
    // Turn off Highlighting on menu icon
    // Allows the user to not select the "Menu" icon and open it in a new tab
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    pointerEvents: 'none'
})

const SocialIcons = styled('div', {
    paddingTop: '15px',
})

const iconSize = '45px'
const YelpIcon = styled('img', {
    height: iconSize,
    width: iconSize
})

const FacebookIcon = withStyle(YelpIcon, {
    marginRight: '10px',
})

const LynetteBrown = '#862e08'
const paddingTopBot = '15px'

const SocialIconList = styled('li', {
    listStyleType: 'none',  /* Takes off Bullet Points from List */
})

const List = styled('li', {
  listStyleType: 'none',  /* Takes off Bullet Points from List */
  padding: '0px',
  marginTop: '0px',
  marginLeft: '0px',
  marginRight: '0px',
  marginBottom: '0px',

  // To display Light Border below links FOR Mobile Links
  '@media screen and (max-width: 800px)': {
      borderBottom: '1px solid lightgrey',

      ':hover': {
        backgroundColor: 'lightgrey'
      },
  }
})

const Link = styled('a', {
  textDecoration: 'none', /* Takes off Underline in Links */
  color: LynetteBrown,
  paddingTop: paddingTopBot,
  paddingBottom: paddingTopBot,
  width: '100%',
  height: '100%',
})

export default NavBarScrolling