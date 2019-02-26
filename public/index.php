<!DOCTYPE html>
<html>
	<head>
		<title>In-Classroom Data Collector</title>
		<!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

		<!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="css/canvas.css">

	</head>

	<body>

<?php include_once('header.php'); ?>

		<div class="container">
			<div class="jumbotron">
			  <h1 class="display-4 text-center">In-Classroom Data Collector</h1>
			  <p class="lead text-center">This tool is used by the instructor or party that is interested in collecting behavioral data on the students in class.</p>
			  <hr class="my-4">
			  <p class="lead text-center">
			  	<?php
			  		if (!isset($_SESSION['loggedIn'])){
			  			?>
			  			<a class="btn btn-primary btn-lg" href="../login.php" role="button">Login</a>
			  			<?php
			  		}else{
			  		?>
			  		<a class="btn btn-primary btn-lg" href="../newLayout.php" role="button">Create new Layout for 412</a>
			  		<?php
			  		}
			  	?>
			    
			  </p>
			</div>
		</div>
	</body>

</html>