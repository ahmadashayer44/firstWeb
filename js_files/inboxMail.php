<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username =  $_SESSION['username'];
    $msg = $_POST['msg'];
     $conn= new mysqli('localhost', 'root', '', 'moviestudio');
     $sql = "INSERT INTO inbox (Username,message) VALUES ('$username', '$msg')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => $conn->error]);
    }

     $conn->close();
    exit;  
}
?>
