import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './homepage/index.jsx'


const App=()=>{

  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
