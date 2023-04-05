import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();

    const [cart, setCart] =useState(savedCart)

    const handleRemoveFromCart = (id) =>{
        const remainingCart = cart.filter(product => product.id !==id);
        setCart(remainingCart);
        removeFromDb(id);
    }

    const handleClearCart =() =>{
        setCart([]);
        deleteShoppingCart();
    }
    //console.log(savedCart);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map((product) => <ReviewItem
                    key={product.id}
                    handleRemoveFromCart={handleRemoveFromCart}
                    product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className='card-container'>
                <Cart cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link to="/checkout" className='proceed-link'><button className='btn-proceed'>Proceed Checkout</button></Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Order;