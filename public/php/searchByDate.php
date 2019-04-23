<?php
if(!isset($_SESSION)) 
{ 
    session_start(); 
} 

require('connectToDatabase.php');



if (isset($_POST['dateSearch'])) {
	$dateSearch = $_POST['dateSearch'];
	$username = $_POST['username'];

	$sql = "SELECT * FROM classMaps WHERE username = '" . $username ."' AND dateOfSnapShot = '" . $dateSearch . "'";
	$result = mysqli_fetch_all($conn->query($sql));
	if (!empty($result)) {
		$result = mysqli_fetch_all($conn->query($sql));
		//On page 1
		$_SESSION['dateSearch'] = $result;
		header('Location: /newLayout.php');
	} else {

	    $errorMessage = "There was no data that matched your search.";
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