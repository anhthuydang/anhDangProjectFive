import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import image from './logo.jpg';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
  render() {
    return (
        <header>
            <div className="wrapper">
                <nav>
                    <button>
                        <FontAwesomeIcon icon={faShoppingBag} />
                        <p>0</p>
                    </button>
                </nav>
                <div className="headerImage">
                    <img src={image} alt="Bakery Logo"/>
                </div>
                <h1>Life is short! Eat dessert first!</h1>
            </div>
        </header>
    )
    
  }
}


    


export default Header;

