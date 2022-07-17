import React from "react";
import "./LoginForm.scss";


const LoginForm = () => {
    return(
        <div className="form_wraper">
            <form className="login_form">
                <label >Login:</label>
                <input name="login" className="login_form_input"/>
                <label >Password:</label>
                <input name="password" className="login_form_input"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default LoginForm;