import { useGithubUser } from "./useGithubUser"

export function GithubUser ({ userName }){

  const {userData, cardFields} = useGithubUser(userName);
  
  const userCard = {
    margin: '.5rem',
    width: 'min(100%, 250px)',
    padding: '.5rem 1.5rem',
    border: '2px solid #1b89be',
    borderRadius: 30,
    backgroundColor: '#bae8f5'
  }
  const ulStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }
  const userImage={
    height: 100,
    borderRadius: 30
  }

  return(
    (userData?.name &&
    <div style={userCard}>
      <ul style={ulStyle}>
        {cardFields.map((item) => {
          const field = item.key
          const heading = item.value
          return userData[field] && (field==='avatar_url' 
            ? <li key = {field + userData[field]}><img src={userData[field]} alt='User avatar' style={userImage}/></li>
            : 
              field==='html_url' 
                ? <li key = {field + userData[field]}><strong>{heading}</strong>: <a href={userData[field]} target="_blank" rel="noreferrer">{userData[field]}</a></li>
                : <li key = {field + userData[field]}><strong>{heading}</strong>: {userData[field]}</li>)
        })}
      </ul>
    </div>)
    || <h3 style={{margin:'2rem'}}>Utente non trovato</h3>
  )
}
