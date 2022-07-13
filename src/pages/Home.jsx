import React from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import ProductBlock from "../components/Product/ProductBlock";
import Footer from "../components/Footer/Footer";

const Home = ({changeLanguage, changeCurrensy}) => {
    return(
        <>
            <Header changeLanguage={changeLanguage} changeCurrensy={changeCurrensy}/>
            <Slider />
            <ProductBlock />
            <Footer />
        </>
    )
}

export default Home;