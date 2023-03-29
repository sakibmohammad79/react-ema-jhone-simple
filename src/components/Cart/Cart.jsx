import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    
    //console.log(cart);
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity == 0){
        //     product.quantity = 1;
        //  }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = (totalPrice*7)/100;
    const grandTotal = totalPrice + tax + totalShipping;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;