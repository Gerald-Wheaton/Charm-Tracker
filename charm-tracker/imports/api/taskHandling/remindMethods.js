import React from "react"

// subtract offset of one day (86400000) in milliseconds
// this is due to date formatting conflicts.
const remind = {
  onFourteen: date => {
    let dueDate = Date.parse(date)
    dueDate = dueDate - (1209600000 - 86400000)
    const due = new Date(dueDate).toLocaleString().split(",")
    return due[0]
  },
  onThirty: date => {
    let dueDate = Date.parse(date)
    dueDate = dueDate - (2592000000 - 86400000)
    const due = new Date(dueDate).toLocaleString().split(",")
    return due[0]
  },
  onSixty: date => {
    let dueDate = Date.parse(date)
    dueDate = dueDate - (5184000000 - 86400000)
    const due = new Date(dueDate).toLocaleString().split(",")
    return due[0]
  },
  onFifteenth: () => {
    let dueDate = new Date()
    dueDate = dueDate.setDate(15)
    const due = new Date(dueDate).toLocaleString().split(",")
    return due[0]
  },
}

export default remind
