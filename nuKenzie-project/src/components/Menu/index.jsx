export const Menu = ({setActualType}) => {
    const setType = (e)=>{
        setActualType(e.target.name)
    }
    
    return (  
        <nav>
            <button onClick={setType} name="todos">Todos</button>
            <button onClick={setType} name="entradas">Entradas</button>
            <button onClick={setType} name="saídas">Despesas</button>
        </nav>
    );
}
