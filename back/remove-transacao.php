<?php
    require('conn.php');
    
    $id = $_GET['id'];
    
    $conn->query("DELETE FROM transacao WHERE id = $id");
    
    header('Access-Control-Allow-Origin: *');
    http_response_code(201);
?>