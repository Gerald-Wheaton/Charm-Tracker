import React from "react";
import { eventCollection } from "../../api/events";
import Header from "../Header";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RemoveEvents = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let removedVendorType = event.target.removeVendorName.value;
    if (removedVendorType) {
      event.target.removeVendorName.value = "";
      vendorTypeCollection.remove({ _id: removedVendorType });
      console.log("Vendor Type removed");
    }
  };

  // get the vendor types
  let events = eventCollection.find({}).fetch();

  return (
    <div>
      <Header title="Remove Event" />
      <div>
        <form onSubmit={handleSubmit}>
          <p>Select the event you want to remove</p>
          <select name="removeVendorName" id="removeVendorNames">
            {events.map((event) => {
              return (
                <option key={event._id} value={event._id}>
                  {event.name}
                </option>
              );
            })}
          </select>
          <p>Enter password to confirm removal</p>
          <input type="text" name="confirmPassword"></input>
          <Link to="/calendar" className="cancel-button">
            Cancel
          </Link>
          <button>Remove event</button>
        </form>
      </div>
    </div>
  );
};

export default RemoveEvents;
