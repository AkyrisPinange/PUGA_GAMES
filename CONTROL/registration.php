
<?php
include_once('../DAO/insert/insert.php');

$login = $_POST['login'];
$password = $_POST['password'];


$resultInsert = (new Insert())->insertUsers($login,$password);


echo json_encode(["status" => 'true','resultInsert'=> $resultInsert ]);