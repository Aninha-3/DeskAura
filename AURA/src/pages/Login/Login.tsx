import React, {useState,useEffect} from "react";
import styles from './Login.module.css'

function Login () {

    //Criando variaveis de estado
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')

const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
};

const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setSenha(event.target.value)
}
}

