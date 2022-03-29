import React from "react"
import validator from "validator"

const stripPrice = data => {
  let price = data.price.value

  let strippedPrice =
    price.includes("$") || price.includes(",")
      ? price.replaceAll("$", "").replaceAll(",", "")
      : price

  strippedPrice = isNaN(price) ? "" : strippedPrice

  return strippedPrice
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
    return ""
  }
  return data.PhoneNum.value
}

const validateEmail = data => {
  if (!validator.isEmail(data.email.value)) {
    return ""
  }
  return data.email.value
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
    return ""
  }
  return data.state.value
}

export { stripPrice, validateZip, validatePhone, validateEmail, validateState }
