import React, { useState } from "react";
import ContactDetailsForm from "../ContactDetailsForm";
import EventDetailsForm from "../EventDetailsForm";
import Header from "../Header";
import { eventCollection } from "../../api/events";

/* 
This component uses the ContactDetailsForm and the EventDetailsForm and wraps them in this component 
that adds some extra functionality such as beign able to select a returning customer and submitting.

Both form components are wrapped in a form component. This is an area that will need to be inspected as it may disrupt the way react handles the forms.
*/

const CreateNewEvent = () => {
  const [previousCustomer, setPreviousCustomer] = useState();
  // this will need some refactoring to pull the previous customers from the database and add them to selections
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let newEventDate = event.target.EventDetailsForm.date
    let newEventStartTime = event.target.EventDetailsForm.startTime
    let newEventEndTime = event.target.EventDetailsForm.stopTime
    let newEventPrice = event.target.EventDetailsForm.price
    console.log(newEvent)
    eventCollection.insert({
        createdAt: Date.now(),
        date: newEventDate,
        startTime : newEventStartTime,
        endTime : newEventEndTime,
        price : newEventPrice,
    });
    console.log("Event added")
  }
  
  return (
    <div>
      <Header title="Create New Event" />

      {/* section to select previous customers to autofill the contact details */}
      <div>
        <p>If this is a returning customer, select them from the list</p>
        <select
          name="customer"
          id="returning-customer"
          onChange={(event) => setPreviousCustomer(event.target.value)}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <ContactDetailsForm previousCustomer={previousCustomer} />
      <EventDetailsForm />
      <div>
        <button>Cancel</button>
        <button onClick={() => console.log(previousCustomer)}>Add Event</button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add Event</legend>
                <select name="addEvent" id="addEvents">
                    {events.map((event) => {
                        return (
                            <option key={event._id} value={event._id}>{event._id}</option>
                        )
                    })}
                </select>
                <button>Create Event</button>
            </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CreateNewEvent;
