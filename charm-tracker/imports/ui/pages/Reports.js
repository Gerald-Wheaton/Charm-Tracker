import React from "react"
import Header from "../Header"

const Reports = () => {
  return (
    <div>
      <Header title="Reports" />
      <form>
        Filter:
        <input type="radio" name="filter" value="date">Date Range</input>
        <input type="radio" name="filter" value="name">Name</input>
        <input type="radio" name="filter" value="both">Both</input>
      </form>
    </div>
  )
}

export default Reports
