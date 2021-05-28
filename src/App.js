import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Shared/Footer/Footer';
function App() {
  return (
    <>
    <Router>
       <Header/>
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
