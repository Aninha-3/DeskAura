// src/routes/router.js
import express from "express";
import * as userController from "../Controllers/userController.js";
import {  login, me, authMiddleware, Cadastro } from "../Middlewares/authMiddleware.js";

const router = express.Router();

// 🔓 Rotas públicas
router.post("/usuarios", Cadastro);   // cadastro
router.post("/login", login);    // login

// 🔒 Rotas protegidas
router.get("/auth/me", authMiddleware, me);

// CRUD de usuários (se quiser proteger, adicione o middleware)
router.get("/usuarios", authMiddleware, userController.findAll);
router.get("/usuarios/:id", authMiddleware, userController.findOne);
router.post("/usuarios", authMiddleware, userController.create);
router.put("/usuarios/:id", authMiddleware, userController.update);
router.delete("/usuarios/:id", authMiddleware, userController.remove);

export default router;


//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//*/*/*/*/*/*/*/*/










//import express from 'express';
//import * as userController from '../Controllers/userController.js';

//const router = express.Router();

//router.get('/', userController.findAll);
//router.get('/:id', userController.findOne);
//router.post('/', userController.create);
//router.put('/:id', userController.update);
//router.delete('/:id', userController.remove);

//export default router;
