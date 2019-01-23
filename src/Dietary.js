import React from 'react'

export const Dietary = (props) => {
  return(
    <>
      <select
      onChange={props.handleChange}
      value={props.diet}
      name="diet">
      <option></option>
      {props.displayDiet()}
      </select>
    </>
  )
}
