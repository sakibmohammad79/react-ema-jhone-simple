import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then((res)=> res.json())
        .then((data)=> setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const saveCart = [];
        //step1: get id
        for(const id in storedCart){
            //step2: get the product by using id
            const addedProduct = products.find((product) => product.id === id);
            //console.log(addedProduct);
            if(addedProduct){
            //step3: add quantity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            //step4: add the addedProduct to the saved cart
            saveCart.push(addedProduct);
            }
        }
        //step 5: set the cart
        setCart(saveCart);
    },[products])

    const handleAddToCart = (product) =>{
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists]
        }
        // const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    //console.log(cart);

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map((product) => <Product
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;