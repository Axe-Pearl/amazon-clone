import React from "react";
import CurrencyFormat from  "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getbasketTotal } from "./reducer";
import {useHistory} from "react-router-dom";
function Subtotal(){
    // eslint-disable-next-line 
    const history = useHistory(); 
    const [{basket},dispatch] = useStateValue();
  return(
    <div className="subtotal">
       <CurrencyFormat 
         renderText={(value)=>(
          <>
          <h4>Subtotal ({basket.length} items): <strong>{value}</strong></h4>
          <input type="checkbox" className="gift"></input>
          <h7> This order contains a gift</h7>
          <button className="checkout_btn" onClick={e=>history.push("/payment")} >Proceed to Checkout</button>
          </>
        )}
        decimalScale={2}
        value={getbasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
       />
   </div>
  );
}

export default Subtotal;