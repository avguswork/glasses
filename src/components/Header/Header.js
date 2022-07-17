import React from "react";
import "./style.scss";
import HeaderUpRow from "./HeaderUpRow";
import HeaderDownRow from "./HeaderDownRow";





function Header({changeLanguage, search}) {
    return(
        <>
            <header>
                <HeaderUpRow changeLanguage = {changeLanguage}/>
                <HeaderDownRow search = {search}/>
            
            </header>
        </>
    )
}
export default Header


