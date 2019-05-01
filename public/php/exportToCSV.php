<!--
  CSV export is here for developers to use if needed. Button can be taken out from newLayout.php if not needed.
-->

<?php
/* vars for export */
$link = mysqli_connect("localhost", "root", "", "icdc");
// database record to be exported
$db_record = 'classmaps';
// optional where query
$where = '';
// filename for export
$csv_filename = 'db_export_'.date('Y-m-d').'.csv';
// database variables
$hostname = "localhost";
$user = "root";
$password = "";
$database = "icdc";
// Database connecten voor alle services
mysqli_connect($hostname, $user, $password)
or die('Could not connect: ' . mysqli_error());
					
mysqli_select_db($link,$database)
or die ('Could not select database ' . mysqli_error());
// create var to be filled with export data
$csv_export = '';
// query to get data from database
$query = mysqli_query($link,"SELECT * FROM ".$db_record." ".$where);
$field = mysqli_num_fields($query);
// create line with field names
for($i = 0; $i < $field; $i++) {
  $csv_export.= mysqli_field_name($query,$i).',';
}
// newline (seems to work both on Linux & Windows servers)
$csv_export.= '
';
while($row = mysqli_fetch_array($query)) {
  // create line with field values
  for($i = 0; $i < $field; $i++) {
    $csv_export.= '"'.$row[mysqli_field_name($query,$i)].'",';
  }	
  $csv_export.= '
';	
}
// Export the data and prompt a csv file for download
header("Content-type: text/x-csv");
header("Content-Disposition: attachment; filename=".$csv_filename."");
echo($csv_export);

function mysqli_field_name($result, $field_offset)
{
    $properties = mysqli_fetch_field_direct($result, $field_offset);
    return is_object($properties) ? $properties->name : null;
}
?>