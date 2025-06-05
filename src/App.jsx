import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './homepage/index.jsx'
import AccountPage from './accountpage/index.jsx'
import LoginPage from './loginpage/index.jsx'
import FinalPage from './finalpage/index.jsx'


const App=()=>{

  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/accountpage' Component={AccountPage}/>
          <Route path='/loginpage' Component={LoginPage}/>
          <Route path='/finalpage' Component={FinalPage}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
