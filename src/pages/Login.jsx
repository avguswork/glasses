import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = ({changeLanguage, changeCurrensy, search}) => {
    return(
        <>
            <Header changeLanguage={changeLanguage} changeCurrensy={changeCurrensy} search={search}/>
            <LoginForm />
            <Footer /> 
        </>
    )
}

export default Login;