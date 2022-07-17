import React from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import { useContext, useState} from "react";
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

function Header({changeLanguage, search}) {

    const {state, dispatch} = useContext(ContextApp);
    const {translate} = useContext(LanguageContext);

    const changeCurrensy = (event) => {
        dispatch({ type: 'currensy', payload: event.target.value})
    }

    return(
        <>
        <header>
            <div className="upRowBackground">
                <div className="upRow">

                    <div className="leftColumn">

                        <div className="selectLanguage">
                            <label id="lng-selectLang" className="lng-selectLang" >{translate.selectLang}</label>
                            <select name="lang" id="selectLang" onChange={changeLanguage}>
                                {OptionsLanguage.map((option) => { 
                                    return (<option key={option.id} id={option.id} value={option.value}>{option.name}</option>) 
                                })}
                                
                            </select></div>
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

            <div className="downRow">
                    <h1 className="logo">LEO SHOP</h1>
                    <div className="buttonMenu" id="buttonMenu">
                        <Link to="/glasses"><button className="btn2" onClick={() => { dispatch({type: 'home'}) }} id="lng-home">{translate.home}</button></Link>
                        <Link to="/glasses/women"><button className="btn2" onClick={() => { dispatch({type: 'women'}) }}  id="lng-women">{translate.women}</button></Link>
                        <Link to="/glasses/men"><button  className="btn2" onClick={() => { dispatch({type: 'men'}) }} id="lng-men">{translate.men}</button></Link>
                        <Link to="/glasses/other"><button  className="btn2" onClick={() => { dispatch({type: 'other'}) }} id="lng-other">{translate.other}</button></Link>
                        
                    </div>
                    <div className="search_cart">
                        <div className="search">
                            <input type="search" placeholder="Search.." onChange={(event) => { dispatch({ type: 'setProductSearch', payload: event.target.value})}}  id="search"/>
                            <button className="searchButton" onClick={() => {search() }} id="searchButton">&#128269;</button>
                        </div>
                        
                        <div className="iconBlock">
                            
                            <Link to="/glasses/cart"><button className="product_btn"><img src={require('./image/twoo.png')} alt="2"/></button></Link>
                            <p id="lng-cart">{translate.cart}</p>({state.productCart.length})
                            
                        </div>
                        
                    </div>
            </div>
        </header>
        </>
    )
}

export default Header


