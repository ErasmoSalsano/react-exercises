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

  handleLogin = () => {
    this.props.onLogin(this.state)
  }

  render() {
    return(
      <div>
        <input name='username' onChange = { this.handleChange } value = { this.state.username } />
        <input name='password' type='password' onChange = { this.handleChange } value = { this.state.password } />
        <input name='remember' type='checkbox' onChange = { this.handleChange } checked = { this.state.remember } />

        <button name='login' type = 'button' onClick = { this.handleLogin } disabled = { this.state.loginButtonState } >Login</button>
        {/* <Button clickHandler = { this.handleLogin } content = 'Login' name = 'login' type = 'button' disabled = { this.state.loginButtonState } /> */}
      </div>
    )
  }
}

Login.defaultProps = {
  onLogin: ()=>{console.error('Missing login function')}
}
