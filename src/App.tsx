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
      { name: 'Product', path: 'Product' }
  ]

  // Automate Rendering Links
  const renderLinks = (links: LinkValue[]) => {
      var renderedLinks = []

      for (let i = 0; i < links.length; i++)
          renderedLinks.push(
              <li key={ i }>
                  <a href={ '#' + links[i].path }>{ links[i].name }</a>
              </li>
          )
      
      return renderedLinks
  }

  const htmlLinks = renderLinks(links)

  return (
    <div className='App'>
      <NavBar renderLinks={htmlLinks} />
      
      <div id='main'>
        <Home />
        <NavBarScrolling renderLinks={htmlLinks} />
        <Product />
      </div>
    </div>
  );
}

export default App;