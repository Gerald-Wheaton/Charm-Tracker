import { taskCollection } from "../tasks"
import { eventCollection } from "../events"
import { vendorTypeCollection } from "../vendorTypes"
import { func } from "prop-types"
import remind from "./remindMethods"

/* This serves as a analysis layer that will parse the events and generate the tasks. The task collection can then be read to 
notify the user about upcoming and unfinished tasks. */

// overarching function where event ID is passed in to parse the event data and generate tasks by calling sub-functions
function GenerateTasksFromEvent(eventID) {
  let event = eventCollection.find({}).fetch()
  console.log(event)

  const haveData =
    event.length != 0 /*&& typeof event != undefined*/ ? true : false

  if (haveData) {
    let evt = event[0]
    CreateTasksForVendors(event)

    PaymentReminder(evt)
    FloorPlanReminder(evt)
    MidMonthReminder()
    InsuranceReminder(evt)
    FinalizeEventReminder(evt)
  } else {
    console.log("no data loaded")
  }
}

/* Potentially a better way to do this but this is what we are going with for now */
// adds a task to the task collection for every vendor type currently in the system
function CreateTasksForVendors(event) {
  // remind 30 days before
  let date = remind.onThirty(event.date)

  let vendorTypeList = vendorTypeCollection.find({}).fetch()
  vendorTypeList.forEach(vendor => {
    taskCollection.insert({
      eventID: event._id,
      vendorTypeID: vendor._id,
      task: `Select ${vendor.name} for ${event.name.lastName}`,
      dueDate: date,
      completed: false,
    })
    console.log(`Added task for ${vendor.name}`)
  })
}

// need to remove vendor tasks if vendor type removed

// need to add vendor types if vendor type removed

// creates a reminder for the payment 60 days before the date for the event
// includes balance
function PaymentReminder(event) {
  // remind 60 days before
  let date = remind.onSixty(event.date)

  taskCollection.insert({
    eventID: event._id,
    task: `Payment due for ${event.name.firstName} ${event.name.lastName}`,
    dueDate: date,
    completed: false,
  })
}

// creates a reminder for floor plan review 30 days before the event
function FloorPlanReminder(event) {
  // remind 14 days before
  let date = remind.onFourteen(event.date)

  taskCollection.insert({
    eventID: event._id,
    task: `Review floor plan with ${event.name.firstName} ${event.name.lastName}`,
    dueDate: date,
    completed: false,
  })
}

// handles the reminders at the 15th of each month
function MidMonthReminder() {}

// handles the reminders about insurance for events 30 days before the events
function InsuranceReminder(event) {
  // remind 30 days before
  let date = remind.onThirty(event.date)

  taskCollection.insert({
    eventID: event._id,
    task: `Insurance due for ${event.name.firstName} ${event.name.lastName}`,
    dueDate: date,
    completed: false,
  })
}

// handles the reminders for finalizing the event 14 days before the event
function FinalizeEventReminder(event) {
  // remind 14 days before
  let date = remind.onFourteen(event.date)

  taskCollection.insert({
    eventID: event._id,
    task: `Finalize event for ${event.name.firstName} ${event.name.lastName}`,
    dueDate: date,
    completed: false,
  })
}

export default GenerateTasksFromEvent
