import React from "react"
import { eventCollection } from "../api/events"
import { vendorCollection } from "../api/vendors"
import { vendorTypeCollection } from "../api/vendorTypes"
import { Route, Redirect } from "react-router-dom";

const VendorSelectionModal = (props) => {
  const { vendorType, eventID } = props

  const closeModal = () => {
      document.getElementById("modal-holder").style.display = "none"
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let selectedVendor = event.target.VendorName.value;

    // update the value for the vendor on the event data
    eventCollection.update({_id: eventID}, {$set : {[vendorType]: selectedVendor}});
    console.log(eventCollection.find({_id: eventID}).fetch())
    closeModal();
  }

  let NewvendorType = vendorTypeCollection.find({name: vendorType}).fetch()
  let vendors = vendorCollection.find({ type: NewvendorType[0]._id }).fetch()

  // return the component
  return (
    <div class="certainVendors" id="myModal">
      <div className="modal-content">
        <span className="close" onClick={() => closeModal()}>&times;</span>
        <form onSubmit={handleSubmit}>
              <select name="VendorName" id="removeVendorNames">
                  {vendors.map((vendor) => {
                      return (
                          <option key={vendor._id} value={vendor.name}>
                              {vendor.name}
                          </option>
                      );
                  })}
              </select>
              <button>Submit</button>
              </form>
      </div>
    </div>
  )
}

export default VendorSelectionModal
