import React from 'react';
import {useStateValue} from "./StateProvider";
function Product(props) {
    const [{cart},dispatch]=useStateValue();
    console.log("this is the cart>>",cart);
    const addToBasket=()=>{
       dispatch({
         type:"ADD_TO_CART",
         item:{
             id:props.id,
             title:props.title,
             image:props.imgurl,
             price:props.price
         }
       });
    }
  return (
        <div className="product_container">
            <div className="product_content">
            <img alt="product" className="product_img" src={props.imgurl}></img>
            <h5>{props.title}</h5>
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <h6>{props.price}</h6>
            <h5>{props.aur}</h5>
            <button onClick={addToBasket}>Add to Cart</button>
            </div>
        </div>
    )
}
export default Product;