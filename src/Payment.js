import React from 'react';
import Bsket from './bsket';
import "./Payment.css";
import { useStateValue } from "./StateProvider";
function Payment() {
    // eslint-disable-next-line
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="payment_container">
            <div className="shipping_title">
            <h1>Select a shipping address</h1>
            </div>
            <div className="payment_section">
                 <div className="payment_title">
                     <h3><strong>Delivery Address</strong></h3>
                 </div>
                 <div className="delivery_address">
                     <p>{user?.email}</p>
                     <p>108</p>
                     <p>Ashish Nagar Colony Mahendra Ward Kareli</p>
                     <p>KARELI, MADHYA PRADESH 487221</p>
                     <p>India</p>
                     <p>phone:6266333XXX</p>
                 </div>
            </div>
            <div className="payment_section">
                   <div className="payment_title">
                      <h3><strong>Review your items ({basket?.length}</strong>)</h3>
                   </div>
                   <div className="payment_items">
                       {basket.map(items =>{
                           return(
                         <div>
                            <div className="added_items">
                            <div className="imageitems">
                            <img src={items.image} alt="cart_item"></img>
                            </div>
                          <div className="title">
                           <h6>{items.title}</h6>
                           </div>
                         <div className="price">
                          <h6>₹{items.price}</h6>
                         </div>
                          </div>
                        </div>
                           );
                    })
                }
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                <h3><strong>Payment Method</strong></h3>
                </div>
                <div className="payment_method">
                 
                </div>
            </div> 
        </div>
    )
}

export default Payment
