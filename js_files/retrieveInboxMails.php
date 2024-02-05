<?php
session_start();
$conn = new mysqli('localhost', 'root', '', 'moviestudio');

$sql = "SELECT Username, message FROM inbox";
$result = $conn->query($sql);

$userAndMsg = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $userAndMsg[] = [
            'Username' => $row['Username'],
            'message' => $row['message'],
        ];
    }
}

$conn->close();
echo json_encode(['userAndMsg' => $userAndMsg]);  
exit;
?>
