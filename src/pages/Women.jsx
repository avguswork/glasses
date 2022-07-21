import React from "react";
import ProductBlock from "../components/Product/ProductBlock";
import '../styles.scss';
import { useContext} from "react";
import {ContextApp} from "../reducer";

const Women = () => {
    const {state} = useContext(ContextApp);
     let genderProduct = state.productData
    
    return(
        <div id="genderProductBlock" className="genderProductBlock">
        <ProductBlock genderProduct={genderProduct}/>
        </div>
    )
}
export default Women