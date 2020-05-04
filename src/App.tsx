import React from 'react'
import './App.css'

// Components
import Home  from './Home/Home'
import Product from './Products/Products'
import About from './About/About'
import NavBarScrolling from './NavBarScrolling/NavBarScrolling'

// Tools Used
import { styled } from 'styletron-react'
import { isMobile } from 'react-device-detect'

type LinkValue = {
  name: string;
  pixelsAdjustment: number;
}

const App: React.FC = () => {
  // Links in Nav Bar
  const links: LinkValue[] = [
      { name: 'Home', pixelsAdjustment: 0 },
      { name: 'About', pixelsAdjustment: 140 },
      { name: 'Services', pixelsAdjustment: 0 },
      { name: 'Products', pixelsAdjustment: 0 },
      { name: 'Contact', pixelsAdjustment: 0 }
  ]

  const scrollToAbout = (id: string, pixelsAdjustment: number): void => {
    const aboutDiv = document.getElementById(id)
    if (aboutDiv) {
        var top = aboutDiv.getBoundingClientRect().top + window.pageYOffset

        if (isMobile) {
          console.log("On Mobile!")
        } else {
          console.log("NOT ON MOBILE")
        }

        // When on Mobile, scroll down to have the content just below the 
        // mobile nav. bar
        if (isMobile)
          top += pixelsAdjustment

        window.scrollTo({ top })
    }
  }

  // Automate Rendering Links
  const renderLinks = () => {
      var renderedLinks = []

      renderedLinks.push(
        <List key={ 0 }>
            <Link href='#'>{ links[0].name.toUpperCase() }</Link>
        </List>
      )

      // On Home Page, show every link except the "Contact Us"
      // because we made a button to handle that link
      for (let i = 1; i < links.length - 1; i++) {
        const pageName = links[i].name
        const linkRef = '#' + pageName
        const pixelsAdjustment = links[i].pixelsAdjustment

        renderedLinks.push(
            <List key={ i }>
                <Link onClick={ () => scrollToAbout(pageName, pixelsAdjustment) } 
                      $style={{ color: 'white' }} 
                      href={ linkRef }>
                  { pageName.toUpperCase() }
                </Link>
            </List>
        )
      }
      
      return renderedLinks
  }

  const formattedHtmlLinks = renderLinks()

  return (
    <div className='App'>
      <NavBarScrolling links={ links } renderLinks={ formattedHtmlLinks } />
      <Home renderLinks={ formattedHtmlLinks } />
      <About />
      <Product />
    </div>
  )
}

// CSS        
const LynetteBrown = '#862e08'

export const List = styled('li', {
  listStyleType: 'none',  /* Takes off Bullet Points from List */
})

export const Link = styled('a', {
  textDecoration: 'none', /* Takes off Underline in Links */
  color: LynetteBrown,
  letterSpacing: '0.1em',
})

export default App