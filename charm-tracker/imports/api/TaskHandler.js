import { taskCollection } from "./tasks";
import { eventCollection } from "./events";
import { vendorTypeCollection } from "./vendorTypes"
import { func } from "prop-types";


/* This serves as a analysis layer that will parse the events and generate the tasks. The task collection can then be read to 
notify the user about upcoming and unfinished tasks. */


// overarching function where event ID is passed in to parse the event data and generate tasks by calling sub-functions
function GenerateTasksFromEvent(eventID) {
    let event = eventCollection.findOne({_id: eventID}).fetch();
    // CreateTasksForVendors(event);
    PaymentReminder(event);
    FloorPlanReminder(event);
    MidMonthReminder();
    InsuranceReminder(event);
    FinalizeEventReminder(event);
}

/* Potentially a better way to do this but this is what we are going with for now */
// adds a task to the task collection for every vendor type currently in the system
function CreateTasksForVendors(event) {
    // converts the date into milliseconds
    let dueDate = Date.parse(event.date);
    // adds 30 days
    dueDate = dueDate + 2592000000; // 2592000000 is 30 days in milliseconds
    // creates new date object
    dueDate = new Date(dueDate);
    // converts to string
    dueDate = dueDate.toLocaleString();
    // splits date and time into an array
    dueDate = dueDate.split(",");
    // gets the first string in the array
    dueDate = dueDate[0];
    let vendorTypeList = vendorTypeCollection.find({}).fetch();
    vendorTypeList.forEach((vendor) => {
        taskCollection.insert({
            eventID: event._id,
            vendorTypeID: vendor._id,
            task: `Select ${vendor.name} for ${event.name.lastName}`,
            dueDate: dueDate,
            completed: false,
        })
        console.log(`Added task for ${vendor.name}`);
    })
}

// need to remove vendor tasks if vendor type removed

// need to add vendor types if vendor type removed

// creates a reminder for the payment 60 days before the date for the event
// includes balance
function PaymentReminder(event) {
    // converts the date into milliseconds
    let dueDate = Date.parse(event.date);
    // adds 30 days
    dueDate = dueDate + 5184000000; // 5184000000 is 60 days in milliseconds
    // creates new date object
    dueDate = new Date(dueDate);
    // converts to string
    dueDate = dueDate.toLocaleString();
    // splits date and time into an array
    dueDate = dueDate.split(",");
    // gets the first string in the array
    dueDate = dueDate[0];

}

// creates a reminder for floor plan review 30 days before the event
function FloorPlanReminder(event) {
    // converts the date into milliseconds
    let dueDate = Date.parse(event.date);
    // adds 30 days
    dueDate = dueDate + 2592000000; // 2592000000 is 30 days in milliseconds
    // creates new date object
    dueDate = new Date(dueDate);
    // converts to string
    dueDate = dueDate.toLocaleString();
    // splits date and time into an array
    dueDate = dueDate.split(",");
    // gets the first string in the array
    dueDate = dueDate[0];

}

// handles the reminders at the 15th of each month
function MidMonthReminder() {

}


// handles the reminders about insurance for events 30 days before the events
function InsuranceReminder(event) {
    // converts the date into milliseconds
    let dueDate = Date.parse(event.date);
    // adds 30 days
    dueDate = dueDate + 2592000000; // 2592000000 is 30 days in milliseconds
    // creates new date object
    dueDate = new Date(dueDate);
    // converts to string
    dueDate = dueDate.toLocaleString();
    // splits date and time into an array
    dueDate = dueDate.split(",");
    // gets the first string in the array
    dueDate = dueDate[0];
}


// handles the reminders for finalizing the event 14 days before the event
function FinalizeEventReminder(event) {
    
}

