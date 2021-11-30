$(document).ready(function () {

    $('#main').css("background", " rgb(45,42,101)");
    $('#main').css("background", "linear-gradient(180deg, rgba(45,42,101,1) 0%, rgba(71,9,121,1) 33%, rgba(0,212,255,1) 100%)")
});



$('.edit.icon').mouseover(function () {

    $(this).css('color', '#eab676')
})
$('.edit.icon').mouseout(function () {

    $(this).removeAttr('style');
})

$("#register").click(function (e) {
    e.preventDefault();
    $('.ui.modal').modal('show');
})


$("#uploadimage").on('submit', (function (e) {
    e.preventDefault();
    data = new FormData(this)
    data.append('title', $('#title').val())
    data.append('styleGames', $('#styleGames').val())
    data.append('developer', $('#developer').val())
    data.append('note', $('#note').val())
    data.append('date', $('#date').val())
 
    $.ajax({
        url: "../CONTROL/saveGame.php", 
        type: "POST", 
        data: data , 
        contentType: false, 
        cache: false, 
        processData: false,
        success: function (data) 
        {
            
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