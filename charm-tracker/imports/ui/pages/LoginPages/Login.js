import React, { useState } from "react"
import { Meteor } from "meteor/meteor"
import LoginHeader from "../../LoginHeader"

const Login = props => {
  const { setLoggedIn } = props
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  //Use this to register a new user account
  const handleSubmit = async e => {
    Accounts.createUser({ email: email, passwor: password }, error => {
      if (error) {
        console.log(error)
      }
    })
  }

  const handleLogin = (email, password) => {
    Meteor.loginWithPassword(email, password, error => {
      if (error) {
        console.log(error)
      } else {
        Meteor.setLoggingIn(Meteor.loggingIn())
        window.location.replace("/member-area")
        setLoggedIn(true)
      }
    })
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
          onChange={e => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        ></input>
        <a href="#" className="login-link">
          Forgot Password?
        </a>
        <input type="submit" id="login"></input>
      </form>
    </div>
  )
}

export default Login
