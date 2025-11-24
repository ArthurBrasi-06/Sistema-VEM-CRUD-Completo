<?php
header("Content-Type: application/json");
require_once("conexao.php");

$id = $_GET["id"] ?? 0;

$sql = "DELETE FROM usuario WHERE id_usuario = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

echo json_encode(["sucesso" => $stmt->execute()]);
?>
