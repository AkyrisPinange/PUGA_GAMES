<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../util/Semantic-UI-2.4/semantic.min.css">
    <link rel="stylesheet" href="../util/alertfy/css/alertify.min.css">


    <title>Document</title>


    <style>
        body>.grid {
            height: 100%;
            background-color: lightblue;
        }

        .image {
            margin-top: -100px;
        }

        .column {
            max-width: 450px;
        }

        #main {
            height: 100%;
            width: 100%;

        }

        #label {
            color: white;
        }

        .inputfile {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
        }

        .border {
            border-style: solid;

            border-width: 5px;
        }
    </style>
</head>

<body>
    <div id='main'>
        <form class="ui form">
            <div class="container">
                <div class="three fields" style="padding: 20px;">
                    <div class="field">
                        <label id="label">Pequisar</label>
                        <div class="ui left icon input">
                            <i class="search icon"></i>
                            <input id="search" placeholder="Pequisar">
                        </div>
                    </div>
                    <div class="field" style="width: 20%;">
                        <label id="label">Estilo do jogo</label>
                        <select>
                            <option value="">Gender</option>
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                        </select>
                    </div>
                    <div class="field" style="margin: 24px;">
                        <button id="register" class="ui green button"><i class="external square alternate icon"></i>
                            Cadastrar </button>
                    </div>
                </div>
        </form>
    </div>



    <div class="ui modal">
        <i class="close icon"></i>
        <div class="header">
            Cadastro
        </div>

        <form class="ui form" style="padding: 10px;">
            <div class="fields">
                <div class="field">
                    <label>Título</label>
                    <input id='title' type="text" placeholder="Título">
                </div>
                <div class="field">
                    <label>Estilo do jogo</label>
                    <input id='styleGames' type="text" name="last-name" placeholder="Estilo do jogo">
                </div>
                <div class="field">
                    <label>Desenvovedora/Distribuidora</label>
                    <input id='developer' type="text" name="last-name" placeholder="Desenvovedora/Distribuidora">
                </div>
                <div class="field">
                    <label>Nota</label>
                    <input id='note' type="number" name="last-name" min="0" max="10" placeholder="Nota">
                </div>
                <div class="field">
                    <label>Ano de publicação</label>
                    <input id='date' type="date" name="last-name" placeholder="Ano de publicação">
                </div>
            </div>
        </form>
        <div class="main">
            <form id="uploadimage" style='padding: 10px;' action="" method="post" enctype="multipart/form-data">
                <div class="field">
                    <h3 style='margin-left: 30px;'>Prévia da Imagem</h3>
                </div>
                <img style='width: 210px; height: 130px;' class='border' id="previwer">
                <div class='two fields' id="selectImage">
                    <div class="field">
                        <label for="file" style='width: 210px;' class="ui positive right labeled icon button">
                            <i class="file icon"></i>
                            Escolha o arquivo</label>
                        <input style="display:none" type="file" name="file" id="file" />
                        <div style='margin-top: -36px; margin-left: 237px'>
                            <label for="submit" class="ui right primary icon button">
                                <i class="save icon"></i>
                                Cadastrar</label>
                            <input style="display:none" type="submit" id='submit' name='submit' value="Cadastrar" class="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>

    </div>

    </div>
    <script src="../util/jquery/Jquery_3.6.js"></script>
    <script src="../util/Semantic-UI-2.4/semantic.min.js"></script>
    <script src="../util/alertfy/alertify.min.js"></script>
    <script src="index.js"></script>
</body>

</html>