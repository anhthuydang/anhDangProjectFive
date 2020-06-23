import React, { Component } from 'react';

import image from './logo.jpg';


class Header extends Component {
  render() {
    return (
        <header>
            <div className="wrapper">
                <nav>
                </nav>
                <div className="headerImage">
                    <img src={image} alt="Bakery Logo"/>
                </div>
                <h1>Life is short!</h1>
                <h2>Eat dessert first!</h2>
            </div>
        </header>
    )
    
  }
}

export default Header;

