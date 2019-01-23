import React from 'react'

export const DisplayCountries = (props) => {
  let options = props.data.map((single, i) => {
    return <option key={i}>{single.name}</option>
  })

  return(
    <>
      <select
      onChange={props.handleChange}
      name="countries">
      <option value={props.countries}></option>
      {options}
      </select>
    </>
  )
}
