import React from "react";
import "./styles.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Cart from "./pages/Cart";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Other from "./pages/Other";
import Login from "./pages/Login";

function App() {

  return(
    
    <div className="site">
    
      <BrowserRouter>
        <Routes>
          <Route path = "glasses/*" element = { <Home/> } />
          <Route path = "glasses/women" element = {<Women/> } />
          <Route path = "glasses/men" element = {<Men/> } />
          <Route path = "glasses/other" element = {<Other/> } />
          <Route path = "glasses/card/:id" element = {<Card/> } />
          <Route path = "glasses/cart" element = {<Cart/> } />
          <Route path = "glasses/login" element = {<Login/> } />
          <Route path = "*" element = {<h1>Page not Found</h1>}/>
        </Routes>
      </BrowserRouter> 
    </div>  
  ) 
}

export default App;


