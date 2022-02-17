import React from "react";

const EventDetailsForm = () => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Event Details</legend>
          <div>
            <label>
              Date
              <input type="date" id="date" name="date"></input>
            </label>
          </div>
          <div>
            <label>
              Start Time
              <input type="time" id="startTime" name="startTime"></input>
            </label>
          </div>
          <div>
            <label>
              Start Time
              <input type="time" id="stopTime" name="stopTime"></input>
            </label>
          </div>
          <div>
            <label>
              Price of Event
              <input type="input" id="price" name="price"></input>
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default EventDetailsForm;
