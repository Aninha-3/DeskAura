import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NovaSenha.module.css";
import { SlArrowLeft } from "react-icons/sl";
import { redefinirSenha } from "../../../services.ts/api";

function NovaSenha() {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const email = sessionStorage.getItem("recoverEmail");
  const token = sessionStorage.getItem("recoverToken");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setMensagem("");
    setLoading(true);

    try {
      if (!email || !token) throw new Error("Fluxo inválido. Volte ao início.");

      if (novaSenha !== confirmSenha) {
        throw new Error("As senhas não coincidem.");
      }

      // ENVIA OS 3 PARÂMETROS AGORA
      await redefinirSenha(email, token, novaSenha);

      setMensagem("Senha alterada com sucesso!");

      setTimeout(() => navigate("/login"), 1500);
    } catch (err: any) {
      setErro(err.message || "Erro ao alterar senha.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.redefinir_container}>
      <button className={styles.redefinir_voltar} onClick={() => navigate(-1)}>
        <SlArrowLeft size={25} />
      </button>

      <h2 className={styles.redefinir_titulo}>Nova Senha</h2>
      <p>Escolha sua nova senha.</p>

      <form onSubmit={handleSubmit} className={styles.redefinir_form}>
        <input
          type="password"
          placeholder="Nova senha"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          required
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmSenha}
          onChange={(e) => setConfirmSenha(e.target.value)}
          required
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar Nova Senha"}
        </button>

        {mensagem && <p className={styles.redefinir_sucesso}>{mensagem}</p>}
        {erro && <p className={styles.redefinir_erro}>{erro}</p>}
      </form>
    </div>
  );
}

export default NovaSenha;
