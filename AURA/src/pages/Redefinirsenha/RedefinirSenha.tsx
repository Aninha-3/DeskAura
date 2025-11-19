import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from './redefinir.senha.module.css';
import { SlArrowLeft } from "react-icons/sl";
import { solicitarCodigo } from "../../services.ts/api";

function RedefinirSenha() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleResetSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErro('');
    setMensagem('');

    try {
      await solicitarCodigo(email);

      sessionStorage.setItem("recoverEmail", email);

      setMensagem("Se o e-mail existir, você receberá o código em instantes.");

      setTimeout(() => navigate("/redefinir/confirmar-codigo"), 1500);

    } catch (error: any) {
      console.error(error);
      setErro(error.message || "Erro ao solicitar código.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.redefinir_container}>
      <button className={styles.redefinir_voltar} onClick={() => navigate(-1)}>
        <SlArrowLeft size={25} />
      </button>

      <h2 className={styles.redefinir_titulo}>Redefinir Senha</h2>
      <p>Digite seu e-mail para enviar o código.</p>

      <form onSubmit={handleResetSubmit} className={styles.redefinir_form}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Código"}
        </button>

        {mensagem && <p className={styles.redefinir_sucesso}>{mensagem}</p>}
        {erro && <p className={styles.redefinir_erro}>{erro}</p>}
      </form>

      <div className={styles.redefinir_voltarLogin}>
        <Link to="/login">Voltar para o Login</Link>
      </div>
    </div>
  );
}

export default RedefinirSenha;
