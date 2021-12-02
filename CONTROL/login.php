
<?php

include_once('../DAO/select/select.php');

session_start();


    
    $resultLogin = (new Select())->login($_POST['login'], $_POST['password']);

    if(count($resultLogin) >0 ){
        
        $_SESSION['login'] = $_POST['login'];
    }
 




echo json_encode(["status" => 'true','resultSelect'=> $resultLogin]);