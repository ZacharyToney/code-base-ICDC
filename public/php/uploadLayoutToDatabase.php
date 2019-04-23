<?php
if(!isset($_SESSION)) 
{ 
    session_start(); 
} 
require('connectToDatabase.php');



if (isset($_POST['jsonForDatabase']) && isset($_POST['username'])) {
	$json = $_POST['jsonForDatabase'];
	$username = $_POST['username'];
	$className = $_POST['className'];
	$dateOfSnapShot = $_POST['dateOfSnapShot'];
	$timeOfSnapShot = $_POST['timeOfSnapShot'];

	$sql = "INSERT INTO classMaps (jsonClassRoomString, username, dateOfSnapShot, className, timeOfSnapShot)
	VALUES ('".$json."', '".$username."', '".$dateOfSnapShot."', '".$className."', '".$timeOfSnapShot."')";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	    header('location: ../newLayout.php');
	} else {

	    $errorMessage = "We could not upload the new map to the database there has been an error.";
	    $_SESSION['errorMessage'] = $errorMessage;
	    header('location: ../errorMessagePage.php');
	    $conn->close();
	    exit;
	    
	}	
}
else{
	echo "It seems as though the email, username, or password was not entered.";
}


$conn->close();


