import React from "react"
import Header from "../Header"
import VendorType from "../VendorType"
import { vendorTypeCollection } from "../../api/vendorTypes"

const EditVendors = () => {

  // get list of vendor types from the vendor type db
  let vendors = vendorTypeCollection.find({}).fetch();

  return (
    <div>
      <Header title="Edit Vendors" />

      {/* render the vendortype form for each vendor type */}
      {vendors.map((vendor) => {
        <VendorType vendorTypeID={vendor._id} vendorTypeName={vendor.name} />
      })}
    </div>
  )
}

export default EditVendors
