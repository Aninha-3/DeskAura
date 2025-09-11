import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Listar todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.Usuario.findMany(); // <-- aqui mudou de user para Usuario
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Criar usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, email, senha_hash, perfilId } = req.body;
    const novoUsuario = await prisma.Usuario.create({
      data: { nome, email, senha_hash, perfilId },
    });
    res.json(novoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
 async function main() {
  const usuarios = await prisma.usuario.findMany();
  
}

main();