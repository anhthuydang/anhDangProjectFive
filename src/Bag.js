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
          {userBag.map((item, index) => {
            return (
              <li key={index} index={index}>
                    <img src={item.image} alt={item.name}/>
                    <div className="bagText">
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                    </div>
                    <button onClick={() => removeCake(index)} className="deleteButton">
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
              </li>
            )
          })}
        <p className="total">Total: ${total}</p>
        <button className="checkOutButton"><a href="https://www.facebook.com/desserts.corner96">Check Out</a></button>
        </ul>
      </div>
    );
  }
}
export default Bag;