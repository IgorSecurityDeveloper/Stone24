import React, { useState } from 'react';
import './login.css';
// import { email, password } from "./stone-back/Eventos/validarLogin.js";

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
/* Preencher com uma página de recuperação de senha no link de recuperação de senha */

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)

  function Credenciais(email, password) {
   var senha = document.querySelector(password)
   var usuario = document.querySelector(email)

    if (senha === "123456" && usuario === "igor@stone.com.br") {
      window.alert("Teste: Essa senha está certa!")
    }
    else {
      window.alert("Teste: Email ou senha incorretos!")
    }
  }

//  Credenciais() 

  function handleClick(e) {
    setShow(!show)
  }

  return (

    <div className="temaAzul">

      <div className="painellogin">

        <div className="logotipo" />

        <form>
          <input
            className="campologin"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            method="POST"
            placeholder="Login"
            required
          />
          <hr className="line1"></hr>

          <input
            className="camposenha"
            type={show ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            method="POST"
            placeholder="Senha"
            required
          />
          <hr className="line2"></hr>

          <div className="icone-olho">
            {show ?
              (<AiOutlineEye
                size={30}
                onClick={handleClick}
              />
              ) :
              (
                <AiOutlineEyeInvisible
                  size={30}
                  onCLick={handleClick}
                />
              )
            }
          </div>


          <a className="recuperarSenha" link href="http://">Esqueceu a senha</a>

          <button className="EnviarLogin" method="POST" type="submit" onSubmit={Credenciais()}>Confirmar</button>
        </form>
      </div>

    </div>



  );
}

export default Login;