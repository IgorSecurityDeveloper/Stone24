import React, { useState } from 'react';
import Credenciais from "./paginas/Elementos/ValidarLogin";
import './login.css';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
/* Preencher com uma página de recuperação de senha no link de recuperação de senha */

var MensagemERRO = `<div className="recuperarSenha">Login ou Senha Incorretos, por favor tente novamente!</div>`;

function Login() {

  const [show, setShow] = useState('false')

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
            method="POST"
            placeholder="Login"
            required
          />
          <br/>
          <hr className="line1"></hr>
<br/>
          <input
            className="camposenha"
            type={show ? "text" : "password"}
            id="password"
            method="POST"
            placeholder="Senha"
            required
          />
          <br/>
          <hr className="line2"></hr>

          <div className="icone-olho">
            {show ? (<AiOutlineEye size={30} onClick={handleClick} />) : (<AiOutlineEyeInvisible size={30} onCLick={handleClick} />)}
          </div>

          <div className="ErrDiv">  </div>

          <a className="recuperarSenha" link href="http://">Esqueceu a senha</a>

          <button className="EnviarLogin" method="POST" type="submit" onClick={Credenciais}> Confirmar </button>

      </form>
    </div>

    </div>

  );
}

export default Login;