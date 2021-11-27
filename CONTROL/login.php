
<?php

include_once('../DAO/select/select.php');

$login = $_POST['login'];
$password = $_POST['password'];



$resultLogin = (new Select())->login($login, $password);

echo json_encode(["status" => 'true','resultSelect'=> $resultLogin]);