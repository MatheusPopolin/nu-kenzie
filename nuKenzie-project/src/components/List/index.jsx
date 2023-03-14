import { Card } from "../Card"
import NoCard from "/src/assets/noCard.svg"
import "./style.css"
import "../../styles/fonts.css" 

export const List = ({list,actualType, setList}) => {
    if(list.length>0){
        if(actualType==="todos"){
            return (  
                <ul>
                    {list.map((transaction, index) =>{
                        return <Card setlist={setList} transaction={transaction} key={index}/>
                    })}
                </ul>
            )
        } 
        
        else if(actualType==="entradas"){
            return (  
                <ul>
                    {list.filter(transaction=>transaction.type==="entrada").map((transaction, index) =>{
                        return <Card setlist={setList} transaction={transaction} key={index}/>
                                   
                    })}
                </ul>
            )
        } 
        
        else{
            return (  
                <ul>
                    {list.map((transaction, index) =>{
                        if(transaction.type==="saída"){
                            return <Card setlist={setList} transaction={transaction} key={index}/>
                        }                     
                    })}
                </ul>
            )
        }
    } 
    
    else{
        return (
            <section className="noCards">
                <h2 className="title-2">Você ainda não possui nenhum lançamento</h2>
                <img src={NoCard} alt="ilustração"/>
            </section>
        )
    }    

}
 
