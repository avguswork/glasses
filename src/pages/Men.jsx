import React from "react";
import ProductBlock from "../components/Product/ProductBlock";
import '../styles.scss';
import {useEffect, useContext, useState } from "react";
import {ContextApp} from "../reducer";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Men = ({changeLanguage, changeCurrensy}) => {
    const {state} = useContext(ContextApp);
     let gender = state.productData
    
    return(
        <>
        <Header changeLanguage={changeLanguage} changeCurrensy={changeCurrensy}/>
        <div id="genderProductBlock" className="genderProductBlock">
        <ProductBlock gender={gender}/>
        </div>
        <Footer />
        </>
    )
}

export default Men