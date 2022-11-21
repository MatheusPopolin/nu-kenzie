import { Fragment } from "react"
import Logo from "/src/assets/logo.svg"
import Illustration from "/src/assets/illustration.svg"
import "./style.css"
import "../../styles/buttons.css" 
import "../../styles/fonts.css" 
 
export const Initial = ({setPage}) => {
    const alterPage = ()=>{
        setPage("home")
    }
    
    return (  
        <Fragment>
            <section className="container initial">
                <div>
                    <img className="logo" src={Logo} alt="nukenzie"/>
                    <h1 className="title-1">Centralize o controle das suas finanças</h1>
                    <h3 className="headline">de forma rápida e segura</h3>
                    <button className="button-primary" onClick={alterPage}>Iniciar</button>
                </div>
                <img className="illustration" src={Illustration} alt="ilustração"/>
            </section>           
        </Fragment>
    )
}
 
