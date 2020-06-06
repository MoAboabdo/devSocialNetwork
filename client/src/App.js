import React from 'react';
import{BrowserRouter as Router,Route} from 'react-router-dom';

import './App.css';
import NavBar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/> 
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
