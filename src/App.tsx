import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;