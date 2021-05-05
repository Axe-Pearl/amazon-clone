import React from "react";
import {useStateValue} from "./StateProvider";
import "./checkout.css";
function Cart_checker(){
  // eslint-disable-next-line
  const [{basket},dispatch]=useStateValue();
  if(basket.length===0){
    return(
    <div>
     <h1 className="cart_info">Your Amazon Cart is empty.</h1>
     <p className="cart_empty_info">Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
      Continue shopping on the Amazon.com homepage,
       learn about today's deals, or visit your Wish List.
    </p>
    </div>
    )
  }
  else{
    return (
      <div>
        <h1>Shopping Cart</h1>
        <h6 className="price_head">Price</h6>
        <div className="seperator"></div>
     </div>
    );
  }
}
function Ybasket(items){
  // eslint-disable-next-line
  const [{basket},dispatch]=useStateValue();
  const removeFromBasket=()=>{
        dispatch({
           type:"REMOVE_FROM_BASKET",
           item:{
            id:items.id,
            title:items.title,
            image:items.image,
            price:items.price
           }
        });
   }
  return(
    <div>
     <div className="added_items">
         <div className="imageitems">
          <img src={items.image} alt="cart_item"></img>
         </div>
         <div className="title">
           <h6>{items.title}</h6>
         </div>
         <div className="price">
           <h6>{items.price}</h6>
         </div>
       </div>
       <div className="remove_cart">
           <button onClick={removeFromBasket}>Remove from Cart</button>
       </div>
         <div className="seperator"></div>
     </div>
  );
}
function Checkout(){
  // eslint-disable-next-line
    const [{basket},dispatch]=useStateValue();
  return(
      <div className="background">
        <div className="shopping_cart">
         {Cart_checker()}
         {basket.map(Ybasket)}
        </div>
        </div>  
  );
}

export default Checkout;