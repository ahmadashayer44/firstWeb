<?php
session_start();
$username =  $_SESSION['username'];
$conn= new mysqli('localhost', 'root', '', 'moviestudio');
     $sql = "SELECT MovieID FROM favorites WHERE Username = '$username'";
    $result = $conn->query($sql);
    $imdbIds = [];
    if ($result->num_rows > 0) {
         while ($row = $result->fetch_assoc()) {
            $imdbIds[] = $row['MovieID'];
        }
    }
$conn->close();
echo json_encode(['imdbIds' => $imdbIds]);
exit;
?>
