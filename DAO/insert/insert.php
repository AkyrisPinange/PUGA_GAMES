<?php
include_once('../DAO/conect/bd_conect.php');
class Insert
{
    function InsertUsers($login, $password)
    {

        $sql = "INSERT INTO users (nmUser,password)
    VALUES ('$login', $password);";

        return executQuerys($sql, 'insert');
    }

    function InsertGame($img,$name, $title,$styleGames,$developer,$note,$date)
    {

        $sql = "INSERT INTO games(nm_game,
                                  game_category,
                                  year_publication,
                                  distributor,
                                  data_img ,
                                  nm_img,
                                  note)
                                  values('$title',
                                 '$styleGames',
                                  '$date',
                                  '$developer',
                                  '$img',
                                  '$name',
                                  $note)";

                                  

        return executQuerys($sql, 'insert');
    }
}
