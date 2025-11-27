import React, { useState, useContext } from "react";
import { loginUsuario } from '../../services.ts/api';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from "react-router-dom";

// Importe o novo arquivo de estilo
import styles from './Login.module.css';
import logoVerde from '../../assets/letraA.png';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false); // Adicionado para desabilitar o botão
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCarregando(true);
    setMensagem('');

    try {
      const data = await loginUsuario(email, password);
      auth?.login({ user: data.user, token: data.token });
      // Mensagem de sucesso é opcional, pois o redirect é imediato
      navigate('/simulador');
    } catch (error) {
      console.error(error);
      setMensagem('Email ou senha inválidos');
      setCarregando(false);
    }
  };

  return (
    // Aplicando a classe do container principal
    <div className={styles.login_container}>
      <button className={styles.login_voltar} onClick={() => navigate('/')}>
        <img
          src={logoVerde}
          alt="Logo da Empresa"
          className={styles.logo_img}
        />
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

        <input
          type="password"
          value={password}
          onChange={(e) => setSenha(e.target.value)}
          required
          placeholder="Senha"
          className={styles.login_input}
          disabled={carregando}
        />


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