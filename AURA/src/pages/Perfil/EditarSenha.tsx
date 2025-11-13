import { useState } from "react";
import { atualizarSenha } from "../../services.ts/api";
import styles from "./editarSenha.module.css";

export default function EditarSenha() {
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      await atualizarSenha(senhaAntiga, novaSenha);
      setMsg("Senha atualizada com sucesso!");
      setSenhaAntiga("");
      setNovaSenha("");
    } catch (err: any) {
      setMsg("Erro ao atualizar senha: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.editarSenha_container}>
      <div className={styles.editarSenha_card}>
        <h2 className={styles.editarSenha_title}>Alterar Senha</h2>

        <form onSubmit={handleSubmit} className={styles.editarSenha_form}>
          <input
            type="password"
            placeholder="Senha atual"
            value={senhaAntiga}
            onChange={(e) => setSenhaAntiga(e.target.value)}
            required
            className={styles.editarSenha_input}
          />

          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            required
            className={styles.editarSenha_input}
          />

          <button
            type="submit"
            className={styles.editarSenha_button}
            disabled={loading}
          >
            {loading ? "Atualizando..." : "Atualizar"}
          </button>
        </form>

        {msg && (
          <p
            className={
              msg.includes("sucesso")
                ? styles.editarSenha_mensagemSucesso
                : styles.editarSenha_mensagemErro
            }
          >
            {msg}
          </p>
        )}

        <p
          className={styles.editarSenha_voltar}
          onClick={() => window.history.back()}
        >
          ← Voltar
        </p>
      </div>
    </div>
  );
}
