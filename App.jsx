import Nav from './components/nav'
import Login from './components/Login'
import Home from './components/Dashboard'
import Register from './components/Register'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import './App.css'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
