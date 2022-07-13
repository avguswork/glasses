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
    //Смена стоимости в зависимости от выбора валюты 
    let productStatus = props.product.status;
    let beforePrise = props.product.price;
    if(state.currensy === '$'){
        beforePrise = props.product.price
    }
    if(state.currensy === '₴'){
        beforePrise = props.product.price * 30
    }
    if(state.currensy === '€'){
        beforePrise = props.product.price * 0.95
    }

    let [price, setPrice] = useState(beforePrise.toFixed(2));
    let [currensy, setCurrensy] = useState(state.currensy)
    
    if(currensy !== state.currensy){
        setCurrensy(() => {
           return currensy  = state.currensy
           
        })
        setPrice(() => {
            if(state.currensy === '$'){
                price = props.product.price
                return price.toFixed(2)
            }
            if(state.currensy === '₴'){
                price = props.product.price * 30
                return price.toFixed(2)
            }
            if(state.currensy === '€'){
                 price = props.product.price * 0.95
                return price.toFixed(2)
            }
        })
    }
    //


    
    //Фильтр
    if (productStatus === 'New'){
        statusImage = require(`./image/new.png`)
        statusProduct = 'new_status'
    }

    else if (productStatus === 'Sale'){
        statusImage = require(`./image/sale.png`)
        statusProduct = 'sale_status'
    }

    else{
        statusImage = '' 
        statusProduct = 'none_status'
    }
    //
    
    return(
        <div className="product_item_block">
            <div className={statusProduct}>
                <img src={statusImage} />
            </div>
            <div className="product_item">
            
            <Link to="/glasses/card"  className="btn"><img src= { require(`./image/${image}`)} onClick={() => {   dispatch({ type: 'addCard', payload: props.product}) }} id="productImage" alt={props.product.name}/></Link>
                
               <div className="price_row">
                        <p>
                        <Link to="/glasses/card"  className="btn"><span  className="product_name" onClick={() => { dispatch({ type: 'addCard', payload: props.product}) }}>{props.product.name}</span><br /></Link>
                            <span  className="product_price">{`${currensy}${price}`}</span>
                        </p>
                        
                   
                </div>
            </div>
        </div>
    )
}


export default ProductItem;