import React, {Component} from 'react';
import firebase from './firebase';

import Bag from './Bag';
import BagButton from './BagButton';

class Main extends Component {
constructor() {
    super();
    this.state = {
      dbRef: firebase.database().ref(),
      inventory: [],
      userBag: [],
      total: 0,
    }
  }

// display all items on the page
displayAll = () => {
  this.state.dbRef.on('value', (response) => {
    const allItems = [];
    const data = response.val();
    //loop through types of items
    for (let type in data) {
      //loop through every item of each type and add items to array
      for (let key in data[type]) {
        allItems.push({
            product: data[type][key],
            id: key,
        })
      }
    } 
    //set state of inventory to show all items
    this.setState({
        inventory: allItems,
    })
  })
}

//render items on the page at default
componentDidMount() {
  this.displayAll();
}

//function to display breads only
displayBreads = () => {
  this.state.dbRef.on('value', (response) => {
    const breads = [];
    const data = response.val();
    //loop through each item in bread category and add those breads to an array
    for (let key in data.bread) {
          breads.push({
              product: data.bread[key],
              id: key,
          })
      }
    //set state of inventory to show only breads
    this.setState({
      inventory: breads,
    })
    
  })
}

//function to display cakes only
displayCakes = () => {
  this.state.dbRef.on('value', (response) => {
    const cakecake = [];
    const data = response.val();
    //loop through each item in cake category and add those cakes to an array
    for (let key in data.cake) {
          cakecake.push({
              product: data.cake[key],
              id: key,
          })
      }
    //set state of inventory to show only cakes
    this.setState({
      inventory: cakecake,
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

//remove product from shopping bag and calculate total price again
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
            <ul className="category">
              <li><button onClick={this.displayAll}>All <span role="img" aria-label="all">👩🏻‍🍳</span></button></li>
              <li><button onClick={this.displayBreads}>Bread <span role="img" aria-label="bread">🍞</span></button></li>
              <li><button onClick={this.displayCakes}>Cake <span role="img" aria-label="cake">🍰</span></button></li>
            </ul>
            {/* <h3>UNDER CONSTRUCTION (adding more features)</h3> */}
            <ul className="storeCakes">
                {this.state.inventory.map(item => {
                    return (
                        <li key={item.product.name}>
                            <img src={item.product.image} alt={item.product.name}/>
                            <p>{item.product.name}</p>
                            <p>${item.product.price}</p>
                            <button 
                            onClick={() => this.handleAddToBag(item.product)}>
                            Add
                            </button>
                        </li>
                    )
                })}
            </ul>

            <BagButton 
            handleShowBag={this.props.handleShowBag}
            userBag={this.state.userBag}  
            />
            
            {/* if isBagShown is true, show the Bag, if false, show nothing */}
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