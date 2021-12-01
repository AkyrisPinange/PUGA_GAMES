<?php

include_once('../DAO/select/select.php');

$search = $_POST["search"];
$order = $_POST['order'];

$idGame = $_POST['idGame'];


if($idGame != ''){

    $resultGamesbyId = (new Select())->SelectGamesbyId( $idGame);
    echo json_encode(['resultGamesById'=> $resultGamesbyId]);
    
}else{

    
    if($order == 'nota'){ $order = 'note';}
    if($order == 'alf'){ $order = 'nm_game';}
    if($order == 'date'){ $order = 'year_publication';}
    
    
    
    $resultGames = (new Select())->SelectGames($order, $search);
    
    
    echo json_encode(['resultGames'=>$resultGames]);
}
?>