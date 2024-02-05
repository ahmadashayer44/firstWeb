<?php
session_start(); 
if (isset($_POST['username']) && isset($_POST['password'])) {
    $uname = $_POST['username'];
    $upass = $_POST['password'];
    $error = "";

    try {
        $db = new mysqli('localhost', 'root', '', 'moviestudio');
        $qryStr = "SELECT * FROM users";
        $res = $db->query($qryStr);
        $found = false;

        while ($row = $res->fetch_object()) {
            if ($row->Username == $uname && ($upass==$row->password)) {
                $found = true;
                $_SESSION['username'] = $uname;
                if($row->type=="admin")
                header('Location: /Movies_Ahmad_Ashayer/html_files/showMenu.html');
                else
                header('Location: /Movies_Ahmad_Ashayer/html_files/showMenuForUsers.html');

                exit();
            }
        }

        $db->close();

        if (!$found) {
            $error = "Invalid username or password. Please try again.";
        }
    } catch (Exception $e) {
        $error = "Error: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS</title>
    <link rel="stylesheet" href="../css_files/signIn.css" />
    <style></style>
</head>
<body>
    <div class="box">
        <span class="borderWhite"></span>
        <form method="post" action="">
            <h2>Sign In</h2>
            <div class="inputBox">
                <input type="text" name="username" required="required" />
                <span>Username</span>
                <i></i>
            </div>
            <div class="inputBox">
                <input type="password" name="password" required="required" />
                <span>Password</span>
                <i></i>
            </div>
            <div class="links">
                <a href="signUp.php">Sign Up</a>
                <?php
         if (!empty($error)) {
          echo '<p style="color: #ff6666; margin-top: 7px; font-size: 12px;">' . $error . '</p>';
        }
        ?>
            </div>
            <input type="submit" value="Login" />
        </form>

       
    </div>
</body>
</html>
