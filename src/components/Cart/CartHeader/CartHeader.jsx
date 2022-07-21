import React from "react";
import "./CartHeader.scss";


function CartHeader(){
    return(
        <div className="cart_header_row">
            <div className="cart_product_col"><h3>Name</h3></div>
            <div className="cart_product_col"><h3>Amount</h3></div>  
            <div className="cart_product_col"><h3>Price</h3></div>
            <div className="cart_product_col"><h3>del</h3></div>     
        </div>
    )
}


export default CartHeader;