import React from 'react';
import './App.css';
import NavBar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';



function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Landing />
      <Footer/>
    </div>
  );
}

export default App;
