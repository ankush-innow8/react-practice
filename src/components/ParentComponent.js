import React, { Component } from 'react'

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: { name: '', phoneNumber: '' },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({
      fields: { ...this.state.fields, [e.target.name]: e.target.value },
    })
  }
  handleSubmit(event) {
    alert(
      'A form was registered for: ' +
        this.state.fields.name +
        '. Your contact number is ' +
        this.state.fields.phoneNumber
    )
    event.prevenDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={this.state.fields.name}
            onChange={this.handleChange}
          />
          Phone Number:
          <input
            type='text'
            name='phoneNumber'
            value={this.state.fields.phoneNumber }
            onChange={this.handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default ParentComponent
