// add to cart's action
export const addToCart = (product) => ({
    type: "ADD_PRODUCT_TO_CART",
    payload: product
})


// remove clicked product from cart
export const removeClickedProduct = (id) => ({
    type: "REMOVE_CLICKED_PRODUCT",
    payload: id
})


//remove all product from cart
export const removeAllProduct=(products)=>({
    type:"REMOVE_ALL_PRODUCT",
    payload:products
})
