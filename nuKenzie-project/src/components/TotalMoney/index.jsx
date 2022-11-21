import "./style.css"
import "../../styles/fonts.css" 

export const TotalMoney = ({list}) => {
    return (  
        list.length > 0 ?
        <section className="totalMoney">
            <div>
                <h2 className="title-3">Valor Total:</h2>
                <p className="body">O valor se refere ao saldo</p>
            </div>
            <p className="title-3">$ {list.reduce((total, currenteValue)=>total + currenteValue.value,0)}</p>
        </section> :
        <></>
    )
}
 
