import React, { Component } from "react";
import "../css/Header.css";

class Header extends Component {
    render() {
        return (
          <div className="Header">
            <div className="gobackButton">
              <a href="!#">
                <img className='left-arrow' src={process.env.PUBLIC_URL + "/left-arrow.png"} alt="not found"/>
                Go back
              </a>
            </div>
            <div className='logo'> 
              <a href="!#">
                <img className="img-logo" src={process.env.PUBLIC_URL + "/codersx_logo.png"} alt="not found" />
              </a>
            </div>
            <div className="signup">
              <a href="!#">Sign up</a>
            </div>
          </div>
        );
    }
}

export default Header;