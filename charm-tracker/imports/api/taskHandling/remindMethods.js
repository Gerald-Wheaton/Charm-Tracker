import React from "react"

//new Date(dueDate).toLocaleString().split(",")[0] ===
// dueDate = dueDate.toLocaleString()
// dueDate = dueDate.split(",")
// dueDate = dueDate[0]

const remind = {
  onFourteen: date => {
    let dueDate = Date.parse(date)
    dueDate = dueDate - 1209600000
    dueDate = Date(dueDate)
    const due = new Date(dueDate).toLocaleString().split(",")
    return due[0]
  },
  onThirty: date => {
    let dueDate = Date.parse(date)
    dueDate = dueDate - 2592000000
    dueDate = Date(dueDate)
    const due = new Date(dueDate).toLocaleString().split(",")
    return due[0]
  },
  onSixty: date => {
    let dueDate = Date.parse(date)
    dueDate = dueDate - 5184000000
    dueDate = dueDate.toString() //Date(dueDate)
    const due = new Date(dueDate).toLocaleString().split(",")
    return due[0]
  },
}

export default remind
