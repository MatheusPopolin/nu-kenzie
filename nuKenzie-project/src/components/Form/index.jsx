import { useState } from "react";

export const Form = ({list, setList}) => {
    const [description, setDescription] = useState("")
    const [value, setValue] = useState(0)
    const [type, setType] = useState("entrada")
    const [id, setId] = useState(3)
    
    const getDescription = (e)=>{
        setDescription(e.target.value);
    }
    const getValue = (e)=>{
        setValue(e.target.value);
    }
    const getType = (e)=>{
        setType(e.target.value);
    }

    const createNewTransaction = (e) => {
        e.preventDefault();
        let treatedValue = value;
        if(type==="saída"){
            treatedValue = treatedValue*-1
        }
        const newTransaction = { 
            description: description, 
            type: type, 
            value: parseInt(treatedValue),
            id: id 
        }
        setList([...list, newTransaction])
        setId(id+1)
        e.target.form.reset()
    }

    return (  
        <form>
            <label htmlFor="">Descrição</label>
            <input onChange={getDescription} type="text" placeholder="Digite aqui sua descrição"/>
            <p>Ex: Compra de roupas</p>

            <label htmlFor="">Valor</label>
            <input onChange={getValue} type="number"/>

            <label htmlFor="">Tipo de valor</label>
            <select onChange={getType} name="" id="">
                <option value="entrada">Entrada</option>
                <option value="saída">Saída</option>
            </select>

            <button onClick={createNewTransaction} type="submit">Inserir valor</button>
        </form>
    );
}
 
