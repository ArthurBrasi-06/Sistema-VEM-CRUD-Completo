<?php
header("Content-Type: application/json");
require_once("conexao.php");

$sql = "SELECT pagina_do_evento.*, evento.titulo AS nome_evento
        FROM pagina_do_evento
        LEFT JOIN evento ON evento.id_evento = pagina_do_evento.id_evento
        ORDER BY id_pagina DESC";

$result = $conn->query($sql);

$dados = [];
while ($row = $result->fetch_assoc()) {
    $dados[] = $row;
}

echo json_encode($dados);
?>
