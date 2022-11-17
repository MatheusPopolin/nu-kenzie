export const TotalMoney = ({list}) => {
    return (  
        <section>
            <h2>Valor Total:</h2>
            <p>O valor se refere ao saldo</p>
            <p>$ {list.reduce((total, currenteValue)=>total + currenteValue.value,0)}</p>
        </section>
    );
}
 
