<?php
if(!isset($_SESSION)) 
{ 
    session_start(); 
} 

require('connectToDatabase.php');



if (isset($_POST['classSearch'])) {
	$classSearch = $_POST['classSearch'];
	$username = $_POST['username'];

	// $sql = "SELECT * FROM classMaps WHERE username = '" . $username ."' AND className LIKE = \'%" . $classSearch . "%\'";
	$sql = "SELECT * FROM `classMaps` WHERE username = '" . $username ."' AND `className` LIKE '%{$classSearch}%'";
	$result = mysqli_fetch_all($conn->query($sql));
	if (!empty($result)) {
		$result = mysqli_fetch_all($conn->query($sql));
		//On page 1
		$_SESSION['classSearch'] = $result;
		header('Location: /newLayout.php');
	} else {
		return $conn->mysqli_info;
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