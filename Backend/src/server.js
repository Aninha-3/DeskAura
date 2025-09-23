const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Prefixo para as rotas de usuário
app.use('/usuarios', userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

module.exports = app;   