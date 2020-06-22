import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


class BagButton extends Component {
  render() {
    const {handleShowBag, userBag} = this.props;
    return (
        <div className="bagButtonContainer">
            <button className="bagButton" onClick={handleShowBag}>
                <FontAwesomeIcon icon={faShoppingBag} />
                <p>{userBag.length}</p>
            </button>
        </div>
    );
  }
}
export default BagButton;