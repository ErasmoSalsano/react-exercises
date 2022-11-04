import useSWR from "swr";

const fetcher = (url)=>fetch(url).then((res)=>res.json()).finally(()=>console.log('Fetched'))

export function useGithubUser (user){

  /* const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const userFetch = async (user)=>{
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if(response.status !== 200) throw new Error(response.status);
      const data = await response.json();
      setUserData(data)
    } catch (error) {
      setError(error)
      console.warn(`Fetch error\n${error}`)
    }
    setLoading(false)
  } */

  const { data: userData, error, mutate } = useSWR(user ? `https://api.github.com/users/${user}` : null, fetcher)
  
  const userFetch = () => {
    mutate()
  }

  const CARDFIELDS = [
    {key: 'avatar_url', value: 'Avatar'}, 
    {key: 'name', value: 'Name'}, 
    {key: 'html_url', value: 'Link'}, 
    {key: 'public_repos', value: 'Public repos'}, 
    {key: 'followed', value: 'Followed'}, 
    {key: 'follower', value: 'Follower'}
  ]

  return({
    userData: userData,
    userFetch: userFetch,
    error: error,
    loading: !userData && !error,
    cardFields: CARDFIELDS
  })
}
