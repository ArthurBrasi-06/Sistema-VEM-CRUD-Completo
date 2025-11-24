-- ===========================
-- BANCO VEM – DML
-- Inserção de Registros
-- ===========================

USE vem;

-- ===========================
-- USUARIOS
-- ===========================
INSERT INTO usuario (nome, email) VALUES
('Arthur Brasi', 'arthur@gmail.com'),
('Otávio Silva', 'otavio@gmail.com'),
('Kamilly Andrade', 'kamilly@gmail.com');

-- ===========================
-- EVENTOS
-- ===========================
INSERT INTO evento (titulo, descricao, data_evento, local_evento, id_usuario) VALUES
('Caiçara Fest', 'Evento cultural com música e gastronomia.', '2025-01-20', 'Santos - SP', 1),
('Tech Summit', 'Encontro de tecnologia e inovação.', '2025-02-15', 'Osasco - SP', 2),
('Agro Future', 'Palestra sobre tendências do agronegócio.', '2025-03-10', 'Ribeirão Preto - SP', 1);

-- ===========================
-- PAGINAS DE EVENTO
-- ===========================
INSERT INTO pagina_do_evento (id_evento, titulo_pagina, conteudo) VALUES
(1, 'Atrações', 'Bandas ao vivo e gastronomia.'),
(2, 'Agenda', 'Workshops e palestras ao longo do dia.'),
(3, 'Palestrantes', 'Especialistas em agro e tecnologia.');
