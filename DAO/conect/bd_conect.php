<?php

function executQuerys($sql,$param){
    
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



//executa querys inserts
if($param == 'insert'){  
  if ($conn->query($sql) === TRUE) {
    
    return 'true';
  } else {
    return 'false';
  }  
}


//executa querys select


if($param == 'select'){ 
  $result = $conn->query($sql) OR trigger_error($conn->error."[$sql]");
  
       $array = array();
    
        while($data = mysqli_fetch_array($result)){
         
       $array[] = $data;
      }
      

   return $array;
  
}
if($param == 'delete'){ 
    if ($conn->query($sql) === TRUE) {
      echo "Record delete successfully";
    } else {
     echo "Error delete record: " . $conn->error;
  }
}
if($param == 'update'){ 
    if ($conn->query($sql) === TRUE) {
      echo "Record update successfully";
    } else {
     echo "Error update record: " . $conn->error;
  }
}
mysqli_close($conn);


}
