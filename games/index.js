$( document ).ready(function() {
    $('.ui.modal').modal('show');
    $('#main').css("background", " rgb(45,42,101)");
    $('#main').css("background", "linear-gradient(180deg, rgba(45,42,101,1) 0%, rgba(71,9,121,1) 33%, rgba(0,212,255,1) 100%)")
});



$('.edit.icon').mouseover(function() {

    $(this).css('color', '#eab676')
})
$('.edit.icon').mouseout(function() {

    $(this).removeAttr('style');
})

$( "#register" ).click(function() {

   
})


$( "#registerGames" ).click(function() {


    data = {
       'title': $("#title").val(),
       'styleGames': $("#styleGames").val(),
       'developer': $("#developer").val(),
       'note': $("#note").val(),
       'year': $("#year").val(),
       'img': $('#ImgGame').val()

   }
    
})


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



    var file = document.querySelector('#fileimagem');
    
    file.addEventListener('change', function () {
        let image = file.files[0];
        
        let src = URL.createObjectURL(image);
        
        resizeImage(src, {width: 200}).then(function (blob) {
            document.querySelector("#ImgGame").src = URL.createObjectURL(blob)
        })
    });

    
  