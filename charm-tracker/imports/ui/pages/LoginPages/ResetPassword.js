import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import auth from "../../../api/Auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from "../../AuthManagement";
import LoginHeader from "../../LoginHeader";
import { Link } from "react-router-dom";


const ResetPassword = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email } = event.target.elements;
      try {
        await sendPasswordResetEmail(auth, email.value)
          .then(() => {
            // Password reset email sent!
            // ..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error: ", errorCode, errorMessage);
            // ..
          });
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <div className="login">
      <LoginHeader />
        <form className="login" onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <button type="submit">Reset Password</button>
        <Link to="/login" className="login-link">Back to Login</Link>
      </form>
    </div>
  );
};

export default withRouter(ResetPassword);
