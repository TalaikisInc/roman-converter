import React, { PureComponent } from 'react'
import axios from 'axios'
import { Input, Button } from 'reactstrap'

import './styles.css'
import Error from '../Error'
import Message from '../Message'

export default class TextInput extends PureComponent<{}, State> {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      error: '',
      select: 0,
      message: ''
    }
  }

  handleSelect = (event) => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    this.setState({
      [name]: value
    })
  }

  handleChange = (event) => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const action = this.state.select === 0 ? 'NUMBER_TO_ROMAN' : 'ROMAN_TO_NUMBER'

    if (action) {
      axios.post('/api', { message: this.state.input, action }).then((res) => {
        if (res.data.error) {
          this.setState({ error: res.data.error, message: '' })
        } else if (res.data.message) {
          this.setState({ message: res.data.message, error: '' })
        }
      })
    }
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='centered' value={this.state.select} onChange={this.handleSelect.bind(this)} placeholder='Select the converter'>
            <Input type='select' name='select'>
              <option value={0}>Number to Roman</option>
              <option value={1}>Roman to Number</option>
            </Input>
            <br />
            <Input type='text' name='input' value={this.state.input} onChange={this.handleChange.bind(this)} placeholder='Enter value' />
            <hr />
            <Button color='primary'>Submit</Button>
            <br />
            <br />
            <Error error={this.state.error} />
            <Message message={this.state.message} />
          </div>
        </form>
      )
  }
}
