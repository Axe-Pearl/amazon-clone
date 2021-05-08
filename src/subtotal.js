import React from "react";
import CurrencyFormat from  "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal(){
    // eslint-disable-next-line 
    const [{basket},dispatch] = useStateValue();
  return(
    <div className="subtotal">
      <h4>Subtotal ({basket.length} item): ₹25.48</h4>
          <input type="checkbox" className="gift"></input>
           <h7> This order contains a gift</h7>
          <button className="checkout_btn">Proceed to Checkout</button>
      {/* <CurrencyFormat
        renderText{(value) => (
          <>
          <h4>Subtotal ({basket.length} item): ₹25.48</h4>
          <input type="checkbox" className="gift"></input>
           <h7> This order contains a gift</h7>
          <button className="checkout_btn">Proceed to Checkout</button>
          </>
        )}
       decimalScale={2}
       value={0}
       displayType={"text"}
       thousandSeparator={true}
       prefix={"₹"}
      /> */}
   </div>
  );
}

export default Subtotal;