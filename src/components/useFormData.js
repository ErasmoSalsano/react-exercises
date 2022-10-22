import { useState } from "react"

export function useFormData(defaultUser = '', defaultPassword = ''){
  const [userData, setUserData] = useState({
    username: defaultUser,
    password: defaultPassword
  })
  
  const handleInputChange = (event)=>{
    setUserData({...userData, [event.target.name]: event.target.value})
  }

  return({
    userData: userData,
    onInputChange: handleInputChange,
  })

}