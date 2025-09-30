// src/Controllers/authController.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "marcos_aurelo_secret";

// Gera token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "1d" });
};

// Cadastro
export const register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const existingUser = await prisma.Usuario.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    const senha_hash = await bcrypt.hash(senha, 10);

    const user = await prisma.Usuario.create({
      data: { nome, email, senha_hash },
    });

    const token = generateToken(user.id_usuario);

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const user = await prisma.Usuario.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "Credenciais inválidas" });
    }

    const validPassword = await bcrypt.compare(senha, user.senha_hash);
    if (!validPassword) {
      return res.status(400).json({ error: "Credenciais inválidas" });
    }

    const token = generateToken(user.id_usuario);

    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retorna usuário logado
export const me = async (req, res) => {
  try {
    const user = await prisma.Usuario.findUnique({
      where: { id_usuario: req.userId },
    });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
