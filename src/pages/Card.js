import React from "react";
import ProductCard from "../components/Product/ProductCard/ProductCard";
import "../styles.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function Card({changeLanguage, changeCurrensy, search}){

return(
   <>
      <Header changeLanguage={changeLanguage} changeCurrensy={changeCurrensy} search={search}/>
      <ProductCard />
      <Footer />
   </>  
)}


export default Card;


