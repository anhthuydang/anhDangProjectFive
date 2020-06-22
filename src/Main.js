import React, {Component} from 'react';
import firebase from './firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Bag from './Bag';


class Main extends Component {
constructor() {
    super();
    this.state = {
      dbRef: firebase.database().ref(),
      cartRef: firebase.database().ref('userCart'),
      cakes: [],
      userBag: [],
      total: 0,
    }
  }
componentDidMount() {
  //set state to display cakes on the page
    this.state.dbRef.on('value', (response) => {
        const newState = [];
        const data = response.val();
        for (let key in data.store) {
            newState.push({
                cake: data.store[key],
                id: key,
            })
        }
        this.setState({
            cakes: newState,
        })
    })
    //set state to display cakes in user's shopping bag
    this.state.cartRef.on('value', (response) => {
    const newBag = [];
    const dataFromUserBag = response.val();

    for (let key in dataFromUserBag) {
      newBag.push({
        cake: dataFromUserBag[key],
        id: key,
        price: dataFromUserBag[key].price
      })
    }
    
    //Function to map out an array of prices then calculate total price
    const newTotal = newBag.map(value => {
      return value.price;
    }).reduce((a,b) => a + b, 0);

    this.setState ({
      userBag: newBag,
      total: newTotal,
    
    })
  })
}
//send data of chosen cakes to store in firebase (users)
handleAddToBag = (chosenCake) => {
  this.state.cartRef.push(chosenCake);
  
}
//remove cake from shopping bag
removeCake = (unwantedCakeId) => {
  this.state.cartRef.child(unwantedCakeId).remove();
}

//--------------
  render() {
    return (
      <main>
          <div className="wrapper">
            <ul className="storeCakes">
                {this.state.cakes.map(item => {
                    return (
                        <li key={item.id}>
                            <img src={item.cake.image} alt={item.cake.name}/>
                            <p>{item.cake.name}</p>
                            <p>${item.cake.price}</p>
                            <button 
                            onClick={() => this.handleAddToBag(item.cake, item.id)}>
                            Add to Cart
                            </button>
                        </li>
                    )
                })}
            </ul>
            {/* <Bag /> */}
            <div className="userCakes">
                <p>You have {this.state.userBag.length} items in your bags</p>
                <ul>
                  {this.state.userBag.map(item => {
                    return (
                      <li key={item.id}>
                            <img src={item.cake.image} alt={item.cake.name}/>
                            <div className="bagText">
                              <p>{item.cake.name}</p>
                              <p>${item.cake.price}</p>
                            </div>
                            <button onClick={() => this.removeCake(item.id)} className="deleteButton">
                                <FontAwesomeIcon icon={faTimesCircle} />
                            </button>
                      </li>
                    )
                  })}
                <p>Total: ${this.state.total}</p>
                </ul>
            </div>
          </div>
      </main>
    );
  }
}

export default Main;