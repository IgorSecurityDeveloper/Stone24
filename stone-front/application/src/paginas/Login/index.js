import React, { useState } from 'react';
import './login.css';

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
/*import './stone-front/estilosC:\Users\igora\Documents\GitHub\Stone24\stone-front\estilos\midias\Stone 24.png';*/
/* Preencher com uma página de recuperação de senha no link de recuperação de senha */

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  return (

    <>
    <div className="temaAzul">

      <div className="painellogin">

        <div className="painellogin"></div>

          <div className="logotipo">
            <img alt="Software de gestão Stone 24" src="C:\Users\igora\Documents\GitHub\Stone24\stone-front\estilos\midias\Stone 24.png" />
          </div>
<form>
          <input
            className="campologin"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            method="POST"
            placeholder="Login"
            required
          />
          <hr className="line1"></hr>

          <input
            className="camposenha"
            type={show ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
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

          <button className="EnviarLogin" method="POST" type="submit">Confirmar</button>
          </form>
      </div>

    </div>

    </>

  );
}

export default Login;