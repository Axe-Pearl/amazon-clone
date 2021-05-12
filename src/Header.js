import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
        <div className="header">
            <img className="header_logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
            <div className="header_search">
                <input className="search" type="text"></input><SearchIcon className="search_icon" />
            </div>
            
            <div className="head-nav">
            <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header_option">
                <span className="option1">{user ?'Signout':'Signin'}</span>
            </div>
            </Link>
            <div className="header_option">
                <span className="option2">Returns & Orders</span>
            </div>
            <Link to="/checkout">
            <div className="header_option">
            <span className="basketicon linker"><ShoppingCartIcon/><span className="basketcount">{basket?.length}</span>
            </span>
            </div>
            </Link>
            </div>
        </div>
    )
}

export default Header;