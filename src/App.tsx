import React from 'react'
import './App.css'
import Home  from './Home/Home'
import Product from './Product/Product'
import About from './About/About'
import NavBarScrolling from './NavBarScrolling/NavBarScrolling'
import { styled } from 'styletron-react'

type LinkValue = {
  name: string;
  path: string;
}

const App: React.FC = () => {
  // Links in Nav Bar
  const links: LinkValue[] = [
      { name: 'Home', path: '' },
      { name: 'About', path: 'about-stop' },
      { name: 'Services', path: 'Services' },
      { name: 'Products', path: 'Product' },
      { name: 'Contact', path: 'Contact' }
  ]

  const scrollToAbout = (): void => {
    const aboutDiv = document.getElementById('lynette-photo')
    if (aboutDiv) {
        const top = aboutDiv.getBoundingClientRect().top + window.pageYOffset - 110
        window.scrollTo({
            top,
            behavior: 'smooth'
        })
    }
  }

  // Automate Rendering Links
  const renderLinks = () => {
      var renderedLinks = []

      renderedLinks.push(
        <List key={ 0 }>
            <Link href={ '#' + links[0].path }>{ links[0].name.toUpperCase() }</Link>
        </List>
      )

      // On Home Page, show every link except the "Contact Us"
      // because we made a button to handle that link
      for (let i = 1; i < links.length - 1; i++)
          renderedLinks.push(
              <List key={ i }>
                  <Link onClick={ () => scrollToAbout() } $style={{ color: 'white' }} href={ '#' + links[i].path }>{ links[i].name.toUpperCase() }</Link>
                  {/* <Link href={ '#' + links[i].path }>{ links[i].name.toUpperCase() }</Link> */}
              </List>
          )
      
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