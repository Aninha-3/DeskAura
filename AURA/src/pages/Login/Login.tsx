import React, {useState,useEffect} from "react";
import styles from './Login.module.css'

function Login () {

    //Criando variaveis de estado
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')


//Essa função lida com a mudança no campo de email
const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
};

//Fazendo o mesmo para a senha
const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setSenha(event.target.value)
}

//Essa função vai ser usada pra quando o formulário for enviado
const handleLoginSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
}
}

