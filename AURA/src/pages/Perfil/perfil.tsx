import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./perfil.module.css";

// Ícones
import { FiMail, FiPhone, FiMapPin, FiBarChart2 } from "react-icons/fi";
import { IoCartOutline, IoLeafOutline } from 'react-icons/io5';
import { GiPotato, GiBank, GiPeas } from 'react-icons/gi';

// --- Tipos ---
interface Simulacao {
  id: number;
  cultura: string;
  solo: string;
  score: number;
  data: string;
  iconBgColorClass: string;
}

interface Usuario {
  nome: string;
  email: string;
  telefone: string;
  localizacao: string;
  simulacoes: Simulacao[];
}

// --- Componente principal ---
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

        // Ajuste o endpoint conforme seu backend
        const resposta = await fetch("https://deskaura-backend.onrender.com/api/perfil", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        if (!resposta.ok) throw new Error("Erro ao carregar perfil");

        const data = await resposta.json();
        setUsuario(data);
      } catch (err: any) {
        // Mock fallback
        setUsuario({
          nome: "João Silva",
          email: "joao.silva@email.com",
          telefone: "(11) 98765-4321",
          localizacao: "São Paulo, SP",
          simulacoes: [
            { id: 1, cultura: "Cenoura", solo: "Argiloso", score: 98, data: "14 de mar. de 2024", iconBgColorClass: styles.icon_bg_orange },
            { id: 2, cultura: "Batata", solo: "Argiloso", score: 88, data: "09 de mar. de 2024", iconBgColorClass: styles.icon_bg_brown },
            { id: 3, cultura: "Feijão", solo: "Argiloso", score: 78, data: "04 de mar. de 2024", iconBgColorClass: styles.icon_bg_green_light },
            { id: 4, cultura: "Ervilha", solo: "Arenoso", score: 44, data: "27 de fev. de 2024", iconBgColorClass: styles.icon_bg_green_dark },
            { id: 5, cultura: "Alface", solo: "Arenoso", score: 19, data: "19 de fev. de 2024", iconBgColorClass: styles.icon_bg_green_light },
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
    <div className={styles.perfil_page}>
      <PerfilHeader />

      <main className={styles.perfil_content}>
        <UserInfoCard usuario={usuario} />
        <HistorySummaryCard />

        <div className={styles.simulacoes_list}>
          {usuario.simulacoes.map((simulacao) => (
            <SimulationItem key={simulacao.id} simulacao={simulacao} />
          ))}
        </div>
      </main>

      {erro && <p className={styles.fetch_error}>{erro}</p>}
    </div>
  );
}

// --- Subcomponentes ---
function PerfilHeader() {
  return (
    <header className={styles.perfil_header}>
      <h1>Meu Perfil</h1>
      <p>Gerencie suas informações e acompanhe seu histórico</p>
    </header>
  );
}

function UserInfoCard({ usuario }: { usuario: Usuario }) {
  return (
    <section className={`${styles.card} ${styles.user_info_card}`}>
      <img 
        src="https://via.placeholder.com/80"
        alt="Foto de perfil"
        className={styles.user_avatar}
      />
      <div className={styles.user_details}>
        <h3>{usuario.nome}</h3>
        <p><FiMail /> {usuario.email}</p>
        <p><FiPhone /> {usuario.telefone}</p>
        <p><FiMapPin /> {usuario.localizacao}</p>
      </div>
    </section>
  );
}

function HistorySummaryCard() {
  return (
    <section className={`${styles.card} ${styles.summary_card}`}>
      <div className={`${styles.icon_wrapper} ${styles.icon_bg_green_dark}`}>
        <FiBarChart2 />
      </div>
      <div className={styles.summary_text}>
        <h4>Histórico de Simulações</h4>
        <p>Últimas 5 simulações realizadas</p>
      </div>
      <span className={`${styles.badge} ${styles.badge_success}`}>+12%</span>
    </section>
  );
}

function SimulationItem({ simulacao }: { simulacao: Simulacao }) {
  const { cultura, solo, data, score, iconBgColorClass } = simulacao;

  return (
    <article className={`${styles.card} ${styles.simulacao_item}`}>
      <div className={`${styles.icon_wrapper} ${iconBgColorClass}`}>
        {getCultureIcon(cultura)}
      </div>
      <div className={styles.simulacao_details}>
        <h4>{cultura}</h4>
        <p>Solo: {solo} • {data}</p>
      </div>
      <span className={`${styles.badge} ${getScoreColorClass(score)}`}>
        {score}%
      </span>
    </article>
  );
}

// --- Helpers ---
function getCultureIcon(cultura: string) {
  switch (cultura.toLowerCase()) {
    case 'cenoura': return <IoCartOutline size={20} />;
    case 'batata': return <GiPotato size={20} />;
    case 'feijão': return <GiBank size={20} />;
    case 'ervilha': return <GiPeas size={20} />;
    case 'alface': return <IoLeafOutline size={20} />;
    default: return <IoLeafOutline size={20} />;
  }
}

function getScoreColorClass(score: number): string {
  if (score >= 70) return styles.badge_success;
  if (score >= 30) return styles.badge_warning;
  return styles.badge_danger;
}
  