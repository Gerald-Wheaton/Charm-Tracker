import React from "react";
import { vendorCollection } from "../api/vendors";

const VendorSelectionModal = (props) => {
    const { vendorTypeID } = props

    let vendors = vendorCollection.find({ type: vendorTypeID }).fetch();

    // return the component
    return (
        <div class="certainVendors">
            <fieldset className="vendor">
                <legend>{vendorTypeName}</legend>

                {/* render the names of the vendors along with the delete functions for them */}
                {vendors.map((vendor) => {
                    return (
                        <div key={vendor._id}></div>
                        );
                    })
                }
            </fieldset>
        </div>
    )
}

export default VendorSelectionModal