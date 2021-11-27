<?php
include_once('../DAO/conect/bd_conect.php');
class Insert
{
function insertUsers($login,$password){

    $sql="INSERT INTO users (nmUser,password)
    VALUES ('$login', $password);";

    return executQuerys($sql,'insert');

}



}