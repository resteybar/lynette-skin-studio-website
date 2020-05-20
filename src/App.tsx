import React from 'react'
import './App.css'

// Components
import Home  from './Home/Home'
import Product from './Products/Products'
import About from './About/About'
import NavBarScrolling from './NavBarScrolling/NavBarScrolling'
import Services from './Services/Services'
import Contact from './Contact/Contact'

// Tools Used
import { isBrowser, isMobile } from 'react-device-detect'
import { styled } from 'styletron-react'

type LinkValue = {
  name: string;
  path: string;
  mobileAdjustment: number;
  browserAdjustment: number;
}

const App: React.FC = () => {
  // Links in Nav Bar
  // Mobile & Browser adjustments measured in px.
  const links: LinkValue[] = [
      { name: 'Home', path: 'Home', mobileAdjustment: 0, browserAdjustment: 0 },
      { name: 'About', path: 'lynette-photo', mobileAdjustment: -100, browserAdjustment: -180 },
      { name: 'Services', path: 'Services', mobileAdjustment: -70, browserAdjustment: -70 },
      { name: 'Products', path: 'Products', mobileAdjustment: -40, browserAdjustment: -40 },
      { name: 'Contact', path: 'Contact', mobileAdjustment: -60, browserAdjustment: -60 },
  ]

  const scrollToPage = (id: string, mobileAdjustment: number, browserAdjustment: number): void => {
    const element = document.getElementById(id)
    if (element) {
        var top = element.getBoundingClientRect().top + window.pageYOffset

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
    <Main className='App'>
      <NavBarScrolling 
        links={ links } 
        scrollToPage={ scrollToPage } />
      <Home 
        links={ links } 
        scrollToPage={ scrollToPage }/>
      <About />
      <Services/>
      <Product />
      <Contact />
    </Main>
  )
}

const Main = styled('div', {
  backgroundColor: '#f4f2f5',
})

export default App