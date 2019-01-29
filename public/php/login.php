<?php

if(!isset($_SESSION)) 
{ 
    session_start(); 
} 
require('connectToDatabase.php');

$username = $_POST['username'];
$password = $_POST['password'];


$sql = "SELECT * FROM users WHERE username = '".$username."'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
	  while($row = $result->fetch_assoc()) {
	  	
			if (password_verify($password,$row['password'])) {
				$_SESSION['loggedIn'] = true;
				$_SESSION['username'] = $username;
				$_SESSION['successMessage'] = "You have successfully logged in!";
				header('location: ../successMessagePage.php');
		    $conn->close();
		    exit;
			}
			else{
				$errorMessage = "The password you entered was incorrect.";
		    $_SESSION['errorMessage'] = $errorMessage;
		    header('location: ../errorMessagePage.php');
		    $conn->close();
		    exit;
			}
    }
} 
else {
    $errorMessage = "The username you entered does not exist.";
    $_SESSION['errorMessage'] = $errorMessage;
    echo $_SESSION['errorMessage'];
    header('location: ../errorMessagePage.php');
    $conn->close();
    exit;
}
$conn->close();