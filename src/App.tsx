import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import Home  from './Home/Home'
import Product from './Product/Product'
import NavBarScrolling from './NavBarScrolling/NavBarScrolling'

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
              <li className='remove-list-bullets inline-list' key={ i }>
                  <a className='remove-ul-link lynette-brown' href={ '#' + links[i].path }>{ links[i].name.toUpperCase() }</a>
              </li>
          )
      
      return renderedLinks
  }

  const htmlLinks = renderLinks(links)

  return (
    <div className='App'>
      <NavBar renderLinks={htmlLinks} />
      <NavBarScrolling renderLinks={htmlLinks} />

      <Home />
      <Product />
    </div>
  );
}

export default App;