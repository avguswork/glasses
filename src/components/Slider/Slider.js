import React from "react";
import "./style.scss";
import {useState} from "react";



    




function Slider(){
    
    let [counter, setCounter] = useState(1)

    function previous(){
        if( counter >= 2 ){
            setCounter(() =>{ return (counter - 1) })
        }
        if( counter === 1){
             return (counter = 1)}
        }

    function next(){
        if (counter <= 3 ){
            setCounter(() =>{ return (counter + 1) })
        }
        if (counter === 4){
            return (counter = 4)
        }
    }

    return(
        <div className="slider">
            <img className="slider_image" src={require(`./image/Layer${counter}.jpg`)} width="100%"  alt="Layer1"/>
            
                <button className="slider_buttonP" id="button_previous" onClick={previous}>﹤</button>
                <div className="header_block">
                    <h2><span  className="header">ALUMINUM CLUB</span><br /><br /><span  className="header">Experience Ray-Ban</span></h2>
                </div>

                <button className="slider_buttonN" id="button_next" onClick={next}>﹥</button>
        </div>
    )
}

export default Slider;