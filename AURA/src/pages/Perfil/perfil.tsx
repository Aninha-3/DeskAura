import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getPerfil } from "../../services.ts/api";
import styles from "./perfil.module.css";
import { Link } from "react-router-dom";

interface Simulacao {
  id: number;
  cultura: string;
  solo: string;
  score: number;
  data: string;
}

export function Perfil() {
  const { token } = useContext(AuthContext)!;
  const [usuario, setUsuario] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarPerfil = async () => {
      try {
        const data = await getPerfil();
        setUsuario(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (token) carregarPerfil();
  }, [token]);

  if (loading)
    return (
      <div className={styles.perfil_container}>
        <p>Carregando...</p>
      </div>
    );

  if (!usuario)
    return (
      <div className={styles.perfil_container}>
        <p>Erro ao carregar perfil.</p>
      </div>
    );

  return (
    <div className={styles.perfil_container}>
      <div className={styles.perfil_header}>
        <h1>Perfil de {usuario.nome}</h1>
        <p>{usuario.email}</p>
      </div>

      <div className={styles.perfil_card}>
        <h2>Informações Pessoais</h2>
        <p>
          <strong>Nome:</strong> {usuario.nome}
        </p>
        <p>
          <strong>Email:</strong> {usuario.email}
        </p>

        <Link to="/editar-senha" className={styles.botao_editar}>
          Alterar Senha
        </Link>
      </div>

      <h2>Suas Simulações</h2>
      {usuario.simulacoes?.length ? (
        <ul>
          {usuario.simulacoes.map((sim: Simulacao) => (
            <li key={sim.id}>
              <div>
                <strong>{sim.cultura}</strong> — {sim.solo}
              </div>
              <span>
                {sim.score}% | {new Date(sim.data).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.perfil_empty}>Nenhuma simulação ainda.</p>
      )}
    </div>
  );
}
