<?php

if(isset($_POST['Start_Location']))
{

$con = mysqli_connect('localhost', 'root', '','test');


$Start_Location = $_POST['Start_Location'];
$End_location = $_POST['End_location'];
$Estimated_time = $_POST['Estimated_time'];
$ride_type = $_POST['ride_type'];


// database insert SQL code
$sql = "INSERT INTO `tbl_contact` (`Id`, `Start_Location`, `End_location`,`Estimated_time`,`ride_type`) VALUES ('0', '$Start_Location','$End_location','$Estimated_time','$ride_type')";

// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Contact Records Inserted";
}
}
else
{
	echo "Are you a genuine visitor?";
	
}
?>
