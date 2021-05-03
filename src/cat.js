import React from 'react'
import "./Category.css";
function Category(props) {
    return (
        <div className="category_container">
          <div className="category_content">
          <h4>{props.cate}</h4>
          <img className="image" alt="categoryimg" src={props.imgurl}></img>
          {/* <h5><a href="#">Check Now</a></h5> */}
          </div> 
        </div>
    )
}

export default Category;

