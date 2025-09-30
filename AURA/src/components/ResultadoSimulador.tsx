interface Props {
  resultado: any[];
  resetar: () => void;
}

export default function ResultadoSimulador({ resultado, resetar }: Props) {
  return (
    <div>
      <h1>Sugestões de Plantio</h1>
      <ul>
        {resultado.map((r, idx) => (
          <li key={idx}>
            <strong>{r.nome}</strong> - Solo: {r.terra}, pH: {r.ph}, Insolação: {r.insolacao} - Compatibilidade: {r.compatibilidade}%
          </li>
        ))}
      </ul>
      <button onClick={resetar}>Voltar</button>
    </div>
  );
}
