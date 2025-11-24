<?php
header("Content-Type: application/json");
require_once("conexao.php");

$titulo = $_POST["titulo"] ?? "";
$descricao = $_POST["descricao"] ?? "";
$data_evento = $_POST["data_evento"] ?? "";
$local = $_POST["local_evento"] ?? "";
$id_usuario = $_POST["id_usuario"] ?? "";

$sql = "INSERT INTO evento (titulo, descricao, data_evento, local_evento, id_usuario) 
VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssi", $titulo, $descricao, $data_evento, $local, $id_usuario);

echo json_encode(["sucesso" => $stmt->execute()]);
?>
