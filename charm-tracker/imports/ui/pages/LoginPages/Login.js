import React, { useState } from "react"
import { Meteor } from "meteor/meteor"
import LoginHeader from "../../LoginHeader"
import { Accounts } from 'meteor/accounts-base'
import { Link } from "react-router-dom"
import {Session} from "meteor/session"

const Login = props => {


  const handleLogin = (event) => {
    event.preventDefault()
    let email = event.target.email.value;
    let password = event.target.password.value;
    Meteor.loginWithPassword(email, password, function (err) {
      if (err){
        console.log(err);
        alert(err);
      }
    });
    let user = Meteor.user();

    Session.set("user", user);

    // Meteor.loginWithPassword(email, password, error => {
    //   if (error) {
    //     console.log(error)
    //   } else {
    //     Meteor.setLoggingIn(Meteor.loggingIn())
    //     window.location.replace("/member-area")
    //     setLoggedIn(true)
    //   }
    // })
  }

  return (
    <div className="login">
      <LoginHeader />
      <form className="login" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
        ></input>
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
        ></input>
        <a href="#" className="login-link">
          Forgot Password?
        </a>
        <Link to="/register" className="login-link">Create Account</Link>
        <input type="submit" id="login"></input>
      </form>
    </div>
  )
}

export default Login
