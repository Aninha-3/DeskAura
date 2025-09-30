import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/router.js';

const app = express();
app.use(cors());
app.use(express.json());

// Prefixo para as rotas de usuário
app.use('/usuarios', userRoutes);

// Rota health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor rodando' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;