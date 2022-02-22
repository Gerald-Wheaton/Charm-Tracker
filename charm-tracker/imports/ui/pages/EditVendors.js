import React from "react"
import Header from "../Header"
import VendorType from "../VendorType"
import { vendorTypeCollection } from "../../api/vendorTypes"

const EditVendors = () => {

  // get list of vendor types from the vendor type db
  let vendors = vendorTypeCollection.find({}).fetch();


  // render the vendortype form for each vendor type
  function renderVendors(passed_vendors) {
    passed_vendors.map((vendor) => {
      return <VendorType vendorTypeID={vendor._id} vendorTypeName={vendor.name} />
    });
  }


  return (
    <div>
      <Header title="Edit Vendors" />
      {renderVendors(vendors)}
    </div>
  )
}

export default EditVendors
