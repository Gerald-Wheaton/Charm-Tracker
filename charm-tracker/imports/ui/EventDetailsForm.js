import React from "react"

const EventDetailsForm = () => {
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Event Details</legend>
                    <div>
                        <label for="date">Date</label><br />
                        <input type="date" id="date" name="date"></input>
                    </div>
                    <div>
                        <label for="startTime">Start Time</label><br />
                        <input type="time" id="startTime" name="startTime"></input>
                    </div>
                    <div>
                        <label for="stopTime">Start Time</label><br />
                        <input type="time" id="stopTime" name="stopTime"></input>
                    </div>
                    <div>
                        <label for="price">Price of Event</label><br />
                        <input type="input" id="price" name="price"></input>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default EventDetailsForm