import React, { useState, useEffect } from "react"
import { CalendarHeader } from "../../CalendarHeader"
import { Day } from "../../Day"
import { NewEventModal } from "../../NewEventModal"
import { DeleteEventModal } from "../../DeleteEventModal"
import { useDate } from "../../hooks/useDate"
import NavBar from "../../NavBar"
import TasksSidebar from "./TasksSidebar"
import { eventCollection } from "../../../api/events"

const Calendar = () => {
  const [nav, setNav] = useState(0)
  const [clicked, setClicked] = useState()
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  )

  const eventForDate = date => events.find(e => e.date === date)

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events))
  }, [events])

  const { days, dateDisplay } = useDate(events, nav)

  return (
    <div id="calendar_page">
      <NavBar />
      <TasksSidebar />
      <div id="container">
        <img className="openbtn phoneOnly" src="/images/taskicon.png" onClick={() => openNav()} />
        <CalendarHeader
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />

        <div id="weekdays">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>

        <div id="calendar">
          {days.map((d, index) => (
            <Day
              key={index}
              day={d}
              onClick={() => {
                if (d.value !== "padding") {
                  setClicked(d.date)
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function openNav() {
  document.getElementById("tasksbar").style.width = "100vw";
  document.getElementById("container").style.display = "none";
  document.getElementById("hamburger").style.display = "none";
}

export default Calendar

//{
// clicked && !eventForDate(clicked) &&
// <NewEventModal
//   onClose={() => setClicked(null)}
//   onSave={title => {
//     setEvents([ ...events, { title, date: clicked }]);
//     setClicked(null);
//   }}
// />
// }

//{
// clicked && eventForDate(clicked) &&
// <DeleteEventModal
//   eventText={eventForDate(clicked).title}
//   onClose={() => setClicked(null)}
//   onDelete={() => {
//     setEvents(events.filter(e => e.date !== clicked));
//     setClicked(null);
//   }}
//  />
//  }
