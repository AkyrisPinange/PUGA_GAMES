$( document ).ready(function() {
    $('#main').css("background", " rgb(45,42,101)");
    $('#main').css("background", "linear-gradient(180deg, rgba(45,42,101,1) 0%, rgba(71,9,121,1) 33%, rgba(0,212,255,1) 100%)")
});



$('.edit.icon').mouseover(function() {

    $('.edit.icon').css('color', '#eab676')
})
$('.edit.icon').mouseout(function() {

    $('.edit.icon').removeAttr('style');
})