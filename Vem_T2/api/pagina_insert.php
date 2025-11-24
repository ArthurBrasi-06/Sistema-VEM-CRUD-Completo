<?php
header("Content-Type: application/json");
require_once("conexao.php");

$id_evento = $_POST["id_evento"] ?? "";
$titulo = $_POST["titulo_pagina"] ?? "";
$conteudo = $_POST["conteudo"] ?? "";

$sql = "INSERT INTO pagina_do_evento (id_evento, titulo_pagina, conteudo)
VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iss", $id_evento, $titulo, $conteudo);

echo json_encode(["sucesso" => $stmt->execute()]);
?>
