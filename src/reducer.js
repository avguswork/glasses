import React from "react";
import data from "./Data";

export const ContextApp = React.createContext();

//Счетчик корзины
export const initialState = {productData: data, currensy: '$', productCart: [], card: [], searchProduct: 'All', }


export const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};

          case 'currensy':
          return{
            ...state,
            currensy: action.payload
          }

        case 'addCard':
          return{
            ...state,
            card: action.payload
          }

        case 'setProductInCart':
          return {
            ...state,
            productCart:  action.payload 
           }
        
           case 'dellProductInCart':
            return {
              ...state,
              productCart:  action.payload 
             }

           case 'setProductSearch':
            return {
              ...state,
              searchProduct:  action.payload 
             }
       
          
        case 'home':
          return {...state, productData: data};
        case 'women':
          return {...state, productData: data.filter((product) => {
            return( product.gender ===  'female')
              })};
        case 'men':
          return {...state, productData: data.filter((product) => {
            return( product.gender ===  'male')
              })};
        case 'other':
          return {...state, productData: data.filter((product) => {
            return( product.gender ===  'other')
              })};      
        default:
          throw new Error();
    }
};

