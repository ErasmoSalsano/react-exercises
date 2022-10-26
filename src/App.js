import { Route, Routes } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import { Counter } from './components/Counter'
import { ShowGithubUser } from './components/ShowGithubUser'

export function App (){
    return(
      <div>
        <Routes>
          <Route path='/' element={<Welcome name='Patrick' />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/users/:username' element={<ShowGithubUser />} />
        </Routes>
      </div>
    )
}