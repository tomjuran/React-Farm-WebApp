import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
//import Footer from './Footer';
import Farmersmarket from './Farmersmarket';
//import Nav from './Pickyourown';
import Pumkinpatch from './Pumkinpatch';
import Tours from './Tours';
import Marketandbakery from './Marketandbakery';
import Associations from './Associations';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/Farmersmarket" component={Farmersmarket} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Pumkinpatch"  component={Pumkinpatch} />
    <Route path="/Tours"  component={Tours} />
    <Route path="/Associations"  component={Associations} />
    <Route path="/Marketandbakery"  component={Marketandbakery} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
