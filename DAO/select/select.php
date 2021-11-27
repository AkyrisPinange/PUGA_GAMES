<?php
include_once('../DAO/conect/bd_conect.php');
class select
{
function selectUsers($login){

    $sql="select nmUser from users where nmUser = '$login';";

    return executQuerys($sql,'select');

}

function login($login,$password){

    $sql="select nmUser from users where nmUser = '$login' and password = '$password';";

    return executQuerys($sql,'select');
}



}