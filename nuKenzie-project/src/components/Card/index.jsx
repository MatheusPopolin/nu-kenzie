import "./style.css"
import "../../styles/fonts.css" 
import "../../styles/buttons.css"

export const Card = ({transaction, setlist}) => {
    const {description, type, value, id} = transaction

    const handleTransaction = (e)=>{
        const id = e.target.id
        setlist((oldList)=>{
            return oldList.filter(transaction=>transaction.id!=id)
        })
    }

    return (  
        <li className={"card " + type}>
            <div>
                <h2 className="title-3">{description}</h2>
                <p className="body">{type}</p>
            </div>
            <p className="body">{Math.abs(value).toLocaleString("pt-br",{style: "currency", currency: "BRL"})}</p>
            <button className="button-delete" onClick={handleTransaction} id={id}></button>
        </li>
    )
}
 
