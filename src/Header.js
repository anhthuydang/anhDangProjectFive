import React, { Component } from 'react';
import firebase from './firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import image from './logo.jpg';


class Header extends Component {
constructor() {
    super();
    this.state = {
        items: 0
    }
}

componentDidMount() {
    this.state.bagRef.on('value', (response) => {
        const newBag = [];
        const dataFromUserBag = response.val();
       
          const number = Object.keys(dataFromUserBag).length;
          console.log(number);
    }
}
  render() {
      const {handleShowBag} = this.props;
    return (
        <header>
            <div className="wrapper">
                <nav>
                    <button onClick={handleShowBag}>
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

