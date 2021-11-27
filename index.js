
$( document ).ready(function() {
    $('#main').css("background", " rgb(45,42,101")
    $('#main').css("background", " linear-gradient(180deg, rgba(45,42,101,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 100%)")
});


$( "#buttonLogin" ).click(function() {
    let login =  $("#login").val()
    let password =  $("#password").val()
    $.ajax({
        url: "CONTROL/login.php",
        type: 'POST',
         data: {'login': login,
                'password': password},
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
            console.log(data)
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
           
            
            
        }
    });

})