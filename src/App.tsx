import React from 'react';
import './App.css';
import NavBar from './components/NavBar'

const navigation= {
  brand: { name: 'Lynette Skin Studio', to: '/'},
  links: [
    { name: 'Products', to: '/products' }
  ]
}

const App: React.FC = () => {
  const { brand, links } = navigation

  return (
    <div className='App'>
      <NavBar brand={brand} links={links} />
    </div>
  );
}

export default App;
