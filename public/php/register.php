<?php

if(!isset($_SESSION)) 
{ 
    session_start(); 
} 
require('connectToDatabase.php');



if (isset($_POST['email']) && isset($_POST['username']) && isset($_POST['password']) ) {
	$email = $_POST['email'];
	$username = $_POST['username'];
	$password = $_POST['password'];

	$password = password_hash($password, PASSWORD_DEFAULT);

	$sql = "INSERT INTO users (username, email, password)
	VALUES ('".$username."', '".$email."', '".$password."')";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    $errorMessage = "We could not create an account for you. This could be due to the fact that another user has the same username or the email address is already registered.";
	    $_SESSION['errorMessage'] = $errorMessage;
	    header("../errorMessagePage.php");
	    $conn->close();
	    exit;
	    
	}	
}
else{
	echo "It seems as though the email, username, or password was not entered.";
}


$conn->close();
?>