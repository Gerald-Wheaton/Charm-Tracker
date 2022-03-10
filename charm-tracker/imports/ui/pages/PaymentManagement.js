import React, { useState } from "react";
import ReactDom from 'react-dom';
import Header from "../Header"
import { clientCollection } from "../../api/clients"
import { eventCollection } from "../../api/events";

const PaymentManagement = () => {
  const [client, setClient] = useState();

  const getData = (event) => {
    let element = <p>No event selected</p>
    if (event.target.value != "") {
      let clientevent = eventCollection.find({ _id: event.target.value }).fetch()
      setClient(event.target.value)
      let price = clientevent[0].price
      if (price.charAt(0) == '$') {
        price = price.substr(1);
      }
      price = parseFloat(price)
      console.log(price, "Price")
      element = <p>$ {clientevent[0].price}</p>
      ReactDom.render(element, document.getElementById('eventCost'));

      if (clientevent[0].amountPaid != undefined) {
        // they have made a previous payment
        let amountPaidElement = <p>$ {clientevent[0].amountPaid}</p>
        ReactDom.render(amountPaidElement, document.getElementById('paid'));
      } else {
        // no paymnets have been made
        let amountPaidElement = <p>$ 0.00</p>
        ReactDom.render(amountPaidElement, document.getElementById('paid'));
      }
    } else {
      ReactDom.render(element, document.getElementById('eventCost'));
    }
  }

  const handleDeposit = (event) => {
    event.preventDefault()

    if (event.target.value != "") {
      let deposit = event.target.depositAmount.value
      event.target.depositAmount.value = ""
      if (deposit.charAt(0) == '$') {
        deposit = deposit.substr(1);
      }
      deposit = parseFloat(deposit)
      if (!isNaN(deposit)) {
        let currentEvent = eventCollection.find({ _id: client }).fetch();
        if (currentEvent[0].amountPaid != undefined) {
          eventCollection.update({ _id: client }, { $inc: { amountPaid: deposit } })
        } else {
          eventCollection.update({_id: client}, {$set:{ amountPaid: deposit }})
        }
        currentEvent = eventCollection.find({ _id: client }).fetch();
        let amountPaidElement = <p>$ {currentEvent[0].amountPaid}</p>
        ReactDom.render(amountPaidElement, document.getElementById('paid'));
      }
      else {
        ReactDom.render(<p>Not a valid input</p>, document.getElementById('error'))
      }
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
      <div id="error"></div>
      <form onSubmit={handleDeposit}>
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
