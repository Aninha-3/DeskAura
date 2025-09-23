import express from 'express';
import cors from 'cors';
import userRoutes from './Routes/router.js'; // precisa do .js no final

const app = express();
app.use(cors());
app.use(express.json());

// Prefixo para as rotas de usuário
app.use('/usuarios', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
  