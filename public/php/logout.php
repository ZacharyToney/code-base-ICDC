<!--
  Logout page takes you back to index.php page/
-->

<?php
session_start();
session_unset();
header('location: ../index.php');
exit;
?>