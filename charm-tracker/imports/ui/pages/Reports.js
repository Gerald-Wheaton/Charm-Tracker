import React from "react"
import Header from "../Header"
import { eventCollection } from "../../api/events";
import { clientCollection } from "../../api/clients";
import ClientReport from "../ClientReport";
import EventReports from "../EventReports";
import ReactDom from "react-dom";
import NavBar from "../NavBar";

const Reports = () => {

  // stores report info from event collection
  let report = []

  // stores report info from client collection
  let clientReport = []

  const handleSubmit = (event) => {
    event.preventDefault()
    let eventsDebug = eventCollection.find({}).fetch()
    console.log(eventsDebug)
    console.log(event.target.filter.value)
    if (event.target.filter.value == "date") {
      let startDate = event.target.startDate.value
      let stopDate = event.target.stopDate.value
      report = eventCollection.find({ date: { $gt: startDate, $lt: stopDate}}).fetch()
      
      //render
      let eventReportEl = <EventReports reports={report} />
      ReactDom.render(eventReportEl, document.getElementById('eventReports'));

    } else if (event.target.filter.value == "email") {
      clientReport = clientCollection.find({ email: event.target.clientEmail.value }).fetch()
      console.log("id", clientReport[0]._id)
      report = eventCollection.find({clientID: clientReport[0]._id}).fetch()

      //render
      let clientReportEl = <ClientReport reports={clientReport} />
      let eventReportEl = <EventReports reports={report} />
      ReactDom.render(clientReportEl, document.getElementById('reports'));
      ReactDom.render(eventReportEl, document.getElementById('eventReports'));

    } else if (event.target.filter.value == "both") {
      clientReport = clientCollection.find({ email: event.target.clientEmail.value }).fetch()
      report = eventCollection.find({ $and: [
        { clientID: clientReport[0]._id},
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
    console.log(report)
  }

  return (
    <div>
      <NavBar />
      <Header title="Reports" />
      <form onSubmit={handleSubmit}>
        <div class= "filter">
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
        </div>
        <br />

        {/* filters input */}
        <label class="dateFilter">Start Date:
          <input type="date" class= "startDate" name="startDate"></input>
        </label>
        <label className="dateFilter">Stop Date:
          <input type="date" class= "stopDate" name="stopDate"></input>
        </label>

        <label className="nameFilter">Email
          <input class="email" type="text" name="clientEmail"></input>
        </label>

        <button class= "search">Search</button>
      </form>

      {/* reports rendered here */}

      <div id="reports"></div>
      <div id="eventReports"></div>

      {/* print button */}
      <button onClick={() =>window.print()}>Print this page</button>
    </div>
  )
}

export default Reports
