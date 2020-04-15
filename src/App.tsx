import React from 'react'
import './App.css'
import Home  from './Home/Home'
import Product from './Product/Product'
import NavBarScrolling from './NavBarScrolling/NavBarScrolling'
import TestNavBar from './TestNavBar/TestNavBar'
import { styled } from 'styletron-react'

type LinkValue = {
  name: string;
  path: string;
}

const App: React.FC = () => {
  // Links in Nav Bar
  const links = [
      { name: 'Home', path: '' },
      { name: 'About', path: '' },
      { name: 'Services', path: '' },
      { name: 'Products', path: '' },
      { name: 'Contact', path: '' }
  ]

  // Automate Rendering Links
  const renderLinks = (links: LinkValue[]) => {
      var renderedLinks = []

      for (let i = 0; i < links.length; i++)
          renderedLinks.push(
              <List key={ i }>
                  <Link href={ '#' + links[i].path }>{ links[i].name.toUpperCase() }</Link>
              </List>
          )
      
      return renderedLinks
  }

  const htmlLinks = renderLinks(links)
  
  return (
    <div className='App'>
      <Home renderLinks={htmlLinks} />

      <NavBarScrolling renderLinks={htmlLinks} />
      {/* <Product /> */}
      {/* <TestNavBar /> */}
    </div>
  )
}

// CSS
const LynetteBrown = '#862e08'

const List = styled('li', {
  listStyleType: 'none',  /* Takes off Bullet Points from List */
})

const Link = styled('a', {
  textDecoration: 'none', /* Takes off Underline in Links */
  color: LynetteBrown
})

export default App