<?php

include_once('../DAO/update/update.php');

$note = $_POST["note"];
$idNote = $_POST['idNote'];

 $result = (new Update())->UpdateNote($note, $idNote);   
    
    echo json_encode(['result'=>$result]);

?>