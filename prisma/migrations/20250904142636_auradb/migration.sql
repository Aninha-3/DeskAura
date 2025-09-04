-- CreateTable
CREATE TABLE `Usuario` (
    `id_usuario` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha_hash` VARCHAR(191) NOT NULL,
    `data_cadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ultimo_login` DATETIME(3) NULL,
    `perfilId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Perfil` (
    `id_perfil` VARCHAR(191) NOT NULL,
    `nome_perfil` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,

    UNIQUE INDEX `Perfil_nome_perfil_key`(`nome_perfil`),
    PRIMARY KEY (`id_perfil`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Simulacao` (
    `id_simulacao` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `parametros` JSON NOT NULL,
    `resultado` JSON NOT NULL,
    `data_execucao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_usuario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_simulacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoricoSimulacao` (
    `id_historico` VARCHAR(191) NOT NULL,
    `acao` VARCHAR(191) NOT NULL,
    `data_acao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `detalhes` VARCHAR(191) NULL,
    `id_simulacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_historico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_perfilId_fkey` FOREIGN KEY (`perfilId`) REFERENCES `Perfil`(`id_perfil`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Simulacao` ADD CONSTRAINT `Simulacao_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoSimulacao` ADD CONSTRAINT `HistoricoSimulacao_id_simulacao_fkey` FOREIGN KEY (`id_simulacao`) REFERENCES `Simulacao`(`id_simulacao`) ON DELETE RESTRICT ON UPDATE CASCADE;
