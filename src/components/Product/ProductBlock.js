import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import './style.css';
import {useContext} from "react";
import {ContextApp} from "../../reducer";
import LanguageContext from "../../context";


function ProductBlock () {

    const {translate} = useContext(LanguageContext)
    const {state, dispatch} = useContext(ContextApp);
  
    let products = state.productData;

    const Search = () => {
      if(state.search === "All"){
        products = state.productData
      }
      else if(state.search !== ""){
        products = state.productData.filter(element => {
          if(element.id === Number(state.search)){
            return element
          }
          else if(element.name === state.search){
            return element
          }
          else if(element.price === Number(state.search)){
            return element 
          }
          else if(element.status === state.search){
            return element
          }      
    })}}

    const changeFilter = (event) => {
      dispatch({ type:'setProductSearch', payload: event.target.value})
    }

    console.log(state)
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
            {Search()}
            { products.map( product => (<ProductItem product={product} key={product.id} />)) }
          </div>
        </div>
        
    )  
}
export default ProductBlock;