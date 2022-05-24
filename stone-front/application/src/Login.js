import React, { useState } from 'react';
// import Credenciais from "./stone-back/ValidarLogin";
import './login.css';

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
/* Preencher com uma página de recuperação de senha no link de recuperação de senha */

var MensagemERRO = `<div className="recuperarSenha">Login ou Senha Incorretos, por favor tente novamente!</div>`;

function Login() {

  const [show, setShow] = useState(false)

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
          <hr className="line1"></hr>

          <input
            className="camposenha"
            type={show ? "text" : "password"}
            id="password"
            method="POST"
            placeholder="Senha"
            required
          />
          <hr className="line2"></hr>

          <div className="icone-olho">
            {show ? (<AiOutlineEye size={30} onClick={handleClick} />) : (<AiOutlineEyeInvisible size={30} onCLick={handleClick} />)}
          </div>

          <div className="ErrDiv">  </div>

          <a className="recuperarSenha" link href="http://">Esqueceu a senha</a>

          <button className="EnviarLogin" method="POST" type="submit" onClick={

//Função credenciais corrigida, verificar forma de importar ValidarLogin de maneira correta no React
            function Credenciais() {
              var senha = document.getElementById('password')
              var usuario = document.getElementById('email')

              if (usuario.value == "igor@stone.com.br" && senha.value == 123456) {
                window.alert("Teste: Essas credenciais estão corretas!")
              }
              else {
                window.alert("Teste: Email ou senha incorretos!")
              }
          }
          }> Confirmar </button>

      </form>
    </div>

    </div>

  );
}

export default Login;