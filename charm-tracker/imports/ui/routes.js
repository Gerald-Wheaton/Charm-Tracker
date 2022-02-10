import React from "react"
import {
  Calendar,
  CreateNewEvent,
  PaymentManagement,
  EditVendors,
  Reports,
  RemoveEvents,
  ActivityStream,
  Logout,
} from "../pages/index.js"
import { NavBar } from "NavBar"
import { Route, Switch, Redirect } from "react-router-dom"

const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Calendar" component={Calendar} />
        <Route exact path="/CreateNewEvent" component={CreateNewEvent} />
        <Route exact path="/PaymentManagement" component={PaymentManagement} />
        <Route exact path="/EditVendors" component={EditVendors} />
        <Route exact path="/Reports" component={Reports} />
        <Route exact path="/RemoveEvents" component={RemoveEvents} />
        <Route exact path="/ActivityStream" component={ActivityStream} />
        <Route exact path="/Logout" component={Logout} />
        <Route exact path="/">
          <Redirect to="/Calendar" />
        </Route>
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  )
}

export default Routes
