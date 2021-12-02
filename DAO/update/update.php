<?php
include_once('../DAO/conect/bd_conect.php');
class Update
{
function UpdateNote($note,$idNote){

    $sql="UPDATE games
    SET note = $note
    WHERE idgames = $idNote;";

    return executQuerys($sql,'update');

}
}