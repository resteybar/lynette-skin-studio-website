import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import Home  from './Home/Home'
import Product from './Product/Product';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Product />
    </div>
  );
}

export default App;