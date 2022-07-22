import React from "react";
import ProductBlock from "../components/Product/ProductBlock";
import '../styles.scss';
import Body from "../components/Body/Body";
import { useContext} from "react";
import {ContextApp} from "../reducer";


const Other = () => {
    const {state} = useContext(ContextApp);
     let genderProduct = state.productData
    
    return(
        <Body>
            <ProductBlock genderProduct={genderProduct}/>
        </Body>
    )
}
export default Other