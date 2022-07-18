import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import './style.css';
import { useState, useContext } from "react";
import {ContextApp} from "../../reducer";
import LanguageContext from "../../context";

function ProductBlock ({genderProduct}) {

    const {translate} = useContext(LanguageContext)
    const {state, dispatch} = useContext(ContextApp);

//Получения данных с women, Men, Other
    let productData = state.productData
    if(genderProduct){
        productData = genderProduct
    }

    let [products, setProducts] = useState(productData);   

    
//Поиск товаров
const filter = () => {

}
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
            {  products.map(product => {return (<ProductItem product={product} key={product.id} />)})}
        </div>
        </div>
        
    )  
}
export default ProductBlock;