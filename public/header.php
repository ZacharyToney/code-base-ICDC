<?php
if(!isset($_SESSION)) 
{ 
    session_start(); 
} 
?>
<!--BEGIN navbar-->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="../index.php">In Classroom Data Collector</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="../newLayout.php">Create New Layout for 412</a>
      </li>
      <?php
        if (!isset($_SESSION['loggedIn'])) {
      ?>
      <li class="nav-item">
        <a class="nav-link" href="../login.php">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../register.php">Register</a>
      </li>
      <?php
      }
      ?>
    </ul>

    <ul class="navbar-nav ml-auto">
      <?php 
        if (isset($_SESSION['loggedIn'])) {
      ?>
        <li class="nav-item">
          <p>Logged in: <?php echo $_SESSION['username']; ?></p>
        </li>

        <li class="nav-item" style="padding-left: 1em;">
          <form action="../php/logout.php" method="post"><input type="submit" class="btn btn-primary" value="Log Out"></form>
        </li>
      <?php 
      }
      ?>
      <li></li>
    </ul>
  </div>
</nav>
<!--END navbar -->