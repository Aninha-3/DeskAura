import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from "../../services.ts/api";
import { AuthContext } from '../../context/AuthContext';
import { SlArrowLeft } from "react-icons/sl";
import styles from './Cadastro.module.css'; // Lembre-se de ter o CSS correspondente

function Cadastro() {
  // Estados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState(""); // <-- Campo importante para UX

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

      // Sua nova lógica de auto-login!
      auth?.login({ user: resposta.user, token: resposta.token });

      setMensagemSucesso("Cadastro realizado com sucesso! Redirecionando...");

      // Redireciona para a página principal após um breve delay
      setTimeout(() => {
        navigate('/simulador');
      }, 1500);

    } catch (error: any) {
      const erroApi = error?.response?.data?.error || "Erro ao cadastrar usuário.";
      setMensagemErro(erroApi);
      setCarregando(false); // Garante que o carregamento pare em caso de erro
    }
    // Não precisamos de `finally` pois o `setCarregando(false)` já é chamado no erro,
    // e no sucesso o usuário será redirecionado, então o estado do botão não importa.
  };

  return (
    <div className={styles.cadastro_container}>
      <button className={styles.cadastro_voltar} onClick={() => navigate(-1)}>
        <SlArrowLeft size={25} />
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
          type="email" // <-- Corrigido para 'email' para melhor semântica e validação do navegador
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