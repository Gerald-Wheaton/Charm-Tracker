import React from "react"
import { vendorTypeCollection } from "../api/vendorTypes"

// form for adding vendor types
// should result in a separate form rendering for the vendor type that was added
const AddVendorType = () => {


    const handleSubmit = (event) => {
        event.preventDefault()
        let newVendorType = event.target.vendorTypeName.value; // FIXME error is appearing here. says cannot read value of undefined
        if (newVendorType) {
            event.target.vendorTypeName.value = "";
            vendorTypeCollection.insert({
                createdAt: Date.now(),
                name: newVendorType,
            });
        }
    }

    return (
        <div>
            <form>
                <fieldset>
                    <legend>Add Vendor Type</legend>
                    <input type="text" name="vendorTypeName"></input>
                    <button onClick={handleSubmit}>Add Vendor Type</button>
                </fieldset>
            </form>
        </div>
    )
}

export default AddVendorType