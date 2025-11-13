import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./perfil.module.css";

// Estrutura dos dados
interface Simulacao {
  cultura: string;
  setor: string;
  score: number;
  data: string;
}

interface Usuario {
  nome: string;
  email: string;
  telefone: string;
  localizacao: string;
  simulacoes: Simulacao[];
}

export function Perfil() {
  const auth = useContext(AuthContext);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        if (!auth?.token) {
          setErro("Usuário não autenticado.");
          setLoading(false);
          return;
        }

        // Chamada ao backend
        const resposta = await fetch("http://localhost:3000/api/perfil", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        if (!resposta.ok) throw new Error("Erro ao carregar perfil");

        const data = await resposta.json();
        setUsuario(data);
      } catch (err: any) {
        // Se der erro, usa dados mockados
        setUsuario({
          nome: "João Silva",
          email: "joao.silva@email.com",
          telefone: "(11) 96786-4321",
          localizacao: "São Paulo, SP",
          simulacoes: [
            { cultura: "Cenoura", setor: "Agrícola", score: 98, data: "14 de mar. de 2024" },
            { cultura: "Batata", setor: "Agrícola", score: 96, data: "14 de mar. de 2024" },
            { cultura: "Feijão", setor: "Agrícola", score: 88, data: "08 de mar. de 2024" },
            { cultura: "Ervilha", setor: "Alimentos", score: 44, data: "01 de mar. de 2024" },
            { cultura: "Alface", setor: "Alimentos", score: 10, data: "19 de fev. de 2024" },
          ],
        });
        setErro("Não foi possível carregar do backend, mostrando dados mockados.");
      } finally {
        setLoading(false);
      }
    };

    fetchPerfil();
  }, [auth?.token]);

  if (loading) return <p>Carregando perfil...</p>;
  if (!usuario) return <p>{erro || "Nenhum dado disponível."}</p>;

  return (
    <div className={styles.perfil_container}>
      <h1>Perfil do Usuário</h1>

      <div className={styles.perfil_info}>
        <p><strong>Nome:</strong> {usuario.nome}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Telefone:</strong> {usuario.telefone}</p>
        <p><strong>Localização:</strong> {usuario.localizacao}</p>
      </div>

      <h2>Histórico de Simulações</h2>
      <ul className={styles.perfil_simulacoes}>
        {usuario.simulacoes.map((simulacao, index) => (
          <li key={index} className={styles.perfil_item}>
            <p><strong>Cultura:</strong> {simulacao.cultura}</p>
            <p><strong>Setor:</strong> {simulacao.setor}</p>
            <p><strong>Score:</strong> {simulacao.score}</p>
            <p><strong>Data:</strong> {simulacao.data}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
