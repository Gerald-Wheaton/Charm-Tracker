import React from "react"
import ReactDom from 'react-dom';
import Header from "../Header"
import { clientCollection } from "../../api/clients"
import { eventCollection } from "../../api/events";

const PaymentManagement = () => {

  const getData = (event) => {
    let element = <p>No event selected</p>
    if (event.target.value != "") {
      let clientevent = eventCollection.find({ _id: event.target.value }).fetch()
      console.log(clientevent[0].price, "Price")
      element = <p>$ {clientevent[0].price}</p>
      ReactDom.render(element, document.getElementById('eventCost'));

    } else {
      ReactDom.render(element, document.getElementById('eventCost'));
    }
    
  }

  let events = eventCollection.find({}).fetch();


  return (
    <div>
      <Header title="Payment Management" />
      <select
        name="customer"
        id="customer"
        onChange={getData}
        defaultValue=""
      >
        <option value="" ></option>
        {events.map((event) => {
          return (
            <option key={event._id} value={event._id}>
              {event.name.firstName} {event.name.lastName} {event.date}
            </option>
          );
        })}
      </select>
      <p>New deposit:</p>
      <form>
        <input type="text" name="depositAmount" />
        <button>Submit</button>
      </form>
      <div>
        <table>
          <tbody>
          <tr>
            <td>
              Event Cost:
            </td>
            <td id="eventCost">
              {/* will render the amount that the event costs */}
            </td>
          </tr>
          <tr>
            <td>
              Amount Paid:
            </td>
            <td id="paid">
              {/* will render the total amount paid on this event */}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentManagement
