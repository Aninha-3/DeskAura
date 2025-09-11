import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './Cadastro.module.css';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router-dom';


const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');
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
    if (senha !== confirmacao) {
      alert('As senhas não coincidem.');
      return;
    }
    // Aqui você pode enviar os dados para o backend
    console.log({
      nome,
      email,
      senha
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button onClick={() => navigate('/')} className={styles.botaoVoltar}>
          <FaArrowLeft size={20} />
        </button>

        <h2 className={styles.title}>Cadastro</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="confirmacao">Confirmação de senha</label>
            <input
              id="confirmacao"
              type="password"
              value={confirmacao}
              onChange={(e) => setConfirmacao(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.button}>Cadastrar</button>

          <p className={styles.loginText}>
            Já possui conta? <a href="/Login" className={styles.loginLink}>Logar</a>
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Cadastro;