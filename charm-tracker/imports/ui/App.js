import React, { useState } from "react"
import {Meteor} from 'meteor/meteor'
import Login from "./pages/LoginPages/Login.js"
import ResetPassword from "./pages/LoginPages/ResetPassword.js"
import PageRoutes from "./PageRoutes.js"
import { Register } from "./pages/index.js"
import LoginRoutes from "./LoginRoutes.js"
import {Session} from "meteor/session"

const App = () => {

  Session.setDefault("user", null);

  let user = Session.get("user");
  
  if (user === null) {
    return <LoginRoutes />
  } else {
    return (
      <>
        <PageRoutes />
      </>
    )
  }
}

export default App
