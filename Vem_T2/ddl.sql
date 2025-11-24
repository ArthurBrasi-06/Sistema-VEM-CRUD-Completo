-- ===========================
-- BANCO DE DADOS VEM – DDL
-- Estrutura das Tabelas
-- ===========================

CREATE DATABASE IF NOT EXISTS vem;
USE vem;

-- ===========================
-- TABELA USUARIO
-- ===========================
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE
);

-- ===========================
-- TABELA EVENTO
-- ===========================
CREATE TABLE evento (
    id_evento INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    data_evento DATE NOT NULL,
    local_evento VARCHAR(150) NOT NULL,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- ===========================
-- TABELA PAGINA_DO_EVENTO
-- ===========================
CREATE TABLE pagina_do_evento (
    id_pagina INT AUTO_INCREMENT PRIMARY KEY,
    id_evento INT NOT NULL,
    titulo_pagina VARCHAR(150) NOT NULL,
    conteudo TEXT,
    FOREIGN KEY (id_evento) REFERENCES evento(id_evento)
);
