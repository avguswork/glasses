import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useReducer} from "react";
import {ContextApp, initialState, reducer} from "./reducer.js";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LanguageContext from './context';
import { Translate } from './translate.js';








function Main(){

  // Смена языка
  
  let [translate, setTranslate] = useState(Translate.en)
  
  const changeLanguage =(event) =>{
    console.log(event.target.value)
    setTranslate(Translate[event.target.value])
  }
  
 const [state, dispatch] = useReducer(reducer, initialState);

  return(
    
    <React.StrictMode>
      <ContextApp.Provider value={{dispatch, state}}>
        <LanguageContext.Provider value={{translate, setTranslate}}  >
          <App changeLanguage={changeLanguage}/>
        </LanguageContext.Provider>
        </ContextApp.Provider>
    </React.StrictMode>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Main />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

