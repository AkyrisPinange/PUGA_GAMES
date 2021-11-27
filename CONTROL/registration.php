
<?php
include_once('../DAO/insert/insert.php');
include_once('../DAO/select/select.php');

$login = $_POST['login'];
$password = $_POST['password'];




$resultSelect = (new Select())->selectUsers($login);



if(count($resultSelect) > 0){

    echo json_encode(["status" => 'true','resultSelect'=> $resultSelect ]);
}

 
if(count($resultSelect) == 0){
    $resultInsertUser = (new Insert())->insertUsers($login,$password);

    echo json_encode(["status" => 'true','resultInsert'=> $resultInsertUser,
                                        'resultSelect'=> $resultSelect]);
}