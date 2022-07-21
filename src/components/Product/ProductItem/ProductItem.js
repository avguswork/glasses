import React from "react";
import './style.css';
import {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import {ContextApp} from "../../../reducer";


function ProductItem (props) {
    
    const {state, dispatch} = useContext(ContextApp);
    
    let image = props.product.images;
    let statusProduct = '';
    let statusImage = '';
    let productStatus = props.product.status;
    let productPrice = state.coefficient * props.product.price
   
    //Фильтр
    if (productStatus === 'New' || productStatus === 'Sale'){
        statusImage = require(`./image/${productStatus.toLowerCase()}.png`)
        statusProduct = `${productStatus.toLowerCase()}_status`
    }
    else{
        statusImage = '' 
        statusProduct = 'none_status'
    }
    
    return(
        <div className="product_item_block">
            <div className={statusProduct}>
                <img src={statusImage} alt=""/>
            </div>
            <div className="product_item">
            
            <Link to="/glasses/card"  className="btn"><img src= { require(`./image/${image}`)} onClick={() => {   dispatch({ type: 'addCard', payload: props.product}) }} id="productImage" alt={props.product.name}/></Link>
                
               <div className="price_row">
                        <p>
                        <Link 
                            to= {`/glasses/card/${props.product.id}`}
                            key={`${props.product.id}`}
                            className="btn"><span  className="product_name" onClick={() => { dispatch({ type: 'addCard', payload: props.product}) }}>{props.product.name}</span><br /></Link>
                            <span  className="product_price">{`${state.currensy}${productPrice.toFixed(2)}`}</span>
                        </p>
                        
                   
                </div>
            </div>
        </div>
    )
}


export default ProductItem;