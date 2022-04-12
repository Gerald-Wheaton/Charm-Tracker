import React from "react"
import { Meteor } from "meteor/meteor"
import LoginHeader from "../../LoginHeader"

const ResetPassword = () => {
  return (
    <div className="login">
      <LoginHeader />
      <form className="login">
        <label>New Password</label>
        <input type="text" id="npassword" name="npassword"></input>
        <label>Confirm Password</label>
        <input type="password" id="cpassword" name="cpassword"></input>
        <input type="submit" id="reset" value="Reset Password"></input>
      </form>
    </div>
  )
}

export default ResetPassword
