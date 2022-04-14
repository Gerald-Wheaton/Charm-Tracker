import { ConstructionOutlined } from "@mui/icons-material"
import React from "react"
import { eventCollection } from "../../api/events"

export const Day = ({ day, onClick, evtsToday }) => {
  const className = `day ${day.value === "padding" ? "padding" : ""} ${
    day.isCurrentDay ? "currentDay" : ""
  }`

  // if (evtsToday.length != 0) {
  //   console.log(evtsToday.map((e, index) => e.email))
  // } else {
  //   console.log("")
  // }
  return (
    <div onClick={onClick} className={className}>
      {day.value === "padding" ? "" : day.value}

      {evtsToday.length != 0 && (
        <div className="event">
          {evtsToday.map((e, index) => e.name.firstName)}
        </div>
      )}
    </div>
  )
}
