import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import Home  from './Home/Home'
import Product from './Product/Product';

const App: React.FC = () => {
  return (
    <div className='App'>
      <NavBar />
      
      <div id='main'>
        <Home />
        <Product />
      </div>
    </div>
  );
}

export default App;