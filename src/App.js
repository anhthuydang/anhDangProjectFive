import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isBagShown: false,
      
    }
  }
  
  handleShowBag = () => {
    let showBag = true;
    this.setState ({
      isBagShown: showBag,
    })
  }

  handleHideBag = () => {
    let hideBag = false;
    this.setState ({
      isBagShown: hideBag,
    })
  }

  render() {
    return (
      <>
        <Header 
        handleShowBag={this.handleShowBag}
         />
        <Main 
        isBagShown={this.state.isBagShown}
        handleHideBag={this.handleHideBag}/>
        <Footer />
      </>
    );
  }
}

export default App;
