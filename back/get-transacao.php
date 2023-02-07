<?php
    require ('conn.php');

    $users_id = $_GET['user_id'];
    
    $result = $conn->query("SELECT * FROM transacao WHERE users_id = '$users_id'");
    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    header('Access-Control-Allow-Origin: *');
    
    echo json_encode($data);
