import React from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import { useContext} from "react";
import {ContextApp} from "../../reducer";
import LanguageContext from "../../context";


const HeaderDownRow = ({search}) => {
    const {state, dispatch} = useContext(ContextApp);
    const {translate} = useContext(LanguageContext);
    return(
        <>
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
        </>
    )
}

export default HeaderDownRow;