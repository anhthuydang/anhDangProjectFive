import React, {Component} from 'react';
import firebase from './firebase';

import Bag from './Bag';
import BagButton from './BagButton';


class Main extends Component {
constructor() {
    super();
    this.state = {
      dbRef: firebase.database().ref(),
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
}

//add items to shopping bag and calculate total price
handleAddToBag = (chosenCake) => {
  const updatedBag = [...this.state.userBag];
  updatedBag.push(chosenCake);

  //map out an array of current item prices to calculate sum
  const newTotal = updatedBag.map((item) => {
    return item.price;
  }).reduce((a,b) => a + b, 0);

  this.setState ({
    userBag: updatedBag,
    total: newTotal
  })
}

//remove cake from shopping bag and calculate total price again
removeCake = (cakeIndex) => {
  const updatedBag = [...this.state.userBag];
  //filter shopping bag array and only return remaining items (except the item was clicked)
  const filteredBag = updatedBag.filter((item,index) => {
    return (index !== cakeIndex);
  });

  //map out an array of current item prices to calculate sum
  const newTotal = filteredBag.map((item) => {
    return item.price;
  }).reduce((a,b) => a + b, 0);

  this.setState ({
    userBag: filteredBag,
    total: newTotal
  })
}

  render() {
    return (
      <main>
          <div className="wrapper">
            <ul className="storeCakes">
                {this.state.cakes.map(item => {
                    return (
                        <li key={item.cake.name}>
                            <img src={item.cake.image} alt={item.cake.name}/>
                            <p>{item.cake.name}</p>
                            <p>${item.cake.price}</p>
                            <button 
                            onClick={() => this.handleAddToBag(item.cake)}>
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
            
            {/* if isBagShown is true, show the Bag, if it's false, show nothing */}
            {this.props.isBagShown ? 
            <Bag
            handleHideBag={this.props.handleHideBag} 
            userBag={this.state.userBag} 
            removeCake={this.removeCake}
            recalculateTotal={this.recalculateTotal}
            total={this.state.total} 
            /> : null }
          </div>
      </main>
    );
  }
}

export default Main;