import React, { useState, useEffect } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import styles from './Cadastro.module.css';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router-dom';


//Criação de variaveis de estado
const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent) =>{
e.preventDefault();

  }
  





}




export default Cadastro;