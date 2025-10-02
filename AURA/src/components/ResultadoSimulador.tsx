import styles from '../pages/Simulador/Simulador.module.css';

interface Props {
  resultado: any[];
  resetar: () => void;
}

export default function ResultadoSimulador({ resultado, resetar }: Props) {

  // Agrupar sugestões em categorias inteligentes
  const sugestoesAgrupadas = [
    {
      titulo: "MAIOR COMPATIBILIDADE",
      plantas: resultado.filter(r => r.compatibilidade >= 80)
    },
    {
      titulo: "COMPATIBILIDADE MÉDIA",
      plantas: resultado.filter(r => r.compatibilidade >= 60 && r.compatibilidade < 80)
    },
    {
      titulo: "SUGESTÕES ADICIONAIS",
      plantas: resultado
    }
  ];

  return (
    <div className={styles.resultContainer}>
      <h2 className={styles.resultsTitle}>Sugestões de Plantio para Seu Solo</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Com base nas características informadas, estas plantas são mais compatíveis:
      </p>

      <div className={styles.suggestionsGrid}>
        {sugestoesAgrupadas.map((grupo, index) => (
          <div key={index} className={styles.suggestionCategory}>
            <h3 className={styles.categoryTitle}>{grupo.titulo}</h3>
            {grupo.plantas.length > 0 ? (
              <ul className={styles.suggestionList}>
                {grupo.plantas.map((planta, idx) => (
                  <li key={idx} className={styles.suggestionItem}>
                    <strong>{planta.nome}</strong> | 
                    Solo: {planta.terra} | 
                    pH: {planta.ph} | 
                    Insolação: {planta.insolacao} | 
                    Compatibilidade: {planta.compatibilidade}%
                    {planta.ciclo && ` | Ciclo: ${planta.ciclo}`}
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: '#999', fontStyle: 'italic' }}>
                Nenhuma planta encontrada para esta categoria.
              </p>
            )}
          </div>
        ))}
      </div>

      <button onClick={resetar} className={styles.backButton}>
        Voltar e Fazer Nova Análise
      </button>
    </div>
  );
}
