import React, { useState } from "react"
import ReactDom from "react-dom"
import { Link } from "react-router-dom"
import { eventCollection } from "../api/events"
import RemoveEvents from "./RemoveEvents"

const EventTaskBar = () => {
  const [client, setClient] = useState()

  const getEvent = (event) => {
    let element = <p>No event selected</p>
    if (event.target.value != "") {
      let selectedEvent = eventCollection
        .find({ _id: event.target.value })
        .fetch()
      setClient(event.target.value)
      console.log(selectedEvent)
      element = (
        <>
          <p>
            {selectedEvent[0].name.firstName} {selectedEvent[0].name.lastName}'s event is
            selected
          </p>
        </>
      )
    } else {
        setClient("")
    }
    ReactDom.render(element, document.getElementById("eventTasks"))
  }

  let events = eventCollection.find({}).fetch()

  return (
    <div>
      <select name="customer" id="customer" onChange={getEvent} defaultValue="">
        <option value=""></option>
        {events.map((event) => {
          return (
            <option key={event._id} value={event._id}>
              {event.name.firstName} {event.name.lastName} {event.date}
            </option>
          )
        })}
      </select>
      <div id="eventTasks">{/* task for event will be rendered here */}</div>
          {client ? (<div><Link className="linkasbutton" to={{ pathname: "/edit-event/"+ client }}>Edit Event</Link>
              <RemoveEvents eventID={client} /></div>) : (<div>Nothing</div>)}
    </div>
  )
}

export default EventTaskBar
