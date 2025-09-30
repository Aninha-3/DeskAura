// src/routes/router.js
import express from "express";
import * as userController from "../Controllers/userController.js";
import { authMiddleware } from "../Middlewares/authMiddleware.js";
import { register, login, me } from "../Controllers/authController.js";

const router = express.Router();

// 🔓 Rotas públicas (autenticação)
router.post("/register", register);   // cadastro público
router.post("/login", login);         // login público

// 🔒 Rotas protegidas
router.get("/auth/me", authMiddleware, me); // dados do usuário logado

// 🔒 CRUD de usuários (protegido)
router.get("/", authMiddleware, userController.findAll);
router.get("/:id", authMiddleware, userController.findOne);
router.post("/", authMiddleware, userController.create);
router.put("/:id", authMiddleware, userController.update);
router.delete("/:id", authMiddleware, userController.remove);

export default router;