import React, { useState, useContext } from "react";
import { loginUsuario } from '../../services.ts/api'; // Corrigi o caminho
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from "react-router-dom"; // Importe o Link para navegação
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
 

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await loginUsuario(email, password);
      // Chama a função de login do contexto passando o user e o token
      auth?.login({ user: data.user, token: data.token });
      setMensagem('Login feito com sucesso!');
      navigate('/simulador');
    } catch (error) {
      console.error(error);
      setMensagem('Email ou senha inválidos');
    }
  };

  return (
    <div className={styles.loginPage}>
      {/* Painel da Esquerda (Imagem e Texto) */}
      <div className={styles.leftPanel}>
        <h1>Acesse sua conta</h1>
        <p>Gerencie seus projetos e visualize seus resultados de forma simples e rápida.</p>
      </div>

      {/* Painel da Direita (Formulário) */}
      <div className={styles.rightPanel}>
        <form onSubmit={handleLoginSubmit} className={styles.form}>
          <h2>Login</h2>
          <div className={styles.inputGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Endereço de email"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              value={password}
              onChange={(e) => setSenha(e.target.value)}
              required
              placeholder="Senha"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>Entrar</button>
          
          {mensagem && <p className={styles.errorMessage}>{mensagem}</p>}
          
          <div className={styles.signupLink}>
            <p>Não tem uma conta? <Link to="/Cadastro">Crie uma agora</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;