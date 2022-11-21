import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { Initial } from './pages/Initial'


export const App = () => {
  const [actualPage, setActualPage] = useState("initial")
  const [listTransactions, setListTransactions] = useState([
    { 
    description: "Salário recebido", 
    type: "entrada",
    value: 2500,
    id: 1 
    },
    { 
    description: "Conta de luz",
    type: "saída",    
    value: -150, 
    id: 2
    }
  ])
  
  if(actualPage==="initial"){
    return (
      <div className="App">
        <Initial setPage={setActualPage}></Initial>
      </div>
    ) 
  } else{
    return (
      <div className="App-home">
        <Home setPage={setActualPage} listTransactions={listTransactions} setListTransactions={setListTransactions}></Home>
      </div>
    ) 
  }
}


