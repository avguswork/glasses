import React from "react";
import { useContext } from "react";
import "./style.scss";
import {ContextApp} from "../../../reducer";

function CartItem ({product, dellProdact }){
    //Деструктуризация масива
    const { images, name, price, id} = product;
    const {state, dispatch} = useContext(ContextApp);
    
    return(
        <tr className="tr_product">
            <td className="td_column_name"><img src= { require(`../../../images/100-135/${images}`)}/><h4>{name}</h4></td>
                <td className="td_column_amount"><h4>Counter</h4></td>
                <td className="td_column_price"><h4>{price}.00</h4></td>
                <td className="td_column_del"><button onClick={() => {dellProdact(id); dispatch({type: 'decrement'}) }} id={id}>X</button></td>
            </tr>
    )
}

export default CartItem;