import { useState } from "react"
import "./style.css"
import "../../styles/inputs.css" 
import "../../styles/select.css"
import "../../styles/buttons.css"  

export const Form = ({list, setList}) => {
    const [description, setDescription] = useState("")
    const [value, setValue] = useState(0)
    const [type, setType] = useState("entrada")
    const [id, setId] = useState(3)
    
    const getDescription = (e)=>{
        setDescription(e.target.value)
    }
    const getValue = (e)=>{
        setValue(e.target.value)
    }
    const getType = (e)=>{
        setType(e.target.value)
    }

    const createNewTransaction = (e) => {
        e.preventDefault()
        let treatedValue = value
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
    }

    return (  
        <form className="form" onSubmit={createNewTransaction}>
            <label className="body" htmlFor="description">Descrição</label>
            <input className="input" id="description" required onChange={getDescription} type="text" placeholder="Digite aqui sua descrição"/>
            <p className="body">Ex: Compra de roupas</p>

            <div>
                <div>
                    <label className="body" htmlFor="value">Valor</label>
                    <input className="value-input" id="value" required onChange={getValue} type="number" placeholder="1"/>
                </div>
    
                <div>
                    <label className="body" htmlFor="type">Tipo de valor</label>
                    <select className="select" onChange={getType} name="" id="type">
                        <option value="entrada">Entrada</option>
                        <option value="saída">Saída</option>
                    </select>
                </div>
            </div>

            <button className="button-primary" type="submit">Inserir valor</button>
        </form>
    )
}
 
