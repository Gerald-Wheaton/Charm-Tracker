import React from "react"
import Header from "../Header"

const Reports = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <Header title="Reports" />
      <form onSubmit={handleSubmit}>
        <p>Filter:</p>
        <label>
          <input type="radio" name="filter" value="date"></input>
          Date
        </label>

        <label>
          <input type="radio" name="filter" value="name"></input>
          Client Name
        </label>

        <label> 
          <input type="radio" name="filter" value="both"></input>
          Both
        </label>

        <br />

        {/* filters input */}
        <label className="dateFilter">Start Date:
          <input type="date" name="startDate"></input>
        </label>
        <label className="dateFilter">Stop Date:
          <input type="date" name="stopDate"></input>
        </label>

        <label className="nameFilter">Name
          <input type="text" name="clientName"></input>
        </label>

        <button>Search</button>
      </form>
    </div>
  )
}

export default Reports
