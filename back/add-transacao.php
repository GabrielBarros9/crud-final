<?php
    require('conn.php');
    
    $descricao = $_POST['descricao'];
    $valor = $_POST['valor'];
    $categoria = $_POST['categoria'];
    $data_hora = date('Y-m-d H:i:s');
 
    
    $conn->query("INSERT INTO transacao (descricao, valor, categoria, data_hora) VALUES ('$descricao','$valor','$categoria', '$data_hora')");
    
    header('Access-Control-Allow-Origin: *');
    http_response_code(201);
?>