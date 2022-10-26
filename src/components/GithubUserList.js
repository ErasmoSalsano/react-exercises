import { useEffect, useState } from "react"
import{ Link, Outlet } from 'react-router-dom'

export const GithubUserList = () => {

  const [userList, setUserList] = useState([])
  const [userName, setUserName] = useState('')

  const handleInputChange = (event)=>{
    setUserName(event.target.value)
  }

  const handleAddUser = ()=>{
    //Creazione ID e aggiunta nome alla lista, se assente. 
    //l'id si potrebbe evitare visto che gli user sono univoci
    let id = 0;
    let isPresent = false;
    if(userList.length>0){
      const list = userList.map((element)=>element.name)
      isPresent = !!list.find((element)=>element === userName)
      if (!isPresent) id = userList.reduce((prev, curr)=> prev < curr.id ? curr.id + 1 : prev, 0)
    }
    if(!isPresent){
      setUserList(
        (userList)=>{
          return [
            ...userList,
            {id: id, name: userName}
          ]
        })
    }
  }

  const [list, setList] = useState([])

  //Sto usando useEffect così, anche se c'è della render logic che credo non dovrebbe esserci.
  //Non saprei come altro usarlo
  /* useEffect(() => {
    setList(userList.map((user)=><GithubUser key={user.id + user.name} userName={user.name} />))
  }, [userList]) */
  useEffect(() => {
    setList(<ul>{userList.map((user)=><li key={user.id + user.name}><Link to={'/users/' + user.name}>{user.name}</Link></li>)}</ul>)
  }, [userList])
  

  return(
    <div>
      <label htmlFor='userName' />
      <input name='userName' type='text' onChange={handleInputChange} value={userName} placeholder='Compile with Username'></input>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {list}
        <Outlet />
      </ul>
    </div>
  )
}