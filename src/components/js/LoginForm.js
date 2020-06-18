import React, { Component } from "react";
import "../css/LoginForm.css";

class LoginForm extends Component {
    render() {
        return (
            <div className="LoginForm">
                <form action="#" className="login-form">
                    <h1>Sign in</h1>
                    <div className="textb">
                        <input type="text" required></input>
                        <div className="placeholder">Username</div>
                    </div>
                    <div className="textb password">
                        <input type="password" required></input>
                        <div className="placeholder">Password</div>
                    </div>
                    <button class="btn">Sign in to CodersX</button>
                    <div className="checkbox">
                        <input type="checkbox"></input>
                        <div className="fas fa-check"></div>
                        Keep me signed in
                    </div>
                    <div className="link-forgot">
                        <a href="#">Forgot username?</a>
                        <a href="#">Forgot password?</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;