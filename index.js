
$( document ).ready(function() {
    $('#main').css("background", " rgb(45,42,101")
    $('#main').css("background", " linear-gradient(180deg, rgba(45,42,101,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 100%)")
});


$( "#buttonLogin" ).click(function() {
    let login =  $("#login").val()
    let password =  $("#password").val()
    if (login == '' ||
    password == ''){
        alertify.warning('Favor informar Usuario e Senha');
        return false;
    }
   

    $.ajax({
        url: "CONTROL/login.php",
        type: 'POST',
         data: {'login': login,
                'password': password},
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
            if(data.resultSelect.length > 0){

                window.location.href = 'games/index.php';
            }else if(data.resultSelect.length == 0){
                alertify.error('Usuario ou senha incorretos ');
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
           
            
            
        }
    });

})