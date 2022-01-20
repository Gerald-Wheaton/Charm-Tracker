import React from 'react';
import { Meteor } from 'meteor/meteor';
// import Blaze from 'meteor/gadicc:blaze-react-component'; // this allows blaze templates to be converted into components

export default class Login extends React.Component {
    render() { // OAuth URI is not compatable with localhost:3000
        return (
            <div>
                <p>Login using Google</p>
            </div>
        );
    }
};