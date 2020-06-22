import React, { Component } from 'react';
import firebase from './firebase';


import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
