<?php
header("Content-Type: application/json");
require_once("conexao.php");

$sql = "SELECT * FROM usuario ORDER BY id_usuario DESC";
$result = $conn->query($sql);

$dados = [];
while ($row = $result->fetch_assoc()) {
    $dados[] = $row;
}

echo json_encode($dados);
?>

