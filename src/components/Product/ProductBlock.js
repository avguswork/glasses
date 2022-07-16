import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import './style.css';
import { useState, useContext } from "react";
import {ContextApp} from "../../reducer";
import LanguageContext from "../../context";








function ProductBlock ({gender}) {

    const {translate} = useContext(LanguageContext)
    const {state, dispatch} = useContext(ContextApp);

//Получения данных с GenderProductBlock
    let productData = gender
    if(gender === undefined){
        productData = state.productData
    }
//  

    let [products, setProducts] = useState(productData);   

    
//Поиск товаров

    if(state.resultSearch !== '' && state.resultSearch !== products && state.search !== ''){
        setProducts(products = productData)
        setProducts(products = state.resultSearch)
    }

    if(state.search === '' && state.resultSearch === products){
        setProducts(products = state.productData)
    }



    
// Фильтрация товара на странице
    const changeFilter = (event) => {
        const filterValue = event.target.value
        if(filterValue === 'All'){
             setProducts( products = productData) }
        if(filterValue === 'New' || filterValue === 'Sale'){
            
            
            setProducts(() => {
                products = productData
                return products.filter((product) => {
                    return( product.status === filterValue )
                })
            })
            
            
        }
    }

    
        
//Поиск по товарам
/*
if(state.searchProduct !== 'All'){
    
    setProducts(() => {
        return products =  products.filter((product) => {

            if(product.id === state.searchProduct*1){
               console.log(product)
                return product.id 
            }
           else if(product.name === state.searchProduct){
            
                return product.name 
            }
           else if(product.price === state.searchProduct*1){
                
                return product.price 
            }
           else if(product.status === state.searchProduct){
                
                return product.status
            }
        })})
        dispatch({ type: 'setProductSearch', payload: 'All'})
}*/


// Передача данных в ProductItem

    let productElement = products.map(product => {
    return (<ProductItem product={product} key={product.id} />)
    })

//
    return(
        <div className="product_block">
        <h3 id="lng-products">{translate.products}</h3>
            <div className="filter_block">
            <label id="lng-filter">{translate.filter}</label>
            <select name="filter" className="filter" onChange={changeFilter} id="filter">
                <option id="lng-all" value={'All'}>{translate.all}</option>
                <option id="lng-new" value={'New'}>{translate.new}</option>
                <option id="lng-sale" value={'Sale'}>{translate.sale}</option>
            </select>
            </div>
        
        <div className="product_row" id="product" >
            {productElement}
        </div>
        </div>
        
    )

   
}


export default ProductBlock;