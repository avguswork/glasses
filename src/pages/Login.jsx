import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Body from "../components/Body/Body";
import Invoices from "../components/ReactRouter";
import ReactRouter from "../components/ReactRouter";

const Login = () => {
    return(
        <Body >
            <LoginForm /> 
            <ReactRouter />
        </Body>
    )
}
export default Login;

