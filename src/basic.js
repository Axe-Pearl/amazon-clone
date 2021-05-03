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
    //  return(
    //   <div className="amazon_basics">
    //   <Product id="1" title="Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon" imgurl="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL480_FMwebp_QL65_.jpg" price="₹ 1500" />
    //   <Product id="2" title="Amazon Basics Glass Food Storage, 16-Piece Set, 8 Containers and 8 BPA-Free Lids" imgurl="https://m.media-amazon.com/images/I/81CoitBb9DL._AC_UL480_FMwebp_QL65_.jpg" price="₹ 1000" />
    //   </div>
    //  );
       
    return ( 
        <div className="amazon_basics">
        <div>{products.map(insert)}</div>
        </div>
        

    );
}

export default Basic;
