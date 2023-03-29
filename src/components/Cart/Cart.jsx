import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    
    //console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (totalPrice*7)/100;
    const grandTotal = totalPrice + tax + totalShipping;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;