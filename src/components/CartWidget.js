import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { React, useState } from 'react';
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function CartWidget(unit, onAdd) {
    
    
    const navigate = useNavigate();

    return (
        <div className="font-cart" >
            <FontAwesomeIcon icon={faCartShopping} onClick={() => navigate(`/cart`)} />
            <span className='cantProd'>5</span>
        </div>

    );
}

export default CartWidget