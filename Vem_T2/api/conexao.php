<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$host = "localhost";
$user = "root";
$pass = "";
$db = "vem";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode([
        "sucesso" => false,
        "erro" => "Erro na conexão: " . $conn->connect_error
    ]));
}

$conn->set_charset("utf8");
?>
