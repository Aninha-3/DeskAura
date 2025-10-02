// algoritmo.ts
export interface Planta {
  nome: string;
  terra: string[];
  ph: string[];
  insolacao: string[];
  ciclo: string;
}

const basePlantas: Planta[] = [
  { nome: "Tomate", terra: ["arenoso", "argiloso"], ph: ["levemente-acido", "neutro"], insolacao: ["alta"], ciclo: "90 dias" },
  { nome: "Alface", terra: ["argiloso", "humoso"], ph: ["neutro", "levemente-acido"], insolacao: ["media"], ciclo: "45 dias" },
  { nome: "Cenoura", terra: ["arenoso"], ph: ["acido", "levemente-acido"], insolacao: ["media"], ciclo: "80 dias" },
  { nome: "Feijão", terra: ["humoso"], ph: ["neutro"], insolacao: ["alta"], ciclo: "70 dias" },
  { nome: "Batata", terra: ["argiloso"], ph: ["levemente-acido", "neutro"], insolacao: ["alta"], ciclo: "100 dias" },
  { nome: "Milho", terra: ["arenoso", "argiloso"], ph: ["neutro", "levemente-acido"], insolacao: ["alta"], ciclo: "120 dias" },
];

export function gerarSugestoes(formData: {
  tipoSolo: string;
  nivelPh: string;
  insolacao: string;
  desejo?: string;
}) {
  const { tipoSolo, nivelPh, insolacao, desejo } = formData;

  return basePlantas.map(planta => {
    let pontos = 0;

    // Compatibilidade com solo
    if (planta.terra.includes(tipoSolo)) pontos += 30;

    // Compatibilidade com pH
    if (planta.ph.includes(nivelPh)) pontos += 30;

    // Compatibilidade com insolação
    if (planta.insolacao.includes(insolacao)) pontos += 30;

    // Bônus se for o desejo do usuário
    if (desejo && planta.nome.toLowerCase().includes(desejo.toLowerCase())) {
      pontos += 20;
    }

    return {
      ...planta,
      compatibilidade: Math.min(pontos, 100) // limite no 100%
    };
  }).sort((a, b) => b.compatibilidade - a.compatibilidade); // ordenar pelo mais compatível
}
