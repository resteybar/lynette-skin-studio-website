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

  const scrollToPage = (id: string, pixelsAdjustment: number): void => {
    const aboutDiv = document.getElementById(id)
    if (aboutDiv) {
        var top = aboutDiv.getBoundingClientRect().top + window.pageYOffset

        // When on Mobile, scroll down to have the content just below the 
        // mobile nav. bar
        if (isMobile)
          top += pixelsAdjustment

        window.scrollTo({ top })
    }
  }

  return (
    <div className='App'>
      <NavBarScrolling 
        links={ links } 
        scrollToPage={ scrollToPage } />
      <Home 
        links={ links } 
        scrollToPage={ scrollToPage } />
      <About />
      <Product />
    </div>
  )
}

export default App