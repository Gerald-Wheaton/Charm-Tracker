import React from "react"
import Header from "../Header"
import VendorType from "../VendorType"
import { vendorCollection } from "../../api/vendors"

const EditVendors = () => {

  let vendors = vendorCollection.find({ post: postID }, { sort: { votes: -1 } }).fetch();
  return (
    <div>
      <Header title="Edit Vendors" />
    </div>
  )
}

export default EditVendors
