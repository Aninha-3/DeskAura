import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConfirmarCodigo.module.css";
import { SlArrowLeft } from "react-icons/sl";

function ConfirmarCodigo() {
  const [codigo, setCodigo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro("");
    setMensagem("");

    try {
      // Chamada ao backend para validar código
      // await fetch("https://seu-backend.onrender.com/auth/verify-code", {...})

      setMensagem("Código verificado com sucesso!");
      setTimeout(() => navigate("/redefinir/nova-senha"), 1500);
    } catch (err) {
      setErro("Código inválido ou expirado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.redefinir_container}>
      <button className={styles.redefinir_voltar} onClick={() => navigate(-1)}>
        <SlArrowLeft size={25} />
      </button>
      <h2 className={styles.redefinir_titulo}>Confirmar Código</h2>
      <p>Digite o código que você recebeu no e-mail.</p>
      <form onSubmit={handleSubmit} className={styles.redefinir_form}>
        <input
          type="text"
          placeholder="Código de verificação"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          disabled={loading}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Verificando..." : "Confirmar Código"}
        </button>
        {mensagem && <p className={styles.redefinir_sucesso}>{mensagem}</p>}
        {erro && <p className={styles.redefinir_erro}>{erro}</p>}
      </form>
    </div>
  );
}

export default ConfirmarCodigo;
