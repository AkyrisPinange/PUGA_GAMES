<?php

function executQuerys($sql){

    
$servername = "127.0.0.1";
$database = "PUGA";
$username = "root";
$password = "12345";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// echo "Connected successfully";






if ($conn->query($sql) === TRUE) {

    return 'true';
  } else {
    
    return 'false';
  }  
    

mysqli_close($conn);


}


?>


