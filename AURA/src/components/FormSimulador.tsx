import { useState } from "react";

interface Props {
  setResultado: (data: any) => void;
}

export default function FormSimulador({ setResultado }: Props) {
  const [tipoSolo, setTipoSolo] = useState("");
  const [nivelPh, setNivelPh] = useState("");
  const [insolacao, setInsolacao] = useState("");
  const [desejo, setDesejo] = useState("");
  const [loading, setLoading] = useState(false);

  function analisar() {
    setLoading(true);

    const dadosFormulario = { tipoSolo, nivelPh, insolacao, desejo };

    try {
      // Chama a função do frontend que gera sugestões simuladas
      setResultado(dadosFormulario);
    } catch (err) {
      console.error(err);
      alert("Erro ao gerar sugestões.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Simulador Inteligente de Plantio</h1>

      <label>Tipo de solo:</label>
      <select value={tipoSolo} onChange={e => setTipoSolo(e.target.value)}>
        <option value="">Selecione</option>
        <option value="arenoso">Arenoso</option>
        <option value="argiloso">Argiloso</option>
        <option value="misturado">Misturado</option>
      </select>

      <label>Nível de pH:</label>
      <select value={nivelPh} onChange={e => setNivelPh(e.target.value)}>
        <option value="">Selecione</option>
        <option value="ácido">Ácido</option>
        <option value="neutro">Neutro</option>
        <option value="alcalino">Alcalino</option>
      </select>

      <label>Insolação:</label>
      <select value={insolacao} onChange={e => setInsolacao(e.target.value)}>
        <option value="">Selecione</option>
        <option value="baixa">Baixa</option>
        <option value="média">Média</option>
        <option value="alta">Alta</option>
      </select>

      <label>Desejo de plantar (opcional):</label>
      <input
        type="text"
        value={desejo}
        onChange={e => setDesejo(e.target.value)}
        placeholder="Ex: Alface, Tomate..."
      />

      <button onClick={analisar} disabled={loading}>
        {loading ? "Analisando..." : "Analisar"}
      </button>
    </div>
  );
}
