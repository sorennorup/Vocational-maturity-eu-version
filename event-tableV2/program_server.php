
	
	<?php
	include('../connect_to_db.php');
	$data = $_REQUEST;
	
	
	if(isset($_REQUEST['from_hours'])){
		$from_hour_id = $_REQUEST['from_hours'];

		$program_description = $_REQUEST['program_beskrivelse'];
		
		$stmt = $conn->prepare("INSERT INTO program_data(from_hour,program_beskrivelse)
		VALUES (?,?)");
		$stmt->bind_param('ss',$from_hour_id,$program_description);
		$stmt->execute();
		
		$stmt->close();	
		
		}

		$select = "SELECT from_hour,program_beskrivelse,punkt_id FROM program_data WHERE punkt_id > ?";
		$stmt = $conn->prepare($select);
		
		mysqli_stmt_bind_param($stmt, "s", $data['last_displayed_punkt_id']);
		mysqli_stmt_execute($stmt);
		$result = mysqli_stmt_get_result($stmt);
		$rows = array();

	while($r = mysqli_fetch_assoc($result)) {
		$rows[] = $r;
}
		$conn->close();
     //outputs the json object to the ajax succes function
	echo json_encode($rows);
        
        ?>  

           
 