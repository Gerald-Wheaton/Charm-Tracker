import React from "react";

const ContactDetailsForm = (props) => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Contact Details</legend>
          <div>
            <label>
              First Name
              <input type="input" id="fname" name="fname" value={props.previousCustomer}></input>
            </label>
          </div>
          <div>
            <label>
              Last Name
              <input type="input" id="lname" name="lname"></input>
            </label>
          </div>
          <div>
            <label>
              Email
              <input type="email" id="email" name="email"></input>
            </label>
          </div>
          <div>
            <label>
              Phone Number
              <input type="input" id="PhoneNum" name="PhoneNum"></input>
            </label>
          </div>
          <div>
            <label>
              Address
              <input type="input" id="address" name="address"></input>
            </label>
          </div>
          <div>
            <label>
              City
              <input type="input" id="city" name="city"></input>
            </label>
          </div>
          <div>
            <label>
              State
              <input type="input" id="state" name="state"></input>
            </label>
          </div>
          <div>
            <label>
              Zip
              <input type="input" id="zip" name="zip"></input>
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactDetailsForm;
