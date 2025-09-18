import React, { useState, useEffect } from "react";
import { SlArrowLeft } from 'react-icons/sl';
import styles from './Login.module.css';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Aplica a classe no <body> quando o componente monta
  useEffect(() => {
    document.body.className = styles.page;
    return () => {
      document.body.className = ''; // limpa ao desmontar
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Aqui você pode enviar os dados para o backend
    console.log({
      email,
      password
    });
  };

  return (
    <div className={styles.loginContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <SlArrowLeft />
      </button>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
