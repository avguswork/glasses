import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import './style.css';
import {useContext} from "react";
import {ContextApp} from "../../reducer";
import LanguageContext from "../../context";
import {useSearchParams} from "react-router-dom";


function ProductBlock () {

    const {translate} = useContext(LanguageContext)
    const {state} = useContext(ContextApp);
    const [searchParams, setSearchParams] = useSearchParams();
  
    let products = state.productData;

    const changeFilter = (event) => {
      const filterParams = searchParams.get("filter") || ""
      let filter = event.target.value;
      if (filter) {
        setSearchParams({ filter });
      } else { 
        setSearchParams({});}}

    const Search = () => {
      
      let filter = searchParams.get("filter");
      if(filter === "New" || filter === "Sale"){
        products = state.productData.filter(element => { 
          return element.status === filter
      })}
      else{
        products = state.productData
      }

      let search = searchParams.get("search");
      if(search){
        products = state.productData.filter(element => {
          return  element.name.toLowerCase().startsWith(search.toLowerCase());
      })}
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
            {Search()}
            { products.map( product => (<ProductItem product={product} key={product.id} />)) }
          </div>
        </div>
        
    )  
}
export default ProductBlock;

