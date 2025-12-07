import React, { useState, useContext } from "react";
import { loginUsuario } from '../../services.ts/api';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import styles from './Login.module.css';
import logoVerde from '../../assets/letraA.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCarregando(true);
    setMensagem('');

    try {
      const data = await loginUsuario(email, password);
      auth?.login({ user: data.user, token: data.token });
      navigate('/simulador');
    } catch (error) {
      console.error(error);
      setMensagem('Email ou senha inválidos');
      setCarregando(false);
    }
  };

  return (
    <div className={styles.login_container}>
      <button className={styles.login_voltar} onClick={() => navigate('/')}>
        <img src={logoVerde} alt="Logo" className={styles.logo_img} />
      </button>

      <h1 className={styles.login_titulo}>Login</h1>

      <form onSubmit={handleLoginSubmit} className={styles.login_formulario}>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Endereço de email"
          className={styles.login_input}
          disabled={carregando}
        />

        {/* Campo de senha com ícone */}
        <div className={styles.senha_container}>
          <input
            type={mostrarSenha ? "text" : "password"}
            value={password}
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="Senha"
            className={styles.login_input}
            disabled={carregando}
          />

          <button
            type="button"
            className={styles.olhoBotao}
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>

        {mensagem && <p className={styles.login_mensagemErro}>{mensagem}</p>}

        <button type="submit" className={styles.login_botao} disabled={carregando}>
          {carregando ? "Entrando..." : "Entrar"}
        </button>

        <div className={styles.login_signupLink}>
          <p><Link to="/Redefinir-senha">Esqueci a senha</Link></p>
          <p>Não tem uma conta? <Link to="/Cadastro">Crie uma agora</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
