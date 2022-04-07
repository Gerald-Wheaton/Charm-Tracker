import React, { useState, useEffect } from "react"
import { CalendarHeader } from "../../CalendarHeader"
import { Day } from "../../Day"
import { NewEventModal } from "../../NewEventModal"
import { DeleteEventModal } from "../../DeleteEventModal"
import { useDate } from "../../hooks/useDate"
import TasksSidebar from "./TasksSidebar"
import GenerateTasksFromEvent from "../../../api/taskHandling/TaskHandler"
import { taskCollection } from "../../../api/tasks"

const Calendar = () => {
  const [nav, setNav] = useState(0)
  const [clicked, setClicked] = useState()
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  )

  //const generation = GenerateTasksFromEvent()
  const task = taskCollection.find({}).fetch()
  console.log(task)

  const eventForDate = date => events.find(e => e.date === date)

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events))
  }, [events])

  const { days, dateDisplay } = useDate(events, nav)

  return (
    <>
      <div id="container">
        <TasksSidebar />
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
    </>
  )
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
//>
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
