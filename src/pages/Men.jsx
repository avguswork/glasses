import React from "react";
import ProductBlock from "../components/Product/ProductBlock";
import '../styles.scss';
import { useContext} from "react";
import {ContextApp} from "../reducer";

const Men = () => {
    const {state} = useContext(ContextApp);
     let gender = state.productData
    
    return(
        <>
        <div id="genderProductBlock" className="genderProductBlock">
        <ProductBlock gender={gender}/>
        </div>
        </>
    )
}

export default Men