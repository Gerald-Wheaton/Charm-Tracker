import React, { useCallback } from "react";
import auth from "../../../api/Auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import LoginHeader from "../../LoginHeader";

const Register = ({ history }) => {
    const handleSubmit = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await createUserWithEmailAndPassword(auth, email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

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
    );
};

export default withRouter(Register);
