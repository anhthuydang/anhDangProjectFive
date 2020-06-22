import React, {Component} from 'react';
import firebase from './firebase';


class Bag extends Component {
    constructor() {
        super();
        
    }
  render() {
    return (
      <div className="bag">
          <p>You have 0 items in your bags</p>
      </div>
    );
  }
}
export default Bag;