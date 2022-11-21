import "./style.css"
import "../../styles/fonts.css" 

export const Menu = ({setActualType, actualType}) => {
    const setType = (e)=>{
        setActualType(e.target.name)
    }
    
    return (  
        <nav className="menu">
            <p className="none title-3">Resumo financeiro</p>
            <div>
                <button className={actualType==="todos" ? "small-button-primary" : "small-button-disabled"} onClick={setType} name="todos">Todos</button>
                <button className={actualType==="entradas" ? "small-button-primary" : "small-button-disabled"} onClick={setType} name="entradas">Entradas</button>
                <button className={actualType==="saídas" ? "small-button-primary" : "small-button-disabled"} onClick={setType} name="saídas">Despesas</button>
            </div>
        </nav>
    )
}
