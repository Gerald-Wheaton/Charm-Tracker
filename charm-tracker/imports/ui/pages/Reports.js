import React from "react"
import Header from "../Header"
import { eventCollection } from "../../api/events";
import { clientCollection } from "../../api/clients";
import ClientReport from "../ClientReport";
import EventReports from "../EventReports";
import ReactDom from "react-dom";

const Reports = () => {

  // stores report info from event collection
  let report = []

  // stores report info from client collection
  let clientReport = []

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.filter.value)
    if (event.target.filter.value == "date") {
      let startDate = event.target.startDate.value
      let stopDate = event.target.stopDate.value
      report = eventCollection.find({ date: { $gt: startDate, $lt: stopDate}}).fetch()
      
      //render
      let eventReportEl = <EventReports reports={report} />
      ReactDom.render(eventReportEl, document.getElementById('eventReports'));

    } else if (event.target.filter.value == "email") {
      report = eventCollection.find({email: event.target.clientEmail.value}).fetch()
      clientReport = clientCollection.find({ email: event.target.clientEmail.value }).fetch()

      //render
      let clientReportEl = <ClientReport reports={clientReport} />
      let eventReportEl = <EventReports reports={report} />
      ReactDom.render(clientReportEl, document.getElementById('reports'));
      ReactDom.render(eventReportEl, document.getElementById('eventReports'));

    } else if (event.target.filter.value == "both") {
      clientReport = clientCollection.find({ email: event.target.clientEmail.value }).fetch()
      report = eventCollection.find({ $and: [
        {email: event.target.clientEmail.value},
        { date: { $gt: startDate, $lt: stopDate }},
      ]}).fetch()

      //render
      let clientReportEl = <ClientReport reports={clientReport} />
      let eventReportEl = <EventReports reports={report} />
      ReactDom.render(clientReportEl, document.getElementById('reports'));
      ReactDom.render(eventReportEl, document.getElementById('eventReports'));

    } else {
      console.log("error, no filter selected")
    }
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
          <input type="radio" name="filter" value="email"></input>
          Email
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
          <input type="text" name="clientEmail"></input>
        </label>

        <button>Search</button>
      </form>

      {/* reports rendered here */}

      <div id="reports"></div>
      <div id="eventReports"></div>

      
    </div>
  )
}

export default Reports
