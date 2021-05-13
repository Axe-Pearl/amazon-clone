import React from 'react'
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import categories from "./categories";
// import Product from "./product.js"
import Category from "./cat.js";

function doentry(terms){
  return(
    <Category cate={terms.cate} imgurl={terms.imgurl} loc={terms.loc}/>
  );
  
}
function Home() {
    return (
<div className="Home">
<Carousel className="mod">
  <Carousel.Item>
    <img
      className="d-block w-100 img1"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img1"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img1"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100 img1"
   src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" 
     alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<div className="disc">
You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in
</div>
<div className="categoryr">{categories.map(doentry)}</div>
<div className="colori">
</div>
</div>
);
}

export default Home;
