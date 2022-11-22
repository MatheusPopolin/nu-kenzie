import { Fragment, useState } from "react"
import Logo from "/src/assets/logoBlack.svg"
import { Form } from "../../components/Form"
import { List } from "../../components/List"
import { TotalMoney } from "../../components/TotalMoney"
import { Menu } from "../../components/Menu"
import "./style.css"
import "../../styles/buttons.css" 

export const Home = ({setPage, listTransactions, setListTransactions}) => {   
  const [transactionsType, setTransactionsType] = useState("todos")

  const alterPage = ()=>{
    setPage("initial")
  }

  return (
      <Fragment>
          <header>
            <div className="container">
              <img src={Logo} alt="nukenzie"/>
              <button className="small-button-disabled" onClick={alterPage}>Início</button>
            </div>
          </header>
          <main className="container">
            <div className="right">
              <Menu setActualType={setTransactionsType} actualType={transactionsType}></Menu>
              <List list={listTransactions} actualType={transactionsType} setList={setListTransactions}></List>
            </div>
            <div className="left">
              <TotalMoney list={listTransactions}></TotalMoney>
              <Form list={listTransactions} setList={setListTransactions}></Form>
            </div>
          </main>
      </Fragment>
  )
  
}

