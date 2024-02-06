const initialState = {
    userCart: []
}

export const myReducer = ((state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            return {
                ...state,
                userCart: [...state.userCart, action.payload] ///paile state ke ander userCart me ...state.userCart lo phir usme action.payload add karo///
            }

        case "REMOVE_CLICKED_PRODUCT":
            const updatedCart = state.userCart.filter(item => item.id !== action.payload);  ///state me userCart me filter lagao item pe ke jis kisi item ki id not equal to hai id jo action.payload se aari un sab ko return state me update karo
            return {
                ...state,
                userCart: updatedCart
            };


        case "REMOVE_ALL_PRODUCT":
            return {
                ...state,
                userCart: action.payload
            }


        default: return state
    }
})


export default myReducer;