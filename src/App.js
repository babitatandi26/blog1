import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './container/Home';
import ContactUs from "./container/ContactUs";
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Post from './container/post';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Header/>
      <Hero/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={ContactUs}/>
      <Route exact path="/post" component={Post}/>
    </div>
    </Router>
    </>
  );
}

export default App;
