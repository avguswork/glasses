import React from "react";
import Slider from "../components/Slider/Slider";
import ProductBlock from "../components/Product/ProductBlock";
import Body from "../components/Body/Body";


const Home = () => {
    return(
            <Body>
                <Slider /> 
                <ProductBlock />
            </Body>
    )
}

export default Home;