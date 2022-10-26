import { useParams } from 'react-router-dom'
import { GithubUser } from './GithubUser'

export function ShowGithubUser(){
  const { username = 'PatrizioDevelhope' } = useParams();

  return <GithubUser userName={ username } />
}