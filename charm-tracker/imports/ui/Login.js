import React from 'react';
import { Meteor } from 'meteor/meteor';
import LoginHeader from './LoginHeader';

export default class Login extends React.Component {
    render() { // OAuth URI is not compatable with localhost:3000
        return (
            <div>
                <LoginHeader />
                <form class='login'>
                    <label for='username'>Username</label>
                    <input type='text' id='username' name='username'></input>
                    <label for='password'>Password</label>
                    <input type='text' id='password' name='password'></input>
                    <a href='#' class='login-link'>Forgot Password?</a>
                    <input type='submit'></input>
                </form>
            </div>
        );
    }
};