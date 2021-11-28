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
    </style>
</head>

<body>
    <div class="ui modal">
        <i class="close icon"></i>
        <div class="header">
            Cadastro
        </div>
        <!-- <form id='saveImg' class="ui form" method="post" enctype="multipart/form-data"> -->
            <div class="main">
                <h1>Ajax Image Upload</h1><br />
                <hr>
                <form id="uploadimage" action="" method="post" enctype="multipart/form-data">
                    <div id="image_preview"><img id="previewing" src="noimage.png" /></div>
                    <hr id="line">
                    <div id="selectImage">
                        <label>Select Your Image</label><br />
                        <input type="file" name="file" id="file" required />
                        <input type="submit" value="Upload" class="submit" />
                    </div>
                </form>
            </div>
            <!-- <div class="ui grid"> -->
            <!-- <div class='six wide column'>
                    <div class="image content" style="margin-top: 100px; padding:5px;">
                        <div class="ui medium image">
                            <img id='ImgGame'> -->
            <!-- <input type="file" name="fileimagem" id="fileimagem" style='padding: 5px;' /> -->
            <!-- <input type="submit" value="Upload" class="submit" /> -->
            <!-- </div>
                    </div>
                </div> -->
            <!-- <div class='four wide column'  style=" margin-top: 20px;padding-bottom: 20px;">
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
                                     
                </div>
                <div class='four wide column' style=" margin-top: 20px;">
                   
                    <div class="field">
                        <label>Nota</label>
                        <input id='note' type="number" name="last-name" placeholder="Nota">
                    </div>
                    <div class="field">
                        <label>Ano de publicação</label>
                        <input id='year' type="date" name="last-name" placeholder="Ano de publicação">
                    </div> 
                    
                </div> -->
            <!-- </div> -->
        <!-- </form> -->
        <div class="actions">
            <div id="registerGames" class="ui positive right labeled icon button">
                Cadastrar
                <i class="checkmark icon"></i>
            </div>
        </div>
    </div>
    <div id='main'>
        <div class="container">
            <form class="ui form">
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

        </div>
        </form>
    </div>
    <script src="../util/jquery/Jquery_3.6.js"></script>
    <script src="../util/Semantic-UI-2.4/semantic.min.js"></script>
    <script src="../util/alertfy/alertify.min.js"></script>
    <script src="index.js"></script>
</body>

</html>