import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// chave secreta do JWT (coloque no .env)
const JWT_SECRET = process.env.JWT_SECRET || "marcos_aurelo_secret";

// Função para gerar token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "1d" });
};

// Cadastro
export const Cadastro = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Verifica se já existe usuário
    const existingUser = await prisma.Usuario.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    // Criptografa senha
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

    const senhaValida = await bcrypt.compare(senha, user.senha_hash);
    if (!senhaValida) {
      return res.status(400).json({ error: "Credenciais inválidas" });
    }

    const token = generateToken(user.id_usuario);

    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Middleware para proteger rotas
export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Token não fornecido" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token inválido" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido ou expirado" });
  }
};

// Rota para pegar usuário logado
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
