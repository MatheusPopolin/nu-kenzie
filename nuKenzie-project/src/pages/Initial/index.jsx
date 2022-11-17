import { Fragment } from "react";

export const Initial = ({setPage}) => {
    const alterPage = ()=>{
        setPage("home")
    }
    
    return (  
        <Fragment>
            <section>
                <img src="/src/assets/logoWhite.png" alt="nukenzie"/>
                <h1>Centralize o controle das suas finanças</h1>
                <h3>de forma rápida e segura</h3>
                <button onClick={alterPage}>Iniciar</button>
            </section>
            <img src="/src/assets/illustration.svg" alt="ilustração"/>
        </Fragment>
    );
}
 
