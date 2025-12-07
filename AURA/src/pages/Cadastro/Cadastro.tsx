import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from "../../services.ts/api";
import { AuthContext } from '../../context/AuthContext';
import styles from './Cadastro.module.css';

// Importa o logo
import logoVerde from '../../assets/letraA.png';

function Cadastro() {
  // Estados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Mostrar/Ocultar senha
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  // Mensagens
  const [mensagemErro, setMensagemErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagemErro("");
    setMensagemSucesso("");

    if (senha !== confirmarSenha) {
      setMensagemErro("As senhas não coincidem.");
      return;
    }
    if (senha.length < 6) {
      setMensagemErro("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    setCarregando(true);

    try {
      const resposta = await cadastrarUsuario(nome, email, senha);
      auth?.login({ user: resposta.user, token: resposta.token });

      alert("Cadastro realizado com sucesso! Redirecionando...");

      setTimeout(() => {
        navigate('/simulador');
      }, 1500);

    } catch (error: any) {
      const erroApi = error?.response?.data?.error || "Erro ao cadastrar usuário.";
      alert(erroApi);
      setCarregando(false);
    }
  };

  return (
    <div className={styles.cadastro_container}>
      
      <button className={styles.logo_container} onClick={() => navigate('/')}>
        <img
          src={logoVerde}
          alt="Logo da Empresa"
          className={styles.logo_img}
        />
      </button>

      <h1 className={styles.cadastro_titulo}>Cadastro</h1>

      <form onSubmit={handleSubmit} className={styles.cadastro_formulario}>

        <input
          className={styles.cadastro_input}
          type="text"
          value={nome}
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
          required
          disabled={carregando}
        />

        <input
          className={styles.cadastro_input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={carregando}
        />

        {/* SENHA */}
        <div className={styles.input_group}>
          <input
            className={styles.cadastro_input}
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            disabled={carregando}
          />

          <button
            type="button"
            className={styles.eye_button}
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? (
              <svg className={styles.eye_icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.584 10.584A3 3 0 0113.416 13.416M9.88 4.88A9.953 9.953 0 0112 4c5.523 0 10 4.477 10 10a9.953 9.953 0 01-.879 3.88M6.62 6.62A9.957 9.957 0 002 14c0 1.657.402 3.222 1.121 4.62" />
              </svg>
            ) : (
              <svg className={styles.eye_icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* CONFIRMAR SENHA */}
        <div className={styles.input_group}>
          <input
            className={styles.cadastro_input}
            type={mostrarConfirmar ? "text" : "password"}
            placeholder="Confirme sua senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
            disabled={carregando}
          />

          <button
            type="button"
            className={styles.eye_button}
            onClick={() => setMostrarConfirmar(!mostrarConfirmar)}
          >
            {mostrarConfirmar ? (
              <svg className={styles.eye_icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.584 10.584A3 3 0 0113.416 13.416M9.88 4.88A9.953 9.953 0 0112 4c5.523 0 10 4.477 10 10a9.953 9.953 0 01-.879 3.88M6.62 6.62A9.957 9.957 0 002 14c0 1.657.402 3.222 1.121 4.62" />
              </svg>
            ) : (
              <svg className={styles.eye_icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>

        <div className={styles.cadastro_subtexto}>
          <p>Já tem uma conta? <Link to="/login">Login</Link></p>
        </div>

        {mensagemErro && <p className={styles.cadastro_mensagemErro}>{mensagemErro}</p>}
        {mensagemSucesso && <p className={styles.cadastro_mensagemSucesso}>{mensagemSucesso}</p>}

        <button type="submit" className={styles.cadastro_botao} disabled={carregando}>
          {carregando ? "Cadastrando..." : "Cadastrar"}
        </button>

      </form>
    </div>
  );
}

export default Cadastro;
