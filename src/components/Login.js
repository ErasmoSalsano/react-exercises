import React from "react";
// import { Button } from "./Button";

export class Login extends React.Component {

  state = {
    username: '',
    password: '',
    remember: false,
    loginButtonState: true
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
      [name]: value,
    })
    this.setState((state) => {
      return {
        loginButtonState: !state.username.trim() || !state.password
      }
    })
  }

  handleReset = () => {
    this.setState({
      username: '',
      password: '',
      remember: false,
      loginButtonState: true
    })
  }

  handleLogin = () => {
    this.props.onLogin(this.state)
  }

  render() {

    const loginStyle = {
      'background-color': `${this.state.password.length < 8 ? 'red' : 'green'}`,
      'border-color': 'transparent',
      'border-radius': '4px',
      'color': 'white'
    }

    return(
      <div>
        <input name='username' onChange = { this.handleChange } value = { this.state.username } />
        <input name='password' type='password' onChange = { this.handleChange } value = { this.state.password } />
        <input name='remember' type='checkbox' onChange = { this.handleChange } checked = { this.state.remember } />

        <button name='login' type = 'button' style={loginStyle} onClick = { this.handleLogin } disabled = { this.state.loginButtonState } >Login</button>
        {/* <Button clickHandler = { this.handleLogin } content = 'Login' name = 'login' type = 'button' disabled = { this.state.loginButtonState } /> */}

        <button name = 'reset' type = 'button' onClick = { this.handleReset } >Reset</button>
      </div>
    )
  }
}

Login.defaultProps = {
  onLogin: ()=>{console.error('Missing login function')}
}

// Add a "reset" button to 
// the Login component that clears the content of all three inputs when clicked.