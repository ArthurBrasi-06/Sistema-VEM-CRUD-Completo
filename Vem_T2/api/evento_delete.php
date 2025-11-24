<?php
header("Content-Type: application/json");
require_once("conexao.php");

$id = $_GET["id"] ?? 0;

$sql = "DELETE FROM evento WHERE id_evento = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

echo json_encode(["sucesso" => $stmt->execute()]);
?>
