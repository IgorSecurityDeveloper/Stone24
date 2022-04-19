import React from 'react';

function validarLogin(email, password) {

    if (email === "teste@teste.com.br" && password === "123456") {
        <PaginaInicial />
    } else {
        window.alert("Email ou senha incorretos!")
    }

}

export default validarLogin

//Linkar ao Login.js