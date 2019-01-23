import React from 'react';
import { DOB } from './DOB'
import { DisplayCountries } from './DisplayCountries'
import { Dietary } from './Dietary'
const data = require ('./Countries.json')

class Forms extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "",
      month: "",
      day: "",
      year: "",
      countries: "",
      data: data,
      diet: "",
      why: "",
      formCompleted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  displayRange(min, max) {
    let nums = [];
    for(let i = min; i <= max; i++){
      nums.push(i)
    }
    return nums.map((num, i) => {
      return <option key={i} value={num}>{num}</option>
    })
  }

  displayDiet(){
    let diets = ['Omnivore', 'Vegetarian','Vegan']
    return diets.map((diet, i) => {
      return <option key={i} value={diet}>{diet}</option>
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({
      formCompleted: !this.state.formCompleted
    })
  }

  render(){
    console.log(this.state.formCompleted)
    const {month, day, year, countries, data, diet, why, formCompleted} = this.state

    return(
      <>
        <h1>Mission to Mars Registration Form</h1>

        <form>

          <label htmlFor="name">Name:</label>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Name"
            name="name"
            id="name">
          </input>
          <hr/>

        <DOB
            month={month}
            day={day}
            year={year}
            displayRange={this.displayRange}
            handleChange={this.handleChange}/>
          <hr/>

        <DisplayCountries
            data={data}
            countries={countries}
            handleChange={this.handleChange}/>
          <hr/>

        <Dietary
            displayDiet={this.displayDiet}
            handleChange={this.handleChange}/>
          <hr/>

        <label htmlFor="why">Why do you want to be a Mars explorer?:</label>
          <br/>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Tell me more..."
            name="why"
            id="why">
          </input>
            <hr/>

        <br/>
        <button onClick={this.handleSubmit}>Submit</button>

        </form>
        {formCompleted ?
          <>
          <p>Name: {this.state.name}</p>
          <p>DOB: {month}/{day}/{year}</p>
          <p>Country of Origin: {countries}</p>
          <p>Dietary Preference: {diet}</p>
          <p>Reason for being a Mars explorer: {why}</p>
          </>
         : "Please complete form"
        }
      </>
    )
  }
}


export default Forms;
