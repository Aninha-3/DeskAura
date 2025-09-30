import styles from '../pages/Simulador/Simulador.module.css';

interface Props {
  resultado: any[];
  resetar: () => void;
}

export default function ResultadoSimulador({ resultado, resetar }: Props) {
  // Agrupar sugestões por tipo de solo compatível
  const sugestoesAgrupadas = [
    {
      titulo: "SOLO ARENOSO",
      plantas: resultado.filter(r => r.terra === 'arenoso').slice(0, 4)
    },
    {
      titulo: "SOLO ARGILOSO", 
      plantas: resultado.filter(r => r.terra === 'argiloso').slice(0, 4)
    },
    {
      titulo: "SOLO HUMOSO",
      plantas: resultado.filter(r => r.terra === 'humoso').slice(0, 4)
    },
    {
      titulo: "CULTURAS DE ALTA INSOLAÇÃO",
      plantas: resultado.filter(r => r.insolacao === 'alta').slice(0, 3)
    },
    {
      titulo: "CULTURAS VERSÁTEIS",
      plantas: resultado.filter(r => r.compatibilidade >= 80).slice(0, 3)
    },
    {
      titulo: "PLANTAS RÁPIDAS",
      plantas: resultado.slice(0, 3).map(planta => ({
        ...planta,
        ciclo: "45-60 dias"
      }))
    }
  ];

  return (
    <div>
      <h2 className={styles.resultsTitle}>Sugestões de Plantio para Seu Solo</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Com base nas características informadas, estas plantas são mais compatíveis:
      </p>

      <div className={styles.suggestionsGrid}>
        {sugestoesAgrupadas.map((grupo, index) => (
          <div key={index} className={styles.suggestionCategory}>
            <h3 className={styles.categoryTitle}>{grupo.titulo}</h3>
            <ul className={styles.suggestionList}>
              {grupo.plantas.map((planta, idx) => (
                <li key={idx} className={styles.suggestionItem}>
                  <strong>{planta.nome}</strong> | 
                  Solo: {planta.terra} | 
                  pH: {planta.ph} | 
                  Insolação: {planta.insolacao}
                  {planta.ciclo && ` | Ciclo: ${planta.ciclo}`}
                  {planta.compatibilidade && ` | Compatibilidade: ${planta.compatibilidade}%`}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button onClick={resetar} className={styles.backButton}>
        Voltar e Fazer Nova Análise
      </button>
    </div>
  );
}