import React from "react";

/* 
The header component is called on all internal pages and it is passed a title prop that it renders along with the logo.
*/

const EventReports = (props) => {
    const { reports } = props;
    return (
        <div>
            {
                reports.map((event) => {
                    return (
                        <ul key={event._id}>
                            <li>Name: {event.name.firstName} {event.name.lastName}</li>
                            <li>Email: {event.email}</li>
                            <li>Date: {event.date}</li>
                            <li>Start Time: {event.startTime}</li>
                            <li>Stop Time: {event.stopTime}</li>
                            <li>Price: {event.price}</li>
                        </ul>
                    );
                })
            }
        </div>
    );
};

export default EventReports;