import React from "react"

const ContactDetailsForm = () => {
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Contact Details</legend>
                    <div>
                        <label for="fname">First Name</label><br />
                        <input type="input" id="fname" name="fname"></input>
                    </div>
                    <div>
                        <label for="lname">Last Name</label><br />
                        <input type="input" id="lname" name="lname"></input>
                    </div>
                    <div>
                        <label for="email">Email</label><br />
                        <input type="email" id="email" name="email"></input>
                    </div>
                    <div>
                        <label for="phoneNum">Phone Number</label><br />
                        <input type="input" id="PhoneNum" name="PhoneNum"></input>
                    </div>
                    <div>
                        <label for="address">Address</label><br />
                        <input type="input" id="address" name="address"></input>
                    </div>
                    <div>
                        <label for="city">City</label><br />
                        <input type="input" id="city" name="city"></input>
                    </div>
                    <div>
                        <label for="state">State</label><br />
                        <input type="input" id="state" name="state"></input>
                    </div>
                    <div>
                        <label for="zip">Zip</label><br />
                        <input type="input" id="zip" name="zip"></input>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default ContactDetailsForm