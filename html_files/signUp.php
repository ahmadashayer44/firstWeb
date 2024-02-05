<?php
if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['first_name']) && isset($_POST['last_name'])) {
    $uname = $_POST['username'];
    $upass = $_POST['password'];
    $fname = $_POST['first_name'];
    $lname = $_POST['last_name'];
    $cpass = $_POST['confirm_password'];
    $error = "";

    try {
        $db = new mysqli('localhost', 'root', '', 'moviestudio');

         if ($upass == $cpass) {
            $qryStr = "INSERT INTO users (Username, first_name, last_name, password,type) VALUES ('$uname', '$fname', '$lname', '$upass','user')";
            $db->query($qryStr);
            $db->close();
            $error = "<span style='color: green;'>Created account Sucsessfully!</span>";
         } else {
          $error ="<span style='color: red;'>Passwords do not match</span>";
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>CSS</title>
    <link rel="stylesheet" href="../css_files/signUp.css" />
    <style></style>
    <script src="../js_files/signUp.js"></script>
</head>
<body>
    <div class="box">
        <form method="post" action="">
            <h2>Sign Up</h2>
            <div class="inputTexts">
                <input
                    class="firstNameInput"
                    type="text"
                    name="first_name"
                    required="required"
                />
                <span>First name</span>
                <i></i>
            </div>

            <div class="inputTexts">
                <input
                    class="lastNameInput"
                    type="text"
                    name="last_name"
                    required="required"
                />
                <span>Last name</span>
                <i></i>
            </div>

            <div class="inputTexts">
                <input
                    class="usernameInput"
                    type="text"
                    name="username"
                    required="required"
                />
                <span>Username</span>
                <i></i>
            </div>

            <div class="inputTexts">
                <input
                    class="passInput"
                    type="password"
                    name="password"
                    required="required"
                />
                <span>Password</span>
                <i></i>
            </div>

            <div class="inputTexts">
                <input
                    class="passSecInput"
                    type="password"
                    name="confirm_password"
                    required="required"
                />
                <span>Confirmed password</span>
                <i></i>
            </div>
            <?php
             if (!empty($error)) {
                echo '<p style="margin-left: 12%;">' . $error . '</p>';
            }
            ?>
            <input type="submit" value="Create Account" />
            <button onclick="goToSignInPage()">Sign In</button>
        </form>
    </div>
</body>
</html>
<script>
        function goToSignInPage() {
             window.location.href = "signInPage.php";
        }
    </script>