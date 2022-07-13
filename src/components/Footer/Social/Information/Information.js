import React from "react";
import "./style.scss";
import { useContext } from "react";
import LanguageContext from "../../../../context";



function Information (){
    const {translate} = useContext(LanguageContext)
    return(
        <div className="informationBlock" >
            <h4 className="info_header" id="lng-soch3">{translate.soch3}</h4>
            <div className="info_text">
            <ul>
                <li  id="lng-info">{translate.info}</li>
                
                 <li  id="lng-info2">{translate.info2}</li>
                
                <li  id="lng-info3">{translate.info3}</li>
                
                <li  id="lng-info4">{translate.info4}</li>
                
                <li  id="lng-info5">{translate.info5}</li>
                
            
            </ul>
            </div>
        </div>
    )
}

export default Information