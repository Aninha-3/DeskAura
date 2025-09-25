import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

console.log("Servidor iniciado");

// =======================
// Rotas de usuários
// =======================

// Listar todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Erro ao listar usuários' });
  }
});

// Criar usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, email, senha_hash, perfilId } = req.body;
    const novoUsuario = await prisma.usuario.create({
      data: { nome, email, senha_hash, perfilId },
    });
    res.json(novoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Erro ao criar usuário' });
  }
});

// =======================
// Simulador sem IA
// =======================
app.post('/simulador', (req, res) => {
  const { tipoSolo, nivelPh, insolacao, desejo } = req.body;

  // Base de plantas
  const plantas = [
    { nome: 'Alface', solo: ['arenoso', 'argiloso'], ph: ['neutro'], insolacao: ['alta', 'media'] },
    { nome: 'Tomate', solo: ['argiloso'], ph: ['neutro', 'acido'], insolacao: ['alta'] },
    { nome: 'Cenoura', solo: ['arenoso'], ph: ['neutro', 'basico'], insolacao: ['media'] },
    { nome: 'Espinafre', solo: ['argiloso', 'arenoso'], ph: ['neutro'], insolacao: ['media', 'baixa'] },
    { nome: 'Rúcula', solo: ['arenoso'], ph: ['neutro'], insolacao: ['alta', 'media'] },
  ];

  // Calcula compatibilidade
  const suggestions = plantas.map((planta) => {
    let compatibilidade = 0;

    if (planta.solo.includes(tipoSolo)) compatibilidade += 40;
    if (planta.ph.includes(nivelPh)) compatibilidade += 30;
    if (planta.insolacao.includes(insolacao)) compatibilidade += 20;
    if (planta.nome.toLowerCase() === (desejo || '').toLowerCase()) compatibilidade += 10;

    return {
      nome: planta.nome,
      terra: planta.solo.join(', '),
      ph: planta.ph.join(', '),
      insolacao: planta.insolacao.join(', '),
      compatibilidade
    };
  });

  // Ordena por compatibilidade
  suggestions.sort((a, b) => b.compatibilidade - a.compatibilidade);

  // Dados para ChartJS
  const chartData = {
    labels: suggestions.map(p => p.nome),
    datasets: [
      {
        label: 'Compatibilidade (%)',
        data: suggestions.map(p => p.compatibilidade),
        backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#2196f3', '#9c27b0']
      }
    ]
  };

  res.json({ suggestions, chartData });
});

// =======================
// Rodar servidor
// =======================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
