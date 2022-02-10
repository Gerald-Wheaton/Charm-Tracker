import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Calendar">Calendar</Link>
        </li>
        <li>
          <Link to="CreateNewEvent">Create New Event</Link>
        </li>
        <li>
          <Link to="PaymentManagement">Payment Management</Link>
        </li>
        <li>
          <Link to="EditVendors">Edit Vendors</Link>
        </li>
        <li>
          <Link to="Reports">Reports</Link>
        </li>
        <li>
          <Link to="RemoveEvents">Remove Events</Link>
        </li>
        <li>
          <Link to="ActivityStream">Activity Stream</Link>
        </li>
        <li>
          <Link to="Logout">Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
