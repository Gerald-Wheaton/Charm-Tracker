import React from "react"
import { Meteor } from "meteor/meteor"
import LoginHeader from "../../LoginHeader"
import { Accounts } from 'meteor/accounts-base'

const Register = () => {

    // will create an user account
    const handleSubmit = (event) => {
        event.preventDefault();
        var email = event.target.email.value
        var password = event.target.password.value

        event.target.email.value = ""
        event.target.password.value = ""

        Meteor.call('createAccount', {
            email: email,
            password: password,
        }, (err, res) => {
            if (err) {
                alert(err);
            } else {
                console.log(res)// success!
                alert(res)
            }
        });
    }


    return (
        <div className="login">
            <LoginHeader />
            <form className="login" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" id="email" name="email"></input>
                <label>Confirm Password</label>
                <input type="password" id="password" name="password"></input>
                <input type="submit" id="register" value="Register"></input>
            </form>
        </div>
    )
}

export default Register