<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username =  $_SESSION['username'];
    $movieID = $_POST['movieID'];
    $movieName = $_POST['movieName'];
    $conn= new mysqli('localhost', 'root', '', 'moviestudio');

     $sql = "INSERT INTO favorites (Username, MovieID, MovieName) VALUES ('$username', '$movieID', '$movieName')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => $conn->error]);
    }

     $conn->close();
    exit;  
}
?>
