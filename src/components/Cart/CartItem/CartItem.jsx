import React from "react";
import "./style.scss";


function CartItem ({product, dellProduct }){
    //Деструктуризация масива
    const { images, name, price, id} = product;

    
    return(
        <div className="cart_block_row_product">
            <div className="cart_block_column_name"><img src= { require(`../../../images/100-135/${images}`)} alt="Glasses"/><h4>{name}</h4></div>
                <div className="cart_block_column_amount"><h4>Counter</h4></div>
                <div className="cart_block_column_price"><h4>{price}.00</h4></div>
                <div className="cart_block_column_del"><button onClick={() => {dellProduct(id);  }} id={id}>X</button></div>
            </div>
    )
}

export default CartItem;

//dispatch({type: 'decrement'})