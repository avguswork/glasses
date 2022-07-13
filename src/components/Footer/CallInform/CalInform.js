import React from "react";
import { useContext } from "react";
import "./CalInform.css";
import LanguageContext from "../../../context";




function CallInform (){
    const {translate} = useContext(LanguageContext)
    return(
        <div className="callinform_background">
            <div className="inform_block">

                <div className="block_Column">
                <img src= { require(`./image/car.png`)} alt="car"/>
                <h3 id="lng-cal" className="callinText">{translate.cal}</h3>
                </div>

                <div className="block_Column">
                    <img src= { require(`./image/call.png`)} alt="call"/>
                    <h3 className="callinText" id="lng-callin2">{translate.callin2}</h3>
                </div>
            </div>
        </div>
    )
}

export default CallInform