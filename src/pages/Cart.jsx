import React from "react";
import { useState, useContext } from "react";
import "./cartStyle.scss";
import {GetProductInCart} from "../logic";
import { RemoveProductInCart } from "../logic";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartItem from "../components/Cart/CartItem";
import LanguageContext from "../context";



function Cart({changeLanguage, changeCurrensy}){

    const [cart, setCart] = useState(GetProductInCart());
    const {translate} = useContext(LanguageContext)
    
    //Удаления выбраного товара со страницы
    const dellProdact = (id) => {
        
        setCart((cart) => { return cart.filter((product) => { return id !== product.id})})

        function dell(){
            return cart.filter((product) => { return id !== product.id})
        }
        RemoveProductInCart (dell())
    }
    
    
    
  
    const Products = cart.map((product) => {
        return( <CartItem product={product} key={product.id} dellProdact={dellProdact}/>)
    })

   
    
    return(
        <>
        <Header changeLanguage={changeLanguage} changeCurrensy={changeCurrensy}/>
       <div className="cart">
        <table className="cart_product_table">
            <tr className="tr_header">
                <td className="td_column_name"><h4>Name</h4></td>
                <td className="td_column_amount"><h4>Amount</h4></td>
                <td className="td_column_price"><h4>Price</h4></td>
                <td className="td_column_del"><h4></h4></td>
            </tr>
            {Products}
            <tr className="tr_all_price">
            <td className="td_column_name"><h4></h4></td>
                <td className="td_column_amount"><h4>Counter</h4></td>
                <td className="td_column_price"><h4>Price</h4></td>
                <td className="td_column_del"><button className="buy_btn">Buy</button></td>
            </tr>
            
        </table>
        
          
            
       </div>
       <Footer />
       </>
        
    )
}


export default Cart;