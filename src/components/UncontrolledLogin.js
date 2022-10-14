import React, { createRef } from "react";


export class UncontrolledLogin extends React.Component {
  _formRef = createRef()

  /* componentDidMount(){
    this._formRef.current.elements.login.disabled = true;
  } */

  handleChange = (event, isReset=false) => {
    !isReset && event.target.name !== 'remember' && event.preventDefault();

    const username = event.currentTarget.elements.username.value;  //Prende i valori
    const password = event.currentTarget.elements.password.value;
    
    this._formRef.current.elements.login.disabled = isReset ? true : !username || !password  //Aggiorna il disabled
  }

  handleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: event.currentTarget.elements.username.value,  //Prende i valori
      password: event.currentTarget.elements.password.value,
      remember: event.currentTarget.elements.remember.value
    }

    this.props.onLogin(data)
  }

  render() {
    return(
      <form ref = { this._formRef } onChange={ this.handleChange } onSubmit={ this.handleLogin } onReset={ event => this.handleChange(event, true)}>
        <input name='username' autoFocus />
        <input name='password' type = 'password' />
        <input name='remember' type = 'checkbox' />

        <button name='login' type = 'submit' disabled = { true }>Login</button>
        {/* <Button content = 'Login' name = 'login' type = 'submit' disabled = { this.state.loginButtonState } /> */}

        <button name = 'reset' type = 'reset' >Reset</button>
      </form>
    )
  }
}

UncontrolledLogin.defaultProps = {
  onLogin: ()=>{ console.error('Missing login function') }
}
