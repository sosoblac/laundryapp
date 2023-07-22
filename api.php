<?php 
$CN = mysqli_connect('localhost','root',' ');
$DB = mysqli_select_db($CN,'registration');

$RollNo = $_POST['RollNo'];
$StudentName = $_POST['StudentName'];
$Course = $_POST['Course'];

$IQ = "INSERT INTO users (RowNumber,StudentName,Course) VALUES ($RollNo,'$StudentName','$Course')";

$R = mysqli_query($CN,$IQ);

if($R){
    echo $message = 'Student has been registered successfully';
}
else{
    $message = 'Server Error.. Please try latter';
}

$Response[] = array("Message"=>$message);
echo json_encode($Response)

?>