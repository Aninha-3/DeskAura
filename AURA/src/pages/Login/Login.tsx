import React, { useState, useContext } from "react";
import { loginUsuario } from '../../services.ts/api';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
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
      auth?.login(data); // Atualiza contexto
      setMensagem('Login feito com sucesso!');
      navigate('/simulador');
    } catch (error) {
      console.error(error);
      setMensagem('Email ou senha inválidos');
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={password} onChange={(e) => setSenha(e.target.value)} required />
      </div>
      <button type="submit">Entrar</button>
      {mensagem && <p>{mensagem}</p>}
    </form>
  );
}

export default Login;
