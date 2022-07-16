import React from "react";
import "./styles.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useContext, useState} from "react";
import {ContextApp} from "./reducer.js";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Cart from "./pages/Cart";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Other from "./pages/Other";



function App({changeLanguage}) {


// Смена валюты
  const {state, dispatch} = useContext(ContextApp);

  const changeCurrensy = (event) => {
      
      let currensy;
      if(event.target.value === 'USD'){
        currensy = '$'
    }
     if(event.target.value === 'UAH'){
      currensy = '₴'
    }
     if(event.target.value === 'EUR'){
      currensy = '€'
    }

    dispatch({ type: 'currensy', payload: currensy})
    
  }
//
//Поиск

const search = () => {
  
  let resultSearch = state.productData.filter((element) => {
    
    if(element.id === state.search * 1){
      
      return element.id
    }
     if(element.name === state.search){
      return element.name
    }
     if(element.price === state.search*1){
                
      return element.price 
    }
     if(element.status === state.search){
    
      return element.status
    }
    
})
  dispatch({ type:'resultSearch', payload: resultSearch})
  
}

  return(
    
    <div className="site">
    
      <BrowserRouter>
        <Routes>
          <Route path="glasses" element = { <Home changeLanguage={changeLanguage} changeCurrensy={changeCurrensy} search={search}/> }/>
          <Route path="glasses/women" element = {<Women changeLanguage={changeLanguage} changeCurrensy={changeCurrensy} search={search}/>} />
          <Route path="glasses/men" element = {<Men changeLanguage={changeLanguage} changeCurrensy={changeCurrensy} search={search}/>} />
          <Route path="glasses/other" element = {<Other changeLanguage={changeLanguage} changeCurrensy={changeCurrensy} search={search}/>} />
          <Route path="glasses/card" element = {<Card changeLanguage={changeLanguage} changeCurrensy={changeCurrensy} search={search}/>} />
          <Route path="glasses/cart" element = {<Cart changeLanguage={changeLanguage} changeCurrensy={changeCurrensy} search={search}/>} />
        </Routes>
      </BrowserRouter> 
    </div>  
  ) 
}

export default App;


