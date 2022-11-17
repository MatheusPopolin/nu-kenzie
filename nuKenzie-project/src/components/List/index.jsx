import { Card } from "../Card"

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
                    {list.map((transaction, index) =>{
                        if(transaction.type==="entrada"){
                            return <Card setlist={setList} transaction={transaction} key={index}/>
                        }                    
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
            <section>
                <h2>Você ainda não possui nenhum lançamento</h2>
                <img src="/src/assets/noCard.png" alt="ilustração"/>
            </section>
        )
    }    

}
 
