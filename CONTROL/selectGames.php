<?php

include_once('../DAO/select/select.php');

$search = $_POST["search"];
$order = $_POST['order'];

if($order == 'nota'){ $order = 'note';}
if($order == 'alf'){ $order = 'nm_game';}
if($order == 'date'){ $order = 'year_publication';}

$resultGames = (new Select())->SelectGames($order, $search);


echo json_encode( $resultGames);
?>