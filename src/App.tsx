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
  const links: LinkValue[] = [
      { name: 'Home', path: '' },
      { name: 'About', path: '' },
      { name: 'Services', path: '' },
      { name: 'Products', path: '' },
      { name: 'Contact', path: '' }
  ]

  // Automate Rendering Links
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
                  <Link $style={{ color: 'white' }} href={ '#' + links[i].path }>{ links[i].name.toUpperCase() }</Link>
              </List>
          )
      
      return renderedLinks
  }

  const formattedHtmlLinks = renderLinks(links)

  return (
    <div className='App'>
      <Home renderLinks={ formattedHtmlLinks } />

      <NavBarScrolling links={ links } renderLinks={ formattedHtmlLinks } />
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

// const getLinkColor: string = ($type: boolean) => {
//   switch ($type) {
//     case true:
//       return LynetteBrown
//     default:
//       return '#FFFFFF'
//   }
// }

const Link = styled('a', {
  textDecoration: 'none', /* Takes off Underline in Links */
  color: LynetteBrown
})

export default App