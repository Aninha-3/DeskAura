const express = require('express');
const app = express();
const corsMiddleware = require('./Middleware/corsConfig');
const userRouter = require('./routers/router');

app.use(corsMiddleware);           // Middleware de CORS
app.use(express.json());           // Middleware para JSON
app.use('/usuarios', userRouter);  // Define o prefixo das rotas

app.listen(3001, () => {
  console.log('🚀 Servidor rodando na porta 3001');
});


module.exports = app;