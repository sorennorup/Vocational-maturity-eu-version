<?php
include('../connect_to_db.php');
  // Delete all the eventrows
if($_REQUEST['delete_all'] == true){
 $sql = "TRUNCATE program_data";
 $conn -> query($sql) === TRUE;
	$conn->close();
 header("location: programCreater.php");
}
// Delete an event row
else if($_REQUEST['edit_mode']== true){
	 
 $item_id = $_REQUEST['id'];
	// Use prepared statement for security
	$delete = $conn->prepare("DELETE from program_data WHERE punkt_id = ?");
	mysqli_stmt_bind_param($delete, "i",$item_id);
	mysqli_stmt_execute($delete);
	$delete->close();
	$conn->close();
 header("location: programCreater.php?edit_mode=true&&just_saved=true"); 
}
// Update the eventinfo
else if($_REQUEST['edit_string']==true){
 $item_id = $_REQUEST['id'];
 $from_hour_id = $_REQUEST['from_hours'];

	$program_description = $_REQUEST['opdateret_pr_beskrivelse'];

	$update = $conn->prepare("UPDATE program_data 
 SET from_hour = ?,program_beskrivelse = ?
 WHERE punkt_id = ?");
	$update->bind_param("ssi", $from_hour_id,$program_description,$item_id);
	$update->execute();
	$update->close();
	$conn->close();
	
 header("location: programCreater.php?edit_mode=true&&just_saved=true"); 
 
}
 
	
?>