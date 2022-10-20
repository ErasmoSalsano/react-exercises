import { useEffect, useState } from "react"

export function GithubUser ({ userName }){

  const [userData, setUserData] = useState({})
  const toFeed = [{'avatar_url': 'Avatar'}, {'name': 'Name'}, {'url': 'Link'}, {'public_repos': 'Public repos'}, {'followed': 'Followed'}, {'follower': 'Follower'}]

  const userFetch = async (user)=>{
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if(response.status !== 200) throw Error(response.status);
      const data = await response.json();
      setUserData(data)
    } catch (error) {
      console.warn(`Fetch error\n${error}`)
    }
  }
  
  useEffect(() => {
    userFetch(userName)
  }, [userName])
  

  const ulStyle = {
    listStyle: 'none'
  }

  const userImage={
    height: 100,
    borderRadius: 30
  }

  return(
    <div>
      Profile data:
      <ul style={ulStyle}>
        {toFeed.map((item) => {
          const field = Object.keys(item)[0]
          const heading = Object.values(item)[0]
          return userData[field] && (field==='avatar_url' 
          ? <li key = {field + userData[field]}><img src={userData[field]} alt='User avatar' style={userImage}/></li>
          : <li key = {field + userData[field]}><strong>{heading}</strong>: {userData[field]}</li>)
        })}
      </ul>
    </div>
  )
}
