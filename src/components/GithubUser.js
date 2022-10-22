import { useGithubUser } from "./useGithubUser"

export function GithubUser ({ userName }){

  const {userData} = useGithubUser(userName);

  const CARDFIELDS = [
    {key: 'avatar_url', value: 'Avatar'}, 
    {key: 'name', value: 'Name'}, 
    {key: 'html_url', value: 'Link'}, 
    {key: 'public_repos', value: 'Public repos'}, 
    {key: 'followed', value: 'Followed'}, 
    {key: 'follower', value: 'Follower'}
  ]
  
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
    userData.name &&
    <div style={userCard}>
      <ul style={ulStyle}>
        {CARDFIELDS.map((item) => {
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
    </div>
  )
}
