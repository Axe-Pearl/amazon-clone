import React from 'react';
import "./bsket.css";
import {useStateValue} from "./StateProvider";
function Bsket(id,title,price,image) {
    // eslint-disable-next-line
    const [{basket,user},dispatch]=useStateValue();
   const removeFromBasket=()=>{
         dispatch({
            type:"REMOVE_FROM_BASKET",
            item:{
             id:id,
             title:title,
             image:image,
             price:price
            }
         });
    }
    return (
     <div>
    <div className="added_items">
          <div className="imageitems">
           <img src={image} alt="cart_item"></img>
          </div>
          <div className="title">
            <h6>{title}</h6>
          </div>
          <div className="price">
            <h6>₹{price}</h6>
          </div>
        </div>
        <div className="remove_cart">
            <button className="remove_from_cart" onClick={removeFromBasket}>Remove from Cart</button>
        </div>
          <div className="seperator"></div>
      </div>
    )
}

export default Bsket;
