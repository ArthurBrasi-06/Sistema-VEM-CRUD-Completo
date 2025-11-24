<?php
header("Content-Type: application/json");
require_once("conexao.php");

$nome = $_POST["nome"] ?? "";
$email = $_POST["email"] ?? "";

if (empty($nome) || empty($email)) {
    echo json_encode(["sucesso" => false, "erro" => "Campos vazios"]);
    exit;
}

$sql = "INSERT INTO usuario (nome, email) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $nome, $email);

echo json_encode(["sucesso" => $stmt->execute()]);
?>
