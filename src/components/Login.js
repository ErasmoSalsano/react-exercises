import React from "react";

export class Login extends React.Component {

  state = {
    username: '',
    password: '',
    remember: false,
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <div>
        <input name='username' onChange = { this.handleChange } value = { this.state.username } />
        <input name='password' type='password' onChange = { this.handleChange } value = { this.state.password } />
        <input name='remember' type='checkbox' onChange = { this.handleChange } checked = { this.state.remember } />
      </div>
    )
  }
}
