<?php

include_once('../DAO/select/select.php');

$search = $_POST["search"];
$order = $_POST['order'];




    
    if($order == 'nota'){ $order = 'note desc';}
    if($order == 'alf'){ $order = 'nm_game asc';}
    if($order == 'date'){ $order = 'year_publication asc';}
    
    
    
    $resultGames = (new Select())->SelectGames($order, $search);
    
    
    echo json_encode(['resultGames'=>$resultGames]);

?>