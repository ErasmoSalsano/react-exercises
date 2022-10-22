import { useEffect, useState } from "react";

export function useGithubUser (user){

  const [userData, setUserData] = useState({})

  const userFetch = async (user)=>{
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if(response.status !== 200) throw new Error(response.status);
      const data = await response.json();
      setUserData(data)
    } catch (error) {
      console.warn(`Fetch error\n${error}`)
    }
  }
  
  useEffect(() => {
    userFetch(user)
  }, [user])

  return({
    userData: userData
  })
}