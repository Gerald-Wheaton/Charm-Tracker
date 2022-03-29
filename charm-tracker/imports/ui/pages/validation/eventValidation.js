import React, { useState } from "react"
import validator from "validator"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// const tellUserTheyDumb = () => {
//   const options = {
//     autoClose: 3000,
//     className: "",
//     position: toast.POSITION.TOP_RIGHT,
//   }
//   toast.warn("Enter valid input you THOT", options)
// }

const stripPrice = data => {
  let price = data.price.value

  let strippedPrice =
    price.includes("$") || price.includes(",")
      ? price.replaceAll("$", "").replaceAll(",", "")
      : price

  return strippedPrice
}

const validatePrice = data => {
  let price = stripPrice(data)
  if (isNaN(data.price.value)) {
    return ""
  }
  return price
}

const validateZip = data => {
  // define zipcode as regular expressions
  let fiveDigZip = new RegExp("^[0-9]{5}$")
  let nineDigZip = new RegExp("^[0-9]{5}[-][0-9]{5}$")

  if (!fiveDigZip.test(data.zip.value) && !nineDigZip.test(data.zip.value)) {
    return ""
  }

  return data.zip.value
}

const validatePhone = data => {
  if (!validator.isMobilePhone(data.PhoneNum.value)) {
    console.log("Invalid phone number format")
    return ""
  }
  return data.PhoneNum.value
}

const validateEmail = data => {
  if (!validator.isEmail(data.email.value)) {
    console.log("Enter a valid email address")
    return ""
  }
  return data.email.value
}

const validateTimeSpan = (data, startTime) => {
  let validTimeSpan =
    data.stopTime.value.replaceAll(":", "") > startTime.replaceAll(":", "")
      ? true
      : false
  if (!validTimeSpan) {
    console.log("The END time must not be earlier than the START time")
    return ""
  }
  return data.stopTime.value
}

const validateState = data => {
  let states = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ]

  if (!states.includes(data.state.value)) {
    console.log("Enter a valid state abbreviation")
    return ""
  }
  return data.state.value
}

export {
  validatePrice,
  validateZip,
  validatePhone,
  validateEmail,
  validateTimeSpan,
  validateState,
}
