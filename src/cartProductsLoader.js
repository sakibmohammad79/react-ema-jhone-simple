import { getShoppingCart } from "./utilities/fakedb";

const cartProductsLoader =async () =>{
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json()
    
    //if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();

    const savedCart = [];

    for(const id in storedCart){
        const addedProduct = products.find(pd=>pd.id==id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    // //when you need to send two things you should follow the step.
    // return [savedCart, products]
    // //another option
    // return {savedCart, productss}
    return savedCart;
}

export default cartProductsLoader;