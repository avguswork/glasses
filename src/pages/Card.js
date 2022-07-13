import React from "react";
import ProductCard from "../components/Product/ProductCard/ProductCard";
import "../styles.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function Card({changeLanguage, changeCurrensy}){

return(
   <>
      <Header changeLanguage={changeLanguage} changeCurrensy={changeCurrensy}/>
      <ProductCard />
      <Footer />
   </>  
)}


export default Card;


