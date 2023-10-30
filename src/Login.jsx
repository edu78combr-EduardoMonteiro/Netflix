import React from 'react'
import './Login.css'
import FotoLogo from "./FotoLogo"
function Login(){
    return(
    <div className="principal">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className="logo"></img>
        <div className="caixa">
            <h1>Entrar</h1>
            <input type="text" className='email' placeholder='Email ou número de telefone'/>
            <input type='password' className='senha' placeholder='Senha'/>
            <button>Entrar</button>

            <div className='trio'>
                <input type="checkbox" className='inputBox'/>
                <p className='lembrar'>Lembre-se de mim</p>
                <a className='ajuda'>Precisa de ajuda?</a>
            </div>

            <FotoLogo className="fotoLogo"/>

            <p className='cadastrar'>Novo por aqui? <a className='aCadastrar'>Assine agora</a> </p>
        </div>
    </div>
   
   )

}

export default Login