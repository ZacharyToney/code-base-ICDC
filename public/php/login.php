<?php

if(!isset($_SESSION)) 
{ 
    session_start(); 
} 
require('connectToDatabase.php');

$username = $_POST['username'];
$password = $_POST['password'];

/**
 * Query to get username from database
 */
$sql = "SELECT * FROM users WHERE username = '".$username."'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    /**
	 * Outputs data to each row
	 */
	  while($row = $result->fetch_assoc()) {
	  	
			if (password_verify($password,$row['password'])) {
				$_SESSION['loggedIn'] = true;
				$_SESSION['username'] = $username;
				$_SESSION['successMessage'] = "You have successfully logged in!";
				header('location: ../successMessagePage.php');
		    $conn->close();
		    exit;
			}
			/**
			 * error message if username is incorrect
			 */
			else{
				$errorMessage = "The password you entered was incorrect.";
		    $_SESSION['errorMessage'] = $errorMessage;
		    header('location: ../errorMessagePage.php');
		    $conn->close();
		    exit;
			}
    }
} 
/**
 * error message if username does not exist
 */
else {
    $errorMessage = "The username you entered does not exist.";
    $_SESSION['errorMessage'] = $errorMessage;
    echo $_SESSION['errorMessage'];
    header('location: ../errorMessagePage.php');
    $conn->close();
    exit;
}
$conn->close();