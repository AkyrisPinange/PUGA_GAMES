<?php
include_once('../DAO/conect/bd_conect.php');
class select
{
function SelectUsers($login){

    $sql="select nmUser from users where nmUser = '$login';";

    return executQuerys($sql,'select');

}

function login($login,$password){

    $sql="select nmUser from users where nmUser = '$login' and password = '$password';";

    return executQuerys($sql,'select');
}

function SelectGamesbyId( $idGame){

    print_r($idGame);
        $sql="select * from games where idgames = $idGame";


    return executQuerys($sql,'select');
}


function SelectGames( $order, $search){

    if($search == ''){
        $sql="select * from games order by $order desc;";
    }else{    
        $sql="select * from games where nm_game LIKE  '%$search%' order by $order desc;";
    }

    return executQuerys($sql,'select');
}



}