var data = new FormData()
$(document).ready(function () {
    $('#main').css("background", " rgb(45,42,101)");
    $('#main').css("background", "linear-gradient(180deg, rgba(45,42,101,1) 0%, rgba(71,9,121,1) 33%, rgba(0,212,255,1) 100%)")



    data.append('search', $("#search").val());
    data.append('order', $("#order").val())
    data.append('idGame', '')


    search(data);
});





$("#register").click(function (e) {
    e.preventDefault();
    $('#update').parent().css('display', 'none')
    $('#submit').parent().css('display', '')
    $('#modalTitle').html('Cadastrar')
    $('.ui.modal').modal('show');
})
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
            let htmlGrid = '',  result = '';
           

            result = resultJson.resultGames;
            //valida se é o update
            if (resultJson.resultGames == undefined) {
                result = resultJson.resultGamesById
                Update(this,result);
                // $(".right.floated.edit.icon").click(function (e) {
                

                // })

            }

            $(result).each(function (index) {

                htmlGrid += ` <div class='four wide column"' style='padding: 5px;'>
                <div class="ui card">
                <img src="../imgs/${result[index].nm_img}">
                <div class="content">
                    <i class=" right floated edit icon" value=${result[index].idgames}></i>
                    <div class="header">${result[index].nm_game}</div>
                    <div class="description">
                    
                    <p><B>Estilo do jogo: </B>${result[index].game_category}</p>
                    <p><B>Desenvovedora: </B>${result[index].distributor}</p>
                    <p><B>Nota: </B>${result[index].note}</p>
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
            $('.edit.icon').mouseover(function () {

                $(this).css('color', '#eab676')
            })
            $('.edit.icon').mouseout(function () {

                $(this).removeAttr('style');
            })
            //reajusta altura da tela
            $('#main').css('height', '100%')
            //chama funçao de update
            $(".right.floated.edit.icon").click(function (e) {
                Update(this, '');

            })

        }


    });


}

function Update(element, result) {
    // pega id para editar
    data.append('idGame', $(element).attr('value'))
    search(data);

    if(result == ''){ return false}

    $('#title').val(result[0].nm_game)
    $('#styleGames').val(result[0].game_category)
    $('#developer').val(result[0].distributor)
    $('#note').val(result[0].note)
    $('#date').val(result[0].year_publication)
    $('#modalTitle').html('Editar')
    $('#previwer').attr('src','../imgs/' + result[0].nm_img)
    $('#update').parent().css('display', '')
    $('#submit').parent().css('display', 'none')
    $('.ui.modal').modal('show');


    //limpa id apos editado
    data.append('idGame', '')
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
            $('#title').val('')
            $('#styleGames').val('')
            $('#developer').val('')
            $('#note').val('')
            $('#date').val('')

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

file.addEventListener('change', function () {
    let image = file.files[0];

    let src = URL.createObjectURL(image);

    resizeImage(src, {
        width: 200
    }).then(function (blob) {
        document.querySelector("#previwer").src = URL.createObjectURL(blob)
    })
});