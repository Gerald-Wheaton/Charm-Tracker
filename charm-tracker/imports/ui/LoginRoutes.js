import React from "react"
import {
    Login,
    ResetPassword,
    Register,
} from "./pages"
import NavBar from "./NavBar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const LoginRoutes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/reset-password" component={ResetPassword} />
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    )
}

export default LoginRoutes
