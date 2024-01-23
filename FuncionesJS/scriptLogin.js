/* script de login mostar oculltar contraseña y cambio de icono*/
function mo(){
    var cambio = document.getElementById("password");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }
}

// Script para cargar nombre debajo del input de ususario en caso que exista
$(document).ready(function () {
    $("#username").on("blur", function () {
      $("#resultadoUsuario")
        .html(
          '<img class="Gifcargando" src="../Librerias/img/loading.gif" width="30px" height="30px"/>'
        )
        .fadeOut(500);
  
      var username = $(this).val();
      var dataString = "username=" + username;
  
      $.ajax({
        type: "POST",
        url: "ajax/validarUsuarioLogin.php",
        data: dataString,
        success: function (data) {
          $("#result-username").fadeIn(1000).html(data);
        },
      });
    });
  });   