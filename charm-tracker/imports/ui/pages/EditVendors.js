import React from "react"
import Header from "../Header"
import VendorTypeList from "../VendorTypeList"
import { vendorTypeCollection } from "../../api/vendorTypes"
import AddVendorType from "../AddVendorTypes"

const EditVendors = () => {

  // get list of vendor types from the vendor type db
  let vendors = vendorTypeCollection.find({}).fetch();

  return (
    <div>
      <Header title="Edit Vendors" />

      {/* render the vendortype form for each vendor type */}
      {vendors.map((vendor) => {
        return(
          <VendorTypeList key={vendor._id} vendorTypeID={vendor._id} vendorTypeName={vendor.name} /> /* error appearing here*/
        )
      })}

      {/* Form for adding vendor types */}
      <AddVendorType />
    </div>
  )
}

export default EditVendors
