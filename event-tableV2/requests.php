
<?php

if(isset($_REQUEST['from_hours'])){
$from_hour_id = $_REQUEST['from_hours'];

$to_hour_id = $_REQUEST['to_hours'];

$program_punkt = $_REQUEST['program_punkt'];
$program_description = $_REQUEST['program_beskrivelse'];
}
echo $to_hour_id;
echo $program_punkt;
echo $program_description;
include('../connect_to_db.php');

if(strlen($from_hour_id)!=0){
    $sql = "INSERT INTO program_data(from_hour, to_hour, program_punkt,program_beskrivelse)
    VALUES ('$from_hour_id','$to_hour_id','$program_punkt','$program_description')";
    $conn->query($sql) === TRUE;
}



 $_REQUEST = array();

?>




