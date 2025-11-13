import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getPerfil } from "../..//services.ts/api";
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

  if (loading) return <p>Carregando...</p>;
  if (!usuario) return <p>Erro ao carregar perfil.</p>;

  return (
    <div className={styles.perfil_container}>
      <h1>Perfil de {usuario.nome}</h1>
      <p><b>Email:</b> {usuario.email}</p>
      <Link to="/editar-senha" className={styles.botao_editar}>Alterar senha</Link>

      <h2>Suas Simulações</h2>
      {usuario.simulacoes?.length ? (
        <ul>
          {usuario.simulacoes.map((sim: Simulacao) => (
            <li key={sim.id}>
              {sim.cultura} - {sim.solo} - {sim.score}% ({new Date(sim.data).toLocaleDateString()})
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma simulação ainda.</p>
      )}
    </div>
  );
}
