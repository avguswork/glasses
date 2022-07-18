import React from "react";
import "./styles.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useContext} from "react";
import {ContextApp} from "./reducer.js";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Cart from "./pages/Cart";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Other from "./pages/Other";
import Login from "./pages/Login";
import Footer from "./components/Footer/Footer";

function App({changeLanguage}) {

// Смена валюты
  const {state, dispatch} = useContext(ContextApp);

//Поиск

const search = () => {
  
  let resultSearch = state.productData.filter((element) => {
    
    if(element.id === state.search * 1){
      
      return element.id
    }
    else if(element.name === state.search){
      return element.name
    }
    else if(element.price === state.search*1){
                
      return element.price 
    }
    else if(element.status === state.search){
    
      return element.status
    }
    
})
  dispatch({ type:'resultSearch', payload: resultSearch})
  
}

  return(
    
    <div className="site">
    
      <BrowserRouter>
        <Header  search={search}/>
        <Routes>
          <Route path="glasses" element = { <Home/> } />
          <Route path="glasses/women" element = {<Women/> } />
          <Route path="glasses/men" element = {<Men/> } />
          <Route path="glasses/other" element = {<Other/> } />
          <Route path="glasses/card" element = {<Card/> } />
          <Route path="glasses/cart" element = {<Cart/> } />
          <Route path="glasses/login" element = {<Login/> } />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </div>  
  ) 
}

export default App;


