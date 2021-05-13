import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {auth} from "./firebase.js";
import {useStateValue} from "./StateProvider";
function Header() {
     // eslint-disable-next-line
    const [{basket,user},dispatch]=useStateValue();
    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div>
        <div className="header">
           <Link to="/"><img className="header_logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"/></Link>
            <div className="location">
                <a className="greet">Hello</a>
                <span><LocationOnOutlinedIcon /><strong>Select your address</strong></span>
            </div>
            <div className="header_search">
                <input className="search" type="text"></input><SearchIcon className="search_icon" />
            </div>
            
            <div className="head-nav">
            <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header_option">
                <small>Hello {user ? user.email:'Guest'} </small>
                <span className="option1">{user ?'Signout':'Signin'}</span>
            </div>
            </Link>
            <div className="header_option">
                <small>Returns</small>
                <span className="option2">& Orders</span>
            </div>
            <Link to="/checkout">
            <div className="header_option1">
            <span className="basketcount">{basket?.length}</span>
            <span className="basketicon linker"><ShoppingCartIcon fontSize="large" />
            </span>
            </div>
            </Link>
            </div>
        </div>
        {/* <div className="header2">
        <div className="header2_option">
         <p><span>All</span></p>
        </div>
        <div className="header2_option">
         <p><span></span>Today's Deals</p>
        </div>
        <div className="header2_option">
         <p>Buy Again</p>
        </div>
        </div> */}
        </div>
    )
}

export default Header;