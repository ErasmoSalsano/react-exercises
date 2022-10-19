import { useState } from "react";

export function Login({onLogin = ()=>{console.error('Missing login function')}}){

  const [data, setData] = useState({
      username: '',
      password: '',
      remember: false
    }
  )

  const loginStyle = {
    backgroundColor: `${data.password.length < 8 ? 'red' : 'green'}`,
    borderColor: 'transparent',
    borderRadius: '4px',
    color: 'white'
  }

  const handleChange = (event)=>{
    const {name, value, checked, type} = event.target;
    console.log(name, value, checked)
    setData((data)=>{return{...data, [name]: type === 'checkbox' ? checked : value}})
  }

  const handleLogin = () => {
    onLogin(data)
  }

  const handleReset = () => {
    setData({
      username: '',
      password: '',
      remember: false
    })
  }

  return(
    <form>
      <input name='username' onChange = { handleChange } value = { data.username } />
      <input name='password' type='password' onChange = { handleChange } value = { data.password } />
      <input name='remember' type='checkbox' onChange = { handleChange } checked = { data.remember } />

      <button name='login' type = 'button' style={ loginStyle } onClick = { handleLogin } disabled = { !(data.username.trim()) || !(data.password.length >= 8) } >Login</button>
      <button name = 'reset' type = 'button' onClick = { handleReset } >Reset</button>
    </form>
  )
}