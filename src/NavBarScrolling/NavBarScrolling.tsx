import React from 'react'
import './NavBarScrolling.css'

// Images
import menuIcon from '../images/menu.png'
import facebookIcon from '../images/Facebook_Graphic-01.png'
import yelpIcon from '../images/Yelp_Graphic-01.png'

// Tools Used
import { styled, withStyle } from 'styletron-react'

// TO DO:
//  1. Highlight box that surrounds the link: on hover
//  2. Highlight Name of Link to indicate which page the user is on

type LinkValue = {
    name: string;
    path: string;
    mobileAdjustment: number;
    browserAdjustment: number;
}

interface NavBarScrollingProps {
    links: LinkValue[],
    scrollToPage(id: string, mobileAdjustment: number, browserAdjustment: number): void
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

    const navigateToPage = (id: string, mobileAdjustment: number, browserAdjustment: number): void => {
        // Hides Mobile Nav. Links when link is clicked
        if (isMenuDisplayed)
            displayLinks()
        props.scrollToPage(id, mobileAdjustment, browserAdjustment)
    }

    const renderLinks = (): JSX.Element[] => {
        var renderedLinks = []
        const links: LinkValue[] = props.links

        for (let i = 0; i < links.length; i++) {
            const pageName: string = links[i].name
            const path: string = links[i].path
            const mobileAdjustment: number = links[i].mobileAdjustment
            const browserAdjustment: number = links[i].browserAdjustment

            renderedLinks.push(
                <List key={ i }>
                    <Link onClick={ () => navigateToPage(path, mobileAdjustment, browserAdjustment) } 
                            className='is-mobile-view'>
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

        // indicatePageOn()
    }

    var pageEntryBorders: number[]

    const indicatePageOn = (): void => {
        // Gets distance from the top of the website to each page (in px.)
        if (!pageEntryBorders) {
            pageEntryBorders = getPageBorders()
            console.log('INIT Page Entry Borders')
        }

        console.log(pageEntryBorders)

        if (pageEntryBorders) {
            const user: number = window.pageYOffset
            console.log('Current: ', window.pageYOffset)

            // Locate which page the user is on
            // for (let i = 0; i < pageEntryBorders.length - 1; i++) {
            //     const currentPage: number = pageEntryBorders[i]
            //     const nextPage: number = pageEntryBorders[i + 1]

            //     if (user >= currentPage && user <= nextPage) {
            //         return 
            //     }
            // }
        }
    }

    const getPageBorders = (): number[] => {
        const links: LinkValue[] = props.links
        var pageEntryBorders: number[] = []
    
        for (let i = 0; i < links.length; i++) {
            const pageName: string = links[i].name
            const element = document.getElementById(pageName)
            
            if (element) {
                var topOfPage = element.getBoundingClientRect().top + window.pageYOffset
                
                pageEntryBorders.push(topOfPage)
            }
        }
    
        return pageEntryBorders
      }

    // Used for Logo link when Mobile links are displayed and it needs to close
    // NOT used when Mobile links are closed.
    const logoLink = (): void => {
        if (isMenuDisplayed)
            displayLinks()
        navigateToPage('Home', 0, 0)
    }

    window.onscroll = function() { showNavBar() }
    
    const renderedLinks = renderLinks()
    const facebookLink = 'https://www.facebook.com/LynetteSkinStudio/'
    const yelpLink = 'https://www.yelp.com/biz/lynettes-skin-studio-marina'

    return (
        <div id='NavBarScrolling'>
            <HomeLink id='navbarscrolling-title' onClick={ () => logoLink() }>
                <TitleStyle className='title-lynette lynette-brown'>LYNETTE'S</TitleStyle>
                <TitleStyle className='title-skin-studio lynette-brown'>SKIN STUDIO</TitleStyle>
            </HomeLink>
            
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
const LynetteBrown = '#862e08'

const TitleStyle = styled('h1', {
    fontFamily: 'Shree Reg',
    color: LynetteBrown
})
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
  '@media screen and (min-width: 801px)': {
    paddingBottom: '10px',
    ':hover': {
        borderBottom: '2px solid ' + LynetteBrown
    },
  },

  // To display Light Border below links FOR Mobile Links
  '@media screen and (max-width: 800px)': {
      borderBottom: '1px solid lightgrey',

      ':hover': {
        backgroundColor: 'lightgrey',
        borderBottom: '1px solid ' + LynetteBrown
      },
  }
})

const Link = styled('span', {
    color: LynetteBrown,
    paddingTop: paddingTopBot,
    paddingBottom: paddingTopBot,
    width: '100%',
    height: '100%',
  
  ':hover': {
      cursor: 'pointer',
    },
})

const HomeLink = styled('div', {
    ':hover': {
        cursor: 'pointer'
    }
})

export default NavBarScrolling