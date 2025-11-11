import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from "../../services.ts/api";
import { AuthContext } from '../../context/AuthContext';
import styles from './Cadastro.module.css';

// Importa o logo (ajuste o caminho conforme onde está seu arquivo)
import logoVerde from '../../assets/letraA.png';

function Cadastro() {
  // Estados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Estados de controle da interface
  const [mensagemErro, setMensagemErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  // Contexto e Navegação
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagemErro("");
    setMensagemSucesso("");

    // Validação de Frontend
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
      // Chama a API para cadastrar
      const resposta = await cadastrarUsuario(nome, email, senha);

      // Auto-login
      auth?.login({ user: resposta.user, token: resposta.token });

      setMensagemSucesso("Cadastro realizado com sucesso! Redirecionando...");

      // Redireciona para a página principal após um breve delay
      setTimeout(() => {
        navigate('/simulador');
      }, 1500);

    } catch (error: any) {
      const erroApi = error?.response?.data?.error || "Erro ao cadastrar usuário.";
      setMensagemErro(erroApi);
      setCarregando(false);
    }
  };

  return (
    <div className={styles.cadastro_container}>
      {/* Botão de voltar com logo */}
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
        <input
          className={styles.cadastro_input}
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          disabled={carregando}
        />
        <input
          className={styles.cadastro_input}
          type="password"
          placeholder="Confirme sua senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
          disabled={carregando}
        />

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
