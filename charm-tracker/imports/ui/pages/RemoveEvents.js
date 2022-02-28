import React from "react";
import { eventCollection } from "../../api/events";
import Header from "../Header";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
//need to create/import user collection

const RemoveEvents = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    let userPassword = "Danita";
    //popup to confirm password
    const { value: password } = Swal.fire({
      title: "Enter password to confirm removal",
      input: "text",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
        return new Promise((resolve) => {
          if (value == userPassword) {
            let removedEvent = event.target.removeEvent.value;
            if (removedEvent) {
              event.target.removeEvent.value = "";
              eventCollection.remove({ _id: removedEvent });
              console.log("Event removed");
            }
            resolve();
          } else {
            resolve("Password was not correct");
          }
        });
      },
    });
  };

  // get the vendor types
  let events = eventCollection.find({}).fetch();

  return (
    <div>
      <Header title="Remove Event" />
      <div>
        <form onSubmit={handleSubmit}>
          <p>Select the event you want to remove</p>
          <select name="removeEvent" id="removeEvent">
            {events.map((event) => {
              return (
                <option key={event._id} value={event._id}>
                  {event.name}
                </option>
              );
            })}
          </select>
          {/* <p>Enter password to confirm removal</p>
          <input type="text" name="confirmPassword"></input> */}
          <div>
            <Link to="/calendar" className="cancel-button">
              Cancel
            </Link>
            <button>Remove event</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RemoveEvents;
