# Charm-Tracker
****************
Charm Tracker keeps track of events, including the tasks needed to host an event, timing and payment for an event, and vendors needed to run the event. Users are updated on deadlines through email and an in app notification. Reports can be run about specific events.

Up to date as of: 4/19/22

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Contact Info](#contact-info)

## General Info
Current Version: 0.30
* A stable internet connection is needed to access the Charm Tracker.
* Payment information stores calculations only, no actual electronic payment is taken/stored.


## Technologies
### Packages used:
* [@babel/runtime](https://babeljs.io/docs/en/babel-runtime) - version 7.15.4
* [bcrypt](https://www.npmjs.com/package/bcrypt) - version 5.0.1
* [cors](https://www.npmjs.com/package/cors) - version 2.8.5
* [express](https://www.npmjs.com/package/express) - version 4.17.2
* [firebase](https://www.npmjs.com/package/firebase) - version 9.6.10
* [@emotion/styled](https://www.npmjs.com/package/@emotion/styled) - version 11.8.1
* [@fortawesome/fontawesome-svg-core](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core) - version 6.1.1
* [@fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons) - version 6.1.1
* [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) - version 0.1.18
* [@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material) - version 5.6.1
* [@mui/material](https://www.npmjs.com/package/@mui/material) - version 5.6.1
* [material-ui](https://www.npmjs.com/package/@material-ui/core) - version 0.20.2
* [meteor-node-stubs](https://github.com/meteor/node-stubs) - version 1.1.0
* [prop-types](https://www.npmjs.com/package/prop-types) - version 15.8.1
* [react](https://www.npmjs.com/package/react) - version 17.0.2
* [react-dom](https://www.npmjs.com/package/react-dom) - version 17.0.2
* [react-fontawesome](https://www.npmjs.com/package/react-fontawesome) - version 1.7.1
* [react-grid-system](https://www.npmjs.com/package/react-grid-system) - version 8.1.3
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - version 5.2.0
* [react-toastify](https://www.npmjs.com/package/react-toastify) - version 8.2.0
* [react-spinners](https://www.npmjs.com/package/react-spinners) - version 0.11.0
* [simpl-schema](https://www.npmjs.com/package/simpl-schema) - version 1.12.0
* [sweetalert2](https://www.npmjs.com/package/sweetalert2) - version 11.4.4
* [validator](https://www.npmjs.com/package/validator) - version 13.7.0

### Components:
* Login Page - Handles user authentication and password retrieval.
* Vendor Input - Handles adding and removing vendors, adding and removing vendor types, and uploading new additions or changes to the internal MongoDB.
* Event Input - Handles creating a new event, including contact info of client and event details like location and price, and includes uploading to MongoDB.
* Report Generation - Handles queries that search the MongoDB for data by searching a date range, name of event, or both. Report output is printed to the screen.
* Edit Event - Handles editing existing events in the MongoDB. Event information is edited here, not contact info (PENDING).
* Calendar - Handles viewing of events on a calendar, as well as showing upcoming tasks that need to be done for the day and tasks associated with the event selected from the calendar.
* Activity Stream - Gives a greater view of upcoming tasks for users to complete, including past due, upcoming, and today's tasks.

## Contact Info
Team Members: Emily Port, Ryan Lumbert, Gerald Wheaton, Marley Jenkins, and Nick Casale
Who to Contact: Winthrop College of Business
