import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useStateValue} from "./StateProvider";
function Header() {
     // eslint-disable-next-line
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="header">
            <img className="header_logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
            <div className="header_search">
                <input className="search" type="text"></input><SearchIcon className="search_icon" />
            </div>
            
            <div className="head-nav">
            <div className="header_option">
                <span className="option1">Signin</span>
            </div>
            <div className="header_option">
                <span className="option2">Returns & Orders</span>
            </div>
            <div className="header_option">
            <span className="basketicon"><ShoppingCartIcon/><span className="basketcount">{basket?.length}</span></span>
            </div>
            </div>
        </div>
    )
}

export default Header;