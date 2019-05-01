<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbName = "icdc";

/**
 * Creates connection to the database
 */
$conn = new mysqli($servername, $username, $password, $dbName);

/**
 * Checks connection to the database
 */
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>