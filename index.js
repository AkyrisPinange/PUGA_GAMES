
$( document ).ready(function() {
    $('#main').css("background", " rgb(45,42,101")
    $('#main').css("background", " linear-gradient(180deg, rgba(45,42,101,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 100%)")
});


$( "#buttonLogin" ).click(function() {
    $("#login").val()
    $("#password").val()
    $.ajax({
        url: "DAO/bd_conect.php",
        type: 'POST',
        // data: {},
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
           
                errorAlert("Ocorreu um erro ao carregar os dados!", "Error!");
            
        }
    });

})