<?php   


include_once('../DAO/insert/insert.php');
$img = $_FILES["file"]['tmp_name'];
$name = $_FILES["file"]['name'];
$title = $_POST["title"];
$styleGames = $_POST["styleGames"];
$developer = $_POST["developer"];
$note = $_POST["note"];
$date = $_POST["date"];

$resultInsertGames = (new Insert())->insertGame($img,$name, $title,$styleGames,$developer,$note,$date);
echo json_encode(["status" => 'true','resultInsert' => $resultInsertGames]);