import React, {useContext} from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {ContextApp} from "../../../reducer";
import data from "../../../Data";

function ProductCard(){
    
    const {state, dispatch} = useContext(ContextApp);
    
    let product = data.filter((element) => {
        return (element.id === state.card.id)
    })
    product = product[0]
    let productPrice = state.coefficient * product.price

    let arrays
    const addCart = () => {
        arrays = state.productCart.splice(0)
        arrays.push(state.card)
    }

    
    

return(
    
    <div className="card">        
        <div className="card_header_row">
        <Link to="/glasses"><span className="icon_home" id="lng-home2">Home</span></Link>
        <Link to="/glasses/card"><p>&nbsp;&nbsp;＞&nbsp;&nbsp;Card</p></Link>   
        </div>
        <div className="card_product_block">
            <div className="card_slider">
            <img src= { require(`./image/${state.card.images}`)}  alt="name"/>
                
            </div>
            
            <div className="description">
                <h1>{state.card.name}</h1>
                <div className="card_price_row">
                <h2>{`${state.currensy}${productPrice.toFixed(2)}`}</h2>
                <button  className="btn" id="buyBtn" ><img src={require('./image/price.png')} onClick={() =>{ addCart(); dispatch({ type: 'setProductInCart', payload: arrays})}}  alt="price"/></button>
                </div>
                <p>Eyepieces with APEL stamp. U.S. 
                Army Authorized Protective Eyewear List (APEL) - 
                US Army Authorized Protective Eyewear List. 
                The Danish list of creations to designate uniforms can 
                be worn by soldiers.</p>
                
            </div>
        </div>
        
    </div>
    
)
}
export default ProductCard;
