import React from "react";
import { useState, useContext } from "react";
import "./cartStyle.scss";
import CartItem from "../components/Cart/CartItem/CartItem";
import { ContextApp } from "../reducer";
import Body from "../components/Body/Body";



function Cart(){

    const {state, dispatch} = useContext(ContextApp);

    const [cart, setCart] = useState(state.productCart);
    
    //Удаления выбраного товара со страницы
    const dellProduct = (id) => {
        let element = cart.filter((product) => { return id !== product.id})

        setCart(() => { return cart.filter((product) => { return id !== product.id})})
        dispatch({ type: 'setProductInCart', payload: element})
    }
    
    const Products = cart.map((product) => {
        return( <CartItem product={product} key={product.id} dellProduct={dellProduct}/>)
    })

   console.log(state)
    
    return(
        <Body>
        <div className="cart">
        <div className="cart_block">
            <div className="cart_block_row gradient_down">
                <div className="cart_block_column_name"><h4>Name</h4></div>
                <div className="cart_block_column_amount"><h4>Amount</h4></div>
                <div className="cart_block_column_price"><h4>Price</h4></div>
                <div className="cart_block_column_del"></div>
            </div>
            {Products}
            <div className="cart_block_row gradient_up">
            <div className="cart_block_column_name"></div>
                <div className="cart_block_column_amount"><h4>Counter</h4></div>
                <div className="cart_block_column_price"><h4>Price</h4></div>
                <div className="cart_block_column_del"><button className="buy_btn">Buy</button></div>
            </div>   
        </div>   
       </div>
       </Body>
    )
}
export default Cart;