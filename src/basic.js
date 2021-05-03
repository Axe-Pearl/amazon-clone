import React from 'react';
import "./basic.css";
import products from "./productdetails";
import Product from "./product";
function insert(terms){
  return(
     <Product id={terms.id} imgurl={terms.imgurl} title={terms.title} price={terms.price}/>
  )
}
function Basic() {
    return (
        <div className="amazon_basics">
        <div>{products.map(insert)}</div>
        </div>
        

    );
}

export default Basic;
