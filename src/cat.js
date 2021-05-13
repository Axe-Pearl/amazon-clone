import React from 'react'
import "./Category.css";
import { Link } from "react-router-dom";
function Category(props) {
    return (
        <div className="category_container">
          <div className="category_content">
          <Link to={props.loc}><h5 className="con">{props.cate}</h5></Link>
          <img className="image con" alt="categoryimg" src={props.imgurl}></img>
          <a className=" linker con"
          href={props.loc}>see more</a>
          {/* <h5><a href="#">Check Now</a></h5> */}
          </div> 
        </div>
    )
}

export default Category;

