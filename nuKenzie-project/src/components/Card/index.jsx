export const Card = ({transaction, setlist}) => {
    const {description, type, value, id} = transaction

    const handleTransaction = (e)=>{
        const id = e.target.id
        setlist((oldList)=>{
            return oldList.filter(transaction=>transaction.id!=id)
        })
    }

    return (  
        <li>
            <h2>{description}</h2>
            <p>{type}</p>
            <p>R$ {value}</p>
            <button onClick={handleTransaction} id={id}></button>
        </li>
    );
}
 
