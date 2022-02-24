import React from "react";
import { vendorCollection } from "../api/vendors";

// will output the list of vendors of that type along with an input to add more and the ability to delete current vendors
const VendorTypeList = (props) => {
  const { vendorTypeID, vendorTypeName } = props;
  console.log("hello from vendor type list")
  console.log("vendorTypeID: ", vendorTypeID)
  console.log("VendorTypeName: ", vendorTypeName)

  // get the vendors with the passed in type
  let vendors = vendorCollection.find({ vendorType: vendorTypeID }).fetch();

  // return the component
  return (
    <div>
      <form>
        <fieldset className="vendor">
          <legend>{vendorTypeName}</legend>

          {/* render the names of the vendors along with the delete functions for them */}
          {vendors.map((vendor) => {
            return (
              <div key={vendor._id}>
                <button
                  onClick={() => {
                    vendorCollection.remove({ _id: vendor._id });
                  }}
                >
                  X
                </button>
                {vendor.name}
              </div>
            );
          })}

          {/* input and submit vendor names */}
          <input type="text" name="vendorName" />
          <button
            onClick={(event) => {
              event.preventDefault();
              let newVendor = event.target.vendorName.value;
              if (newVendor) {
                event.target.topicFromForm.value = "";
                vendorCollection.insert({
                  createdAt: Date.now(),
                  name: newVendor,
                  type: vendorTypeID,
                });
              }
            }}
          >
            Add {vendorTypeName}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default VendorTypeList;
