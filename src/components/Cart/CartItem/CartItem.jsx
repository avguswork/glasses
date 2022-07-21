import React, {useContext} from "react";
import "./CartItem.scss";
import { ContextApp } from "../../../reducer";


function CartItem ({product, dellProduct }){
    
    const { images, name, price, id} = product;
    const {state} = useContext(ContextApp)
    let productPrice = state.coefficient * product.price
    
    return(
        <div className="cart_block_row_product">
            <div className="cart_block_column_name"><img src= { require(`../../../images/100-135/${images}`)} alt="Glasses"/><h4>{name}</h4></div>
                <div className="cart_block_column_amount"><h4>Counter</h4></div>
                <div className="cart_block_column_price"><h4>{`${state.currensy}${productPrice.toFixed(2)}`}</h4></div>
                <div className="cart_block_column_del"><button onClick={() => {dellProduct(id);  }} id={id}>X</button></div>
            </div>
    )
}

export default CartItem;

//dispatch({type: 'decrement'})