import { useParams } from 'react-router-dom'
import { GithubUser } from './GithubUser'

export function ShowGithubUser(){
  const { username = 'ErasmoSalsano' } = useParams();

  return <GithubUser userName={ username } />
}