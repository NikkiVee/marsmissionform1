import React from 'react'

export const DOB = (props) => {
  return(
    <>
      <select
      onChange={props.handleChange}
      value={props.month}
      name="month">
      <option></option>
      {props.displayRange(1, 12)}
      </select>

      <select
      onChange={props.handleChange}
      value={props.day}
      name="day">
      <option></option>
      {props.displayRange(1, 31)}
      </select>

      <select
      onChange={props.handleChange}
      value={props.year}
      name="year">
      <option></option>
      {props.displayRange(1900, 2001)}
      </select>

    </>
  )
}
