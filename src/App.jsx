import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './homepage/index.jsx'
import AccountPage from './accountpage/index.jsx'


const App=()=>{

  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/accountpage' Component={AccountPage}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
