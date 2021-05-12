export const initialState={
    basket: [],
    user:null
};

const reducer = (state,action) =>{
    console.log("action",action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const target=action.item;
            //  console.log("action2",target.id);
            const index = state.basket.findIndex(
            (basketItem) => {return(
                basketItem.id === target.id
            )}
            );
            console.log("indexo=",index);
            let newBasket = [...state.basket];
            if(index >=0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `cant remove product (id: ${action.id}) as it is not in the cart`
                )
            }
            return{
                ...state,
                basket:newBasket
            }
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        default:
            return state;
    }
};

export default reducer;