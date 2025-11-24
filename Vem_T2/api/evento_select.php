<?php
header("Content-Type: application/json");
require_once("conexao.php");

$sql = "SELECT evento.*, usuario.nome AS criador
        FROM evento
        LEFT JOIN usuario ON usuario.id_usuario = evento.id_usuario
        ORDER BY id_evento DESC";

$result = $conn->query($sql);

$dados = [];
while ($row = $result->fetch_assoc()) {
    $dados[] = $row;
}

echo json_encode($dados);
?>
