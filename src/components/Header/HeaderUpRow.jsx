import React from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import { useContext} from "react";
import {ContextApp} from "../../reducer";
import LanguageContext from "../../context";

function openMenu(){
    const menu = document.querySelector('#menu')
    menu.classList.toggle('visible')
}

//Массивы option для  select
const OptionsLanguage = [
    {
        id: 'en',
        value: 'en',
        name: 'EN'
    },
    {
        id: 'ru',
        value: "ru",
        name: 'RU'
    },
    {
        id: "ua",
        value: "ua",
        name: 'UA'
    }
]

const OptionsCurrensy = [
    {
        id: 'curensyUSD',
        value: '$',
        name: 'USD'
    },
    {
        id: 'curensyUAH',
        value: '₴',
        name: 'UAH'
    },
    {
        id: 'curensyEUR',
        value: '€',
        name: 'EUR'
    }
]

const HeaderUpRow = () => {

    const {dispatch} = useContext(ContextApp);
    const {translate, changeLanguage} = useContext(LanguageContext);

    const changeCurrensy = (event) => {
        dispatch({ type: 'currensy', payload: event.target.value})
    }
    return(
        <>
            <div className="upRowBackground">
                <div className="upRow">
                    <div className="leftColumn">
                        <div className="selectLanguage">
                            <label id="lng-selectLang" className="lng-selectLang" >{translate.selectLang}</label>
                            <select name="lang" id="selectLang" onChange={changeLanguage}>
                                {OptionsLanguage.map((option) => { 
                                    return (<option key={option.id} id={option.id} value={option.value}>{option.name}</option>) 
                                })}
                            </select>
                        </div>
                        <div className="selectCurrensy">
                            <label id="lng-selectCurensy">{translate.selectCurensy}</label>
                            <select name="Curensy" id="select" onChange={changeCurrensy}>
                                {OptionsCurrensy.map((option) => {
                                    return( <option key={option.id} id={option.id} value={option.value}>{option.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <button className="menu_button" onClick={openMenu}>☰</button>
                    <div className="menu" id="menu">
                        <button id="lng-login" className="btn1">{translate.login}</button>
                        <button id="lng-signin" className="btn1">{translate.signin}</button>
                    </div>
                    <div className="rightColumn">
                        <Link to="/glasses/login"><button id="lng-login2" className="btn1">{translate.login2}</button></Link> ┃
                        <button id="lng-signin2" className="btn1">{translate.signin2}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderUpRow;