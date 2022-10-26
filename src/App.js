import { Route, Routes } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import { Counter } from './components/Counter'

export function App (){
    return(
      <div>
        <Routes>
          <Route path='/' element={<Welcome name='Patrick' />} />
          <Route path='/counter' element={<Counter />} />
        </Routes>
      </div>
    )
}