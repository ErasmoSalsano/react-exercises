import { Route, Routes, Link } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import { Counter } from './components/Counter'
import { ShowGithubUser } from './components/ShowGithubUser'
import { GithubUserList } from './components/GithubUserList'

export function App (){
    return(
      <div>
        <nav><Link to='/' >Home</Link> | <Link to='/counter' >Counter</Link> | <Link to='/users/' >Users</Link></nav>
        <Routes>
          <Route path='*' element={<div><p>No content here</p> <Link to='/' >Home</Link></div>} />
          <Route path='/' element={<Welcome name='Patrick' />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/users' element={<GithubUserList />} >
            <Route path=':username' element={<ShowGithubUser />} />
          </Route>
        </Routes>
      </div>
    )
}