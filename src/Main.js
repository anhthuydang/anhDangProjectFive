import React, {Component} from 'react';
import firebase from './firebase';

import Bag from './Bag';
import BagButton from './BagButton';


class Main extends Component {
constructor() {
    super();
    this.state = {
      dbRef: firebase.database().ref(),
      bagRef: firebase.database().ref('userBag'),
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
    this.state.bagRef.on('value', (response) => {
    const newBag = [];
    const dataFromUserBag = response.val();

    for (let key in dataFromUserBag) {
      newBag.push({
        cake: dataFromUserBag[key],
        id: key,
        price: dataFromUserBag[key].price
      })
    }
    
    //Function to map out an array of prices then calculate total price (sum of the array)
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
  this.state.bagRef.push(chosenCake);
  
}
//remove cake from shopping bag
removeCake = (unwantedCakeId) => {
  this.state.bagRef.child(unwantedCakeId).remove();
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
                            Add To Cart
                            </button>
                        </li>
                    )
                })}
            </ul>

            <BagButton 
            handleShowBag={this.props.handleShowBag}
            userBag={this.state.userBag}  
            />

            {this.props.isBagShown ? 
            <Bag
            handleHideBag={this.props.handleHideBag} 
            userBag={this.state.userBag} 
            removeCake={this.removeCake}
            total={this.state.total} 
            /> : null }
          </div>
      </main>
    );
  }
}

export default Main;