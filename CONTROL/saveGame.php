<?php   


include_once('../DAO/insert/insert.php');

//Recebe os dados enviados do frontEnd
$ext =  strtolower(substr($_FILES["file"]['name'],-4));
$name = $_FILES["file"]['name'];
$img = $_FILES["file"]['tmp_name'];
$title = $_POST["title"];
$styleGames = $_POST["styleGames"];
$developer = $_POST["developer"];
$note = $_POST["note"];
$date = $_POST["date"];

$file = '../imgs/';
$i = 1;
print_r($file . $name);
$original_name = $name;
while(file_exists($file . $name))
{    $explodeName = explode(".", $original_name);

    $actual_name = (string)$explodeName[0].$i;
    $name = $actual_name. '.'. $explodeName[1];
    $i++;
}





move_uploaded_file( $img, '../imgs/'.$name);

$resultInsertGames = (new Insert())->InsertGame($img,$name, $title,$styleGames,$developer,$note,$date);
echo json_encode(["status" => 'true','resultInsert' => $resultInsertGames]);