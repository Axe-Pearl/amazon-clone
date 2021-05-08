import React from 'react';
import "./product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, imgurl, price }) {
    const [{ basket },dispatch]=useStateValue();
    console.log("this is the cart>>", basket);
    const addToBasket=()=>{
       dispatch({
         type:"ADD_TO_BASKET",
         item:{
             id:id,
             title:title,
             image:imgurl,
             price:price
         }
       });
    }
  return (
        <div className="product_container">
            <div className="product_content">
            <img alt="product" className="product_img" src={imgurl}></img>
            <h5>{title}</h5>
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <h6>₹{price}</h6>
            <button className="add_to_cart" onClick={addToBasket}>Add to Cart</button>
            </div>
        </div>
    )
}
export default Product;