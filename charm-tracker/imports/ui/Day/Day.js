import { ConstructionOutlined } from "@mui/icons-material"
import React from "react"
import { eventCollection } from "../../api/events"

const Event = title => {
  console.log(title)
  return <div className="event">{title.title}</div>
}

export const Day = ({ day, onClick, evtsToday }) => {
  const className = `day ${day.value === "padding" ? "padding" : ""} ${
    day.isCurrentDay ? "currentDay" : ""
  }`

  // if (evtsToday.length != 0) {
  //   evtsToday.map((e, index) => console.log(e.email))
  // }
  return (
    <div onClick={onClick} className={className}>
      {day.value === "padding" ? "" : day.value}

      {evtsToday.length !== 0 ? (
        <div>
          {React.Children.toArray(
            evtsToday.map((e, index) => <Event title={e.email} />)
          )}
        </div>
      ) : null}
    </div>
  )
}