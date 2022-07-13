import React from "react";
import "./styles.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useContext, useEffect} from "react";
import {ContextApp} from "./reducer.js";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Cart from "./pages/Cart";
import GenderProductBlock from "./pages/GenderProductBlock";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Other from "./pages/Other";



function App({changeLanguage}) {


  // Смена валюты
  const {dispatch} = useContext(ContextApp);

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

  


  //Поднатия страницы вверх после рендера
useEffect(()=>{
  window.scrollTo(0, 0)
})
//

  return(
    
    <div className="site">
    
      <BrowserRouter>
        <Routes>
          <Route path="glasses" element = { <Home changeLanguage={changeLanguage} changeCurrensy={changeCurrensy}/> }/>
          <Route path="glasses/women" element = {<Women changeLanguage={changeLanguage} changeCurrensy={changeCurrensy}/>} />
          <Route path="glasses/men" element = {<Men changeLanguage={changeLanguage} changeCurrensy={changeCurrensy}/>} />
          <Route path="glasses/other" element = {<Other changeLanguage={changeLanguage} changeCurrensy={changeCurrensy}/>} />
          <Route path="glasses/card" element = {<Card changeLanguage={changeLanguage} changeCurrensy={changeCurrensy}/>} />
          <Route path="glasses/cart" element = {<Cart changeLanguage={changeLanguage} changeCurrensy={changeCurrensy}/>} />
        </Routes>
      </BrowserRouter> 
    </div>  
  ) 
}

export default App;


//<Route path="glasses/gender" element = {<GenderProductBlock changeLanguage={changeLanguage} changeCurrensy={changeCurrensy}/>} />