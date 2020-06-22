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
    //--------------
    this.state.cartRef.on('value', (response) => {
    const newBag = [];
    const dataFromUserBag = response.val();
    // console.log(dataFromUserBag);
    for (let key in dataFromUserBag) {
      newBag.push({
        cake: dataFromUserBag[key],
        id: key,
        price: dataFromUserBag[key].price
      })
    }

    const newTotal = newBag.map(value => {
      return value.price;
    })
    console.log(newTotal);
    this.setState ({
      userBag: newBag,
       
    })
    // console.log(newBag);
  })
}
//--------------
handleClick = (chosenCake, chosenCakeId, cakePrice) => {
  this.state.cartRef.push(chosenCake);
  
}
//--------------
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
                            onClick={() => this.handleClick(item.cake, item.id, item.cake.price)}>
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
                <p>Total: {this.state.total}</p>
                </ul>
            </div>
          </div>
      </main>
    );
  }
}

export default Main;