import { useState } from "react";
import { atualizarSenha } from "../../services.ts/api";
import styles from "./editarSenha.module.css";

export default function EditarSenha() {
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await atualizarSenha(senhaAntiga, novaSenha);
      setMsg("Senha atualizada com sucesso!");
    } catch (err: any) {
      setMsg("Erro ao atualizar senha: " + err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Alterar Senha</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Senha atual"
          value={senhaAntiga}
          onChange={(e) => setSenhaAntiga(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Nova senha"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          required
        />
        <button type="submit">Atualizar</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
