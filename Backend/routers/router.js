const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController'); // <-- Corrigido

router.get('/', userController.findAll);       // Listar usuários
router.get('/:id', userController.findOne);    // Buscar usuário por ID
router.post('/', userController.create);       // Criar usuário
router.put('/:id', userController.update);     // Atualizar usuário
router.delete('/:id', userController.delete);  // Excluir usuário

module.exports = router;