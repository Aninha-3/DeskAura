import React, { useState } from "react";
import { loginUsuario } from '../../services.ts/api';
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = await loginUsuario(email, password);
      console.log('Login feito com sucesso:', data);

      setMensagem('Login feito com sucesso!');

      // Redireciona após login bem-sucedido
      navigate('/'); 
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setMensagem('Email ou senha inválidos'); // Mostra mensagem de erro
    }
  };

  return (
    <form onSubmit={handleLoginSubmit} className={styles.form}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>

      <div>
        <button type="submit">Entrar</button>
        {mensagem && <p>{mensagem}</p>}
      </div>
    </form>
  );
}

export default Login;
