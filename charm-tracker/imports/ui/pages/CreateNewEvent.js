import React, { useState } from "react";
import ContactDetailsForm from "../ContactDetailsForm";
import EventDetailsForm from "../EventDetailsForm";
import Header from "../Header";

/* 
This component uses the ContactDetailsForm and the EventDetailsForm and wraps them in this component 
that adds some extra functionality such as beign able to select a returning customer and submitting.

Both form components are wrapped in a form component. This is an area that will need to be inspected as it may disrupt the way react handles the forms.
*/

const CreateNewEvent = () => {
  const [previousCustomer, setPreviousCustomer] = useState();
  // this will need some refactoring to pull the previous customers from the database and add them to selections
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

      <div className="ContactDetails">
        <form>
          <fieldset className="ContactDetails">
            <legend>Contact Details</legend>
            <div>
              <label>
                First Name <br />
                <input
                  type="input"
                  id="fname"
                  name="fname"
                  defaultValue={previousCustomer}
                ></input>
              </label>
            </div>
            <div>
              <label>
                Last Name <br />
                <input type="input" id="lname" name="lname"></input>
              </label>
            </div>
            <div>
              <label>
                Email <br />
                <input type="email" id="email" name="email"></input>
              </label>
            </div>
            <div>
              <label>
                Phone Number <br />
                <input type="input" id="PhoneNum" name="PhoneNum"></input>
              </label>
            </div>
            <div>
              <label>
                Address <br />
                <input type="input" id="address" name="address"></input>
              </label>
            </div>
            <div>
              <label>
                City <br />
                <input type="input" id="city" name="city"></input>
              </label>
            </div>
            <div>
              <label>
                State <br />
                <input type="input" id="state" name="state"></input>
              </label>
            </div>
            <div>
              <label>
                Zip <br />
                <input type="input" id="zip" name="zip"></input>
              </label>
            </div>
          </fieldset>

          <fieldset className="EventDetails">
            <legend>Event Details</legend>
            <div>
              <label>
                Date <br />
                <input type="date" id="date" name="date"></input>
              </label>
            </div>
            <div>
              <label>
                Start Time <br />
                <input type="time" id="startTime" name="startTime"></input>
              </label>
            </div>
            <div>
              <label>
                Start Time <br />
                <input type="time" id="stopTime" name="stopTime"></input>
              </label>
            </div>
            <div>
              <label>
                Price of Event <br />
                <input type="input" id="price" name="price"></input>
              </label>
            </div>
          </fieldset>
        </form>

        <div>
          <button>Cancel</button>
          <button onClick={() => console.log(previousCustomer)}>
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewEvent;
