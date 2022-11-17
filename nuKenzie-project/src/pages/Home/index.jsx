import { Fragment, useState } from 'react'
import { Form } from '../../components/Form'
import { List } from '../../components/List'
import { TotalMoney } from '../../components/TotalMoney'
import { Menu } from '../../components/Menu'

export const Home = ({setPage}) => {
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
  
  const [transactionsType, setTransactionsType] = useState("todos")

  const alterPage = ()=>{
    setPage("initial")
  }


  console.log(listTransactions)
  return (
      <Fragment>
          <header>
            <img src="/src/assets/logoBlack.png" alt="nukenzie"/>
            <button onClick={alterPage}>Início</button>
          </header>
          <Form list={listTransactions} setList={setListTransactions}></Form>
          <Menu setActualType={setTransactionsType}></Menu>
          <List list={listTransactions} actualType={transactionsType} setList={setListTransactions}></List>
          <TotalMoney list={listTransactions}></TotalMoney>
      </Fragment>
  )
  
}

