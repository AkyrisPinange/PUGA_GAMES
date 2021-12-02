var data = new FormData()
var idGame;
$(document).ready(function () {
    $('#main').css("background", " rgb(45,42,101)");
    $('#main').css("background", "linear-gradient(180deg, rgba(45,42,101,1) 0%, rgba(71,9,121,1) 33%, rgba(0,212,255,1) 100%)")



    data.append('search', $("#search").val());
    data.append('order', $("#order").val())


    search(data);
});



$("#register").click(function (e) {
    e.preventDefault();
  
    $('#modalDiv').modal('show');
});


$("#order").on('change', function () {
    data.append('search', $("#search").val());
    data.append('order', $("#order").val())

    search(data);

})

$("#search").keyup(function () {

    data.append('search', $("#search").val());
    data.append('order', $("#order").val())


    search(data);

});

function search(data) {

    $.ajax({
        url: "../CONTROL/selectGames.php",
        type: "POST",
        data: data,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            let resultData = data.replace(/\r?\n|\r/g, "");
            let resultJson = JSON.parse(resultData)
            let htmlGrid = '',
                result = '';


            result = resultJson.resultGames;
            //valida se é o update
            if (result == undefined) {
                result = resultJson.resultGamesById

            }

            //varre a quantidade de games pesquisados e exibe na tela
            $(result).each(function (index) {

                htmlGrid += ` <div class='four wide column"' style='padding: 5px;'>
                <div class="ui card">
                <img src="../imgs/${result[index].nm_img}">
                <div class="content">
                <i class=" right floated trash icon" value=${result[index].idgames}></i>
                <div class="header">${result[index].nm_game}</div>
                <div class="description"> 
                <p><B>Estilo do jogo: </B>${result[index].game_category}</p>
                    <p><B>Desenvovedora: </B>${result[index].distributor}</p>
                    <p><B>Nota: </B><div class="ui star rating" data-rating="${result[index].note}"></div></p>
                    <p><B>Ano de Publicação: </B>${result[index].year_publication}</p>
                    </div>
                    </div>
                    <div class="extra content">  
                    </div>
                    </div>
                    </div>`
            });


           

            //contena elemento gerados no foreach e exibe na tela   
            $('#gridGames').html(htmlGrid);

            //aciona brilho amarelo no botão de editar
            $('.trash.icon').mouseover(function () {

                $(this).css('color', 'red')
            })
            $('.trash.icon').mouseout(function () {

                $(this).removeAttr('style');
            })
            //reajusta altura da tela
            $('#main').css('height', '100%')

            
            $(".trash.icon").click(function () {
                $('#modalDel').modal('show');
                idGame =  $(this).attr('value');

            })
            $(".ui.green.ok.inverted.button").click(function () {
                
                Delete(idGame)
            })
            $(".ui.star.rating").click(function () {
                let note = $(this).rating('get rating');
                let idNote = $(this).parent().parent().children('i').attr('value')
                noteGames(idNote,note)

            })

             //ativa nota
             $('.ui.rating').rating({
                initialRating: 2,
                maxRating: 10
              });

        }


    });


}

function noteGames(idNote,note){
    data = new FormData()
    data.append('idNote', idNote)
    data.append('note', note)

    $.ajax({
        url: "../CONTROL/updateNote.php",
        type: "POST",
        data: data,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            location.reload();

        }
    })

}

function Delete(idGame){

    data = new FormData()
    data.append('idGame', idGame)

    $.ajax({
        url: "../CONTROL/deleteGame.php",
        type: "POST",
        data:data,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            location.reload();
        }
    })

}


$("#uploadimage").on('submit', (function (e) {
    e.preventDefault();


    //validas campos vazios 
    if ($('#title').val() == '' ||
        $('#styleGames').val() == '' ||
        $('#developer').val() == '' ||
        $('#note').val() == '' ||
        $('#date').val() == '' ||
        $('#previwer').attr('src') == undefined) {

        alertify.warning('Todos os campos devem ser preenchidos');
        
        return false;
    }

    //agrupa os dados para o envio    
    data = new FormData(this)
    data.append('title', $('#title').val())
    data.append('styleGames', $('#styleGames').val())
    data.append('developer', $('#developer').val())
    data.append('note', $('#note').val())
    data.append('date', $('#date').val())



    $.ajax({
        url: "../CONTROL/saveGame.php",
        type: "POST",
        data: data,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {

            alertify.success('Jogo cadastrado com sucesso')
            $('.ui.modal').modal('hide');
            $('#title').val('')
            $('#styleGames').val('')
            $('#developer').val('')
            $('#note').val('')
            $('#date').val('')
            location.reload();

        }
    });



}));



function loadImage(img, src) {
    return new Promise((resolve, reject) => {
        img.src = src;
        img.completed ? resolve(img) : img.addEventListener('load', function () {
            resolve(img)
        });
        img.addEventListener('error', reject);
    })
}

function resizeImage(src, options) {

    return loadImage(document.createElement('img'), src).then(function (image) {

        let canvas = document.createElement('canvas');

        if (options.width && !options.height) {
            options.height = image.height * (options.width / image.width)
        } else if (!options.width && options.height) {
            options.width = image.width * (options.height / image.height)
        }

        Object.assign(canvas, options);

        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);

        return new Promise(function (resolve) {
            canvas.toBlob(resolve, options.type || 'image/png', options.quality)
        })
    })
}


var file = document.querySelector('#file');
var fileUpdate = document.querySelector('#fileUpdate');


file.addEventListener('change', function () {
    let image = file.files[0];

    let src = URL.createObjectURL(image);

    resizeImage(src, {
        width: 200
    }).then(function (blob) {
        document.querySelector("#previwer").src = URL.createObjectURL(blob)
    })
});