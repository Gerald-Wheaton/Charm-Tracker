import { ConstructionOutlined } from "@mui/icons-material"
import React from "react"
import { eventCollection } from "../../api/events"

export const Day = ({ day, onClick }) => {
  const className = `day ${day.value === "padding" ? "padding" : ""} ${
    day.isCurrentDay ? "currentDay" : ""
  }`

  return (
    <div onClick={onClick} className={className}>
      {day.value === "padding" ? "" : day.value}

      {day.event && <div className="event">{day.event.title}</div>}
    </div>
  )
}
