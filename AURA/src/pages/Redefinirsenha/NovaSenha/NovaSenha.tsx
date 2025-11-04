import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NovaSenha.module.css";
import { SlArrowLeft } from "react-icons/sl";

function NovaSenha() {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro("");
    setMensagem("");

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      setLoading(false);
      return;
    }

    try {
      // Chamada ao backend para redefinir senha
      // await fetch("https://seu-backend.onrender.com/auth/reset-password", {...})

      setMensagem("Senha redefinida com sucesso!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setErro("Erro ao redefinir senha. Tente novamente.");
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
      <p>Digite sua nova senha abaixo.</p>
      <form onSubmit={handleSubmit} className={styles.redefinir_form}>
        <input
          type="password"
          placeholder="Nova senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          disabled={loading}
          required
        />
        <input
          type="password"
          placeholder="Confirmar nova senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          disabled={loading}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Redefinir Senha"}
        </button>
        {mensagem && <p className={styles.redefinir_sucesso}>{mensagem}</p>}
        {erro && <p className={styles.redefinir_erro}>{erro}</p>}
      </form>
    </div>
  );
}

export default NovaSenha;
