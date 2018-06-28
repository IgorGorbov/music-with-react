import React, { Component } from "react";
import logo from "./logo.svg";
import logoMain from "./logoMain.svg";

import "./style.css";

class SignForm extends Component {
  render() {
    return (
      <div className="flex-wrap">
        <h2 className="welcome">Welcome to the music with React &#127911;</h2>
        <img className="logo" src={logo} alt="logo" />
        <img className="logoMain" src={logoMain} alt="logoMain" />
        <fieldset>
          <form action noValidate>
            <input type="radio" name="rg" id="sign-in" checked />
            <input type="radio" name="rg" id="sign-up" />
            <input type="radio" name="rg" id="reset" />

            <label htmlFor="sign-in">Sign in</label>
            <label htmlFor="sign-up">Sign up</label>

            <input
              className="sign-up sign-in reset"
              type="email"
              placeholder="Email"
            />
            <input
              className="sign-up sign-in"
              type="password"
              placeholder="Password"
            />
            <input
              className="sign-up"
              type="password"
              placeholder="Repeat Password"
            />
            <button>Submit</button>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default SignForm;
