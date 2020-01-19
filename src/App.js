import React from 'react';
import './App.css';
import SideNav from "./Components/SideNav/SideNav.js"
import Routes from './routes.js'

function App() {
  return (
    <div className="App">
      <SideNav/>
      <Routes/>
      
    </div>
  );
}

export default App;
