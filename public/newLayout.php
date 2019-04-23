<!DOCTYPE html>
<html>
	<head>
		<title>In-Classroom Data Collector</title>
		<!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

		<!-- Konva is our javascript based canvas manager helps us -->
		<script src="js/konva.js"></script>

		<!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="css/canvas.css">

	</head>

	<body>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
if(!isset($_SESSION)) 
{ 
    session_start(); 
} 

 include_once('header.php'); 

if (!isset($_SESSION['loggedIn'])) {
	    $errorMessage = "You must be logged in to create a new layout.";
	    $_SESSION['errorMessage'] = $errorMessage;
	    header('location: ../errorMessagePage.php');
	    exit;
}
else
{
?>
		<div class="container">
			<br>
			<div class="row">
				<div class="col-lg-4">
					<!--BEGIN This is the canvas-->
					<div id="stage-parent">
	        	<div id="container"></div>
	    		</div>
	    		<!--END This is the canvas-->
				</div>
				
				<br>

				<div class="col-lg-8" id="addObjectArea">
					<button type="button" class="btn btn-primary" onclick="addNodeChair()">Chair</button>
					<button type="button" class="btn btn-primary" onclick="addTableWith4Chairs()">Table</button>
					<!-- <button type="button" class="btn btn-primary" onclick="addPerson()">Person</button> -->
					<div class="btn btn-primary">
  						<a class="dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    					Persons
  						</a>

	  					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
	    					<a class="dropdown-item" onclick="addPerson()">Male</a>
	    					<a class="dropdown-item" onclick="addPersonFemale()">Female</a>
	    					<a class="dropdown-item" onclick="addPerson()">Not Identified</a>
	  					</div>
					</div>

					<button type="button" class="btn btn-primary" onclick="addTextField()">Comment</button>

					<?php
					require('php/connectToDatabase.php');
					$username = $_SESSION['username'];
					$sql = "SELECT * FROM classmaps WHERE username = '".$username."'";
					//got selection
							?>
							<div class="form-group">
					  		<label for="jsonClassRoomStringsFromDatabase">Select layout:</label>
					  		<select class="form-control" id="jsonClassRoomStringsFromDatabase">
							<?php
								
								if (isset($_SESSION['dateSearch'])) {
									//On page 2
									$result = $_SESSION['dateSearch'];
									$_SESSION['dateSearch'] = null;
								}
								else if(isset($_SESSION['classSearch'])){
									$result = $_SESSION['classSearch'];
									$_SESSION['classSearch'] = null;
								}
								else{
									$result = mysqli_fetch_all($conn->query($sql));
								}
								 
								//print_r($result);
								$numResults = count($result) - 1;
								for($x = 0;$x<=$numResults;$x++){
									echo"<option value='". $result[$x][0] ."'>".$result[$x][1]." | ".$result[$x][3]." | ".$result[$x][4]."</option>";
								}
							?>
								</select>
							</div>
							<?php
						
					$conn->close();
					?>
					<div class="form-group">
						<form method="post" action="../php/searchByDate.php">

							<input type="date" class="form-control" name="dateSearch" required>
							<br>
							<input type="hidden" name="username" value="<?php echo $_SESSION['username']; ?>">
							<button type="submit" class="btn btn-primary">Search By Date</button>
							
						</form>
					</div>

					<div class="form-group">
						<form method="post" action="../php/searchByClass.php">

							<input type="text" class="form-control" name="classSearch" placeholder="Search by class" required>
							<br>
							<input type="hidden" name="username" value="<?php echo $_SESSION['username']; ?>">
							<button type="submit" class="btn btn-primary">Search By Class</button>
							
						</form>
					</div>

					<button class="btn btn-primary" onclick="flowThroughOptions()">Flow Through Options(Animation)</button>
				</div>


				<hr class="my-4">
				
				<div class="row">
					<div class="col-lg-12" id="adminControls">
						<hr>
						<form method="post" action="../php/uploadLayoutToDatabase.php">
							<input type="text" class="form-control" name="className" placeholder="Class name and section" required>
							<br>
							<input type="date" class="form-control" name="dateOfSnapShot" id="datePicker" required>
							<br>
							<input type="time" class="form-control" name="timeOfSnapShot" id="theTime" required>
							<br>
							<input type="hidden" name="username" value="<?php echo $_SESSION['username']; ?>">
							<input type="hidden" name="jsonForDatabase" value="" id="jsonForDatabase">
							<button type="submit" class="btn btn-primary">Save Current Layout To Database</button>
						</form>
						<hr>
						<button id="save" type="button" class="btn btn-primary">Download Image of Layout</button>
						<hr>
						<form method="post" action="../php/exportToCSV.php">
							<button type="submit" class="btn btn-primary">Export Database to CSV</button>
						</form>
						<hr>
					</div>	

					      <script>
					          $(document).ready( function() {
						              // var now = new Date();
						              // //now2 prevents the milliseconds from showing up in the input
						              // var now2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()-4, now.getMinutes(), now.getSeconds());
						              // $('#theTime')[0].valueAsDate = now2;

					              var now = new Date();

								  var day = ("0" + now.getDate()).slice(-2);
								  var month = ("0" + (now.getMonth() + 1)).slice(-2);

								  var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

								  $('#datePicker').val(today);
					          });
					      </script>

				</div>

			</div>
		</div>
		<?php
		}
		?>
	</body>
	<!-- Load general Konva Funtionality-->
	<script src="js/generalKonvaFunctions.js"></script>
	<script src="js/layoutFormValues.js"></script>
	<script src="js/flowThroughOptions.js"></script>

</html>