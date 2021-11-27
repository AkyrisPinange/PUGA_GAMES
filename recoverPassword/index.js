$( document ).ready(function() {
    $('#main').css("background", " rgb(45,42,101")
    $('#main').css("background", " linear-gradient(180deg, rgba(45,42,101,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 100%)")
});

$( "#buttonRegistration" ).click(function() {
   let login = $("#login").val();
   let passwordOne = $("#passwordOne").val();
   let passwordTwo = $("#passwordTwo").val();

   //valida se os campos estão preenchidos
   if(passwordOne == "" || passwordTwo == "" || login == "" ){
    alertify.warning('Todos os campos devem ser preenchidos');
    return false
}
    //Valida se as senhas são iguais
    if(passwordOne != passwordTwo){
        $("#passwordTwo").parent().addClass('error')
        $("#passwordOne").parent().addClass('error')
        alertify.error('Senha não compativeis ');
        return false;
    }

    if(login.length < 6){

        alertify.warning('O nome de usuario que tem ter no minimo 6 caracteres ');
        return false;
    }
    if(passwordOne.length < 6){

        alertify.warning('A Senha que tem ter no minimo 6 caracteres ');
        return false;
    }
   

    $.ajax({
        url: "../CONTROL/registration.php",
        dataType: 'json',
        type: 'POST',
        data: {'login': login,
              'password': passwordOne},
              complete: function(data) {
                if(data.responseJSON.resultSelect.length > 0){

                    alertify.warning('Nome do usuario já cadastrado');
                
                }else{

                    alertify.success('Usuario cadastrado com sucesso')
                    setTimeout(function(){  
                        
                        window.location.replace("../index.html");
                        
                    }, 3000);
                }

            }
            })
    
})