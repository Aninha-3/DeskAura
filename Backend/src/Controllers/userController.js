import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Buscar todos os usuários
export const findAll = async (req, res) => {
  try {
    const users = await prisma.usuario.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Buscar um usuário pelo ID
export const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.usuario.findUnique({
      where: { id_usuario: id }
    });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar um novo usuário
export const create = async (req, res) => {
  try {
    const { nome, email, senha_hash } = req.body;
    const user = await prisma.usuario.create({
      data: { nome, email, senha_hash }
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um usuário pelo ID
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, senha_hash, ultimo_login } = req.body;
    const user = await prisma.usuario.update({
      where: { id_usuario: id },
      data: { nome, email, senha_hash, ultimo_login }
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Excluir um usuário pelo ID
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.usuario.delete({
      where: { id_usuario: id }
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
