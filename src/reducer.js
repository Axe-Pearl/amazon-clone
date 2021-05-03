export const initialState={
    cart: [],
};

const reducer = (state,action) =>{
    //console.log("action",action);
    console.log("cart==",...state.cart,action.item);
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                cart: [...state.cart, action.item],
            };
            default:
                return state;
    }
};

export default reducer;