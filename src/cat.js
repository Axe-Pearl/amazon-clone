import React from 'react'
import "./Category.css";
import { Link } from "react-router-dom";
function Category(props) {
    return (
        <div className="category_container">
          <div className="category_content">
          <Link to={props.loc}><h5>{props.cate}</h5></Link>
          <img className="image" alt="categoryimg" src={props.imgurl}></img>
          {/* <h5><a href="#">Check Now</a></h5> */}
          </div> 
        </div>
    )
}

export default Category;

