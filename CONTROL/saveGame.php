<?php   


include_once('../DAO/insert/insert.php');

$ext =  strtolower(substr($_FILES["file"]['name'],-4));
$nome = $_FILES["file"]['name'];
$img = $_FILES["file"]['tmp_name'];
$title = $_POST["title"];
$styleGames = $_POST["styleGames"];
$developer = $_POST["developer"];
$note = $_POST["note"];
$date = $_POST["date"];

$file = scandir('../imgs/');
print_r($file

// move_uploaded_file( $img, '../imgs/'.$nome);

// $resultInsertGames = (new Insert())->InsertGame($img,$name, $title,$styleGames,$developer,$note,$date);
// echo json_encode(["status" => 'true','resultInsert' => $resultInsertGames]);