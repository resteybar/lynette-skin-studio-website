import React from 'react'
import './App.css'

// Components
import Home  from './Home/Home'
import Product from './Products/Products'
import About from './About/About'
import NavBarScrolling from './NavBarScrolling/NavBarScrolling'

// Tools Used
import { styled } from 'styletron-react'
import { isBrowser, isMobile } from 'react-device-detect'

type LinkValue = {
  name: string;
  path: string;
  mobileAdjustment: number;
  browserAdjustment: number;
}

const App: React.FC = () => {
  // Links in Nav Bar
  const links: LinkValue[] = [
      { name: 'Home', path: '', mobileAdjustment: 0, browserAdjustment: 0 },
      { name: 'About', path: 'lynette-photo', mobileAdjustment: 140, browserAdjustment: 0 },
      { name: 'Services', path: 'Services', mobileAdjustment: 0, browserAdjustment: 0 },
      { name: 'Products', path: 'Products', mobileAdjustment: 0, browserAdjustment: 0 },
      { name: 'Contact', path: 'Contact', mobileAdjustment: 0, browserAdjustment: 0 },
  ]

  const scrollToPage = (id: string, mobileAdjustment: number, browserAdjustment: number): void => {
    const aboutDiv = document.getElementById(id)
    if (aboutDiv) {
        var top = aboutDiv.getBoundingClientRect().top + window.pageYOffset

        // When on Mobile, scroll down to have the content just below the 
        // mobile nav. bar
        if (isMobile)
          top += mobileAdjustment
        else if (isBrowser)
          top += browserAdjustment

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
        scrollToPage={ scrollToPage }/>
      <About />
      <Product />
    </div>
  )
}

export default App