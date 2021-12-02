<?php
include_once('../DAO/conect/bd_conect.php');
class Delete
{
function DeleteGames($idGame){

    $sql="DELETE FROM games
    WHERE idgames = $idGame;";

    return executQuerys($sql,'delete');

}
}