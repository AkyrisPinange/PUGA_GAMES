<?php
include_once('../DAO/delete/delete.php');

$idGame = $_POST['idGame'];

var_dump(
    $idGame
);

$resultDelete = (new Delete())->DeleteGames($idGame);

echo json_encode(["status" => 'true','resultDelete'=> $resultDelete]);