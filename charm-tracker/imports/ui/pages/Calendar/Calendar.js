import React, { useState, useEffect } from "react"
import { CalendarHeader } from "../../CalendarHeader"
import { Day } from "../../Day"
import { NewEventModal } from "../../NewEventModal"
import { DeleteEventModal } from "../../DeleteEventModal"
import { useDate } from "../../hooks/useDate"
import NavBar from "../../NavBar"
import TasksSidebar from "./TasksSidebar"
import { eventCollection } from "../../../api/events"

const formatDateTo = (date, type) => {
  let fDate = ""
  let splitDate = ""
  let mLen = 0
  let dLen = 0
  formattedDate = []
  switch (type) {
    case "yyyy-mm-dd":
      splitDate = date.split("/")

      mLen = splitDate[0].length
      if (mLen < 2) {
        splitDate[0] = "0" + splitDate[0]
      }

      dLen = splitDate[1].length
      if (dLen < 2) {
        splitDate[1] = "0" + splitDate[1]
      }

      formattedDate = [splitDate[2], splitDate[0], splitDate[1]]
      fDate = formattedDate.join("-")
      break
    case "mm/dd/yyyy":
      splitDate = date.split("-")

      mInitChar = splitDate[1].charAt(0)
      if (mInitChar === "0") {
        splitDate[1] = splitDate[1].replaceAll("0", "")
      }

      dInitChar = splitDate[2].charAt(0)
      if (dInitChar === "0") {
        splitDate[2] = splitDate[2].replaceAll("0", "")
      }

      formattedDate = [splitDate[1], splitDate[2], splitDate[0]]
      fDate = formattedDate.join("/")
      break
  }
  return fDate
}

const eventToday = today => {
  let specificDate = formatDateTo(today, "yyyy-mm-dd")
  const evt = eventCollection.find({ date: specificDate }).fetch()
  return evt
}

const eventDays = event => {
  console.log(formatDateTo(event[0].date, "mm/dd/yyyy"))
  let days = []
  for (let i = 0; i < event.lenth; i++) {
    console.log(event[i].date)
    let fDate = formatDateTo(event[i].date, "mm/dd/yyy")
    days.push(fDate)
  }

  return days
}

const Calendar = () => {
  //const [evtToday, setEvtToday] = useState()
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

  const evt = eventCollection.find({}).fetch()

  if (evt.length != 0) {
    console.log("ello chum")
    const daysWithEvents = eventDays(evt)
    console.log(daysWithEvents)
  }

  return (
    <>
      <NavBar />
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
            //d.date != "" ? console.log(eventToday(d.date)) : console.log([]),
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

// {clicked && !eventForDate(clicked) && (
//   <NewEventModal
//     onClose={() => setClicked(null)}
//     onSave={title => {
//       setEvents([...events, { title, date: clicked }])
//       setClicked(null)
//     }}
//     clicked={clicked}
//   />
// )}

// {
//   clicked && eventForDate(clicked) && (
//     <DeleteEventModal
//       eventText={eventForDate(clicked).title}
//       onClose={() => setClicked(null)}
//       onDelete={() => {
//         setEvents(events.filter(e => e.date !== clicked))
//         setClicked(null)
//       }}
//     />
//   )
// }
