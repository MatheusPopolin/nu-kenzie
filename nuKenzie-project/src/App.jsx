import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { Initial } from './pages/Initial'


function App() {
  const [actualPage, setActualPage] = useState("initial")
  
  if(actualPage==="initial"){
    return (
      <div className="App">
        <Initial setPage={setActualPage}></Initial>
      </div>
    ) 
  } else{
    return (
      <div className="App">
        <Home setPage={setActualPage}></Home>
      </div>
    ) 
  }
}

export default App
