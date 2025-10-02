import React, {useState,useEffect} from "react";
import styles from './Login.module.css'
import { CgPassword } from "react-icons/cg";

function Login () {

    //Criando variaveis de estado
const [email, setEmail] = useState('')
const [password, setSenha] = useState('')


//Essa função lida com a mudança no campo de email
const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
};

//Fazendo o mesmo para a senha
const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setSenha(event.target.value)
}

//Essa função vai ser usada pra quando o formulário for enviado
const handleLoginSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
}

//Teste provisório para ver se as variaveis estão funcionando
console.log('Email:', email, 'Senha:', password);


//Preciso puxar a api/link do backend 


}

