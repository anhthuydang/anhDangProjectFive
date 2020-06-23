import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';



class Bag extends Component {
  render() {
    const {handleHideBag, userBag, removeCake, total} = this.props;
    return (
      <div className="userCakes">
        <button className="goBackButton" onClick={handleHideBag}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <p>You have {userBag.length} items in your bag</p>
        <ul>
          {userBag.map(item => {
            return (
              <li key={item.id}>
                    <img src={item.cake.image} alt={item.cake.name}/>
                    <div className="bagText">
                      <p>{item.cake.name}</p>
                      <p>${item.cake.price}</p>
                    </div>
                    <button onClick={() => removeCake(item.id)} className="deleteButton">
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
              </li>
            )
          })}
        <p>Total: ${total}</p>
        <button className="checkOutButton"><a href="https://www.facebook.com/desserts.corner96">Check Out</a></button>
        </ul>
      </div>
    );
  }
}
export default Bag;