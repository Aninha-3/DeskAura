import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./perfil.module.css";

// Importação dos ícones (necessário: npm install react-icons)
import { FiMail, FiPhone, FiMapPin, FiBarChart2 } from "react-icons/fi";
import { IoCartOutline, IoLeafOutline } from 'react-icons/io5';
import { GiPotato, GiBank, GiPeas } from 'react-icons/gi';


// --- ESTRUTURA DOS DADOS (Atualizada) ---
// A interface foi ajustada para bater com a imagem (ex: 'solo' ao invés de 'setor')
interface Simulacao {
  id: number; // Adicionado um ID para a 'key' do React
  cultura: string;
  solo: string;
  score: number;
  data: string;
  iconBgColorClass: string; // Classe de cor para o ícone
}

interface Usuario {
  nome: string;
  email: string;
  telefone: string;
  localizacao: string;
  simulacoes: Simulacao[];
}

// --- COMPONENTE PRINCIPAL ---
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

        const resposta = await fetch("http://localhost:3000/api/perfil", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        if (!resposta.ok) throw new Error("Erro ao carregar perfil");

        const data = await resposta.json();
        // Aqui você precisaria adaptar a 'data' do backend para a interface Simulacao
        // Ex: data.simulacoes = data.simulacoes.map(s => ({...s, iconBgColorClass: 'bg_verde'}))
        setUsuario(data);

      } catch (err: any) {
        // Se der erro, usa dados mockados QUE BATEM COM A IMAGEM
        setUsuario({
          nome: "João Silva",
          email: "joao.silva@email.com",
          telefone: "(11) 98765-4321", // Telefone da imagem
          localizacao: "São Paulo, SP",
          simulacoes: [
            // Dados e scores ajustados para bater 100% com a imagem
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

  if (loading) return <div className={styles.loading_container}><p>Carregando perfil...</p></div>;
  
  // Exibe o erro mas também o mock, se disponível
  if (!usuario) return <div className={styles.loading_container}><p>{erro || "Nenhum dado disponível."}</p></div>;

  return (
    <div className={styles.perfil_page}>
      {/* 1. Header Verde */}
      <PerfilHeader />

      <main className={styles.perfil_content}>
        {/* 2. Card de Informações do Usuário */}
        <UserInfoCard usuario={usuario} />

        {/* 3. Card de Histórico */}
        <HistorySummaryCard />

        {/* 4. Lista de Simulações */}
        <div className={styles.simulacoes_list}>
          {usuario.simulacoes.map((simulacao) => (
            <SimulationItem key={simulacao.id} simulacao={simulacao} />
          ))}
        </div>
      </main>
      
      {/* Exibe o erro do fetch no final, caso tenha usado mock */}
      {erro && <p className={styles.fetch_error}>{erro}</p>}
    </div>
  );
}


// --- SUB-COMPONENTES (para melhor organização) ---

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
      {/*  */}
      <img 
        src="https://via.placeholder.com/80" // Substitua pelo 'src' real do avatar
        alt="Foto de perfil" 
        className={styles.user_avatar} 
      />
      <div className={styles.user_details}>
        <h3>{usuario.nome}</h3>
        {/* Ícones adicionados */}
        <p><FiMail /> <span>{usuario.email}</span></p>
        <p><FiPhone /> <span>{usuario.telefone}</span></p>
        <p><FiMapPin /> <span>{usuario.localizacao}</span></p>
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
      {/* Badge de % */}
      <span className={`${styles.badge} ${styles.badge_success}`}>
        +12%
      </span>
    </section>
  );
}

interface SimulationItemProps {
  simulacao: Simulacao;
}

function SimulationItem({ simulacao }: SimulationItemProps) {
  const { cultura, solo, data, score, iconBgColorClass } = simulacao;

  return (
    <article className={`${styles.card} ${styles.simulacao_item}`}>
      <div className={`${styles.icon_wrapper} ${iconBgColorClass}`}>
        {/* Helper que renderiza o ícone certo */}
        {getCultureIcon(cultura)}
      </div>
      <div className={styles.simulacao_details}>
        <h4>{cultura}</h4>
        <p>Solo: {solo} &bull; {data}</p>
      </div>
      {/* Helper que define a cor do score */}
      <span className={`${styles.badge} ${getScoreColorClass(score)}`}>
        {score}%
      </span>
    </article>
  );
}


// --- FUNÇÕES HELPERS (Lógica) ---

/**
 * Retorna o componente de ícone correto com base no nome da cultura.
 */
function getCultureIcon(cultura: string) {
  switch (cultura.toLowerCase()) {
    case 'cenoura':
      return <IoCartOutline size={20} />;
    case 'batata':
      return <GiPotato size={20} />;
    case 'feijão':
      return <GiBank size={20} />;
    case 'ervilha':
      return <GiPeas size={20} />;
    case 'alface':
      return <IoLeafOutline size={20} />;
    default:
      return <IoLeafOutline size={20} />; // Ícone padrão
  }
}

/**
 * Retorna a classe CSS correta para o badge de score (lógica de cores).
 */
function getScoreColorClass(score: number): string {
  if (score >= 70) {
    return styles.badge_success; // Verde (para 98, 88, 78)
  }
  if (score >= 30) {
    return styles.badge_warning; // Laranja/Amarelo (para 44)
  }
  return styles.badge_danger; // Vermelho (para 19)
}