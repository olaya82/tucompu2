import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
        <div className="font" >
            <FontAwesomeIcon icon={faCartShopping} />
            <span className='cantProd'>5</span>
        </div>

    );
}

export default CartWidget