// listar barrios
// function listarBarrios(){
    // $.ajax({
    //     method:"POST",
    //     url:"Ajax/Cooperativa/listadoBarrios.php",
    //     data:{},
    //     success:function(r){

    //         var select = document.getElementsByName('barrio')[0];

    //         console.log(r);
    //     }
    //  });
// }
function buscarPersonas(dni){
// en esta funcion recibimos el valor del input DNI, en donde ejecutaremos la funcion recien despues del caracter 7 que es un cantidad valida para la identificacion de una persona
    if(dni.value.length == 8){
        $.ajax({
                method:"POST",
                url:"Ajax/Cooperativa/bucarPersona.php",
                data:{dni : dni.value},
                success:function(r){
                    // Toma una cadena JSON como argumento y la convierte en un objeto JavaScript
                    var data1 = JSON.parse(r);

                    if(data1 == false || data1 == ''){
                        document.getElementById('apellidoNombre').value = null;
                        document.getElementById('fechaNacimiento').value = null;
                    }else{
                        document.getElementById('apellidoNombre').value = data1.Contribuyente;
                        var fecha = new Date(data1.FechaNacimiento);
                        var opcionesDeFormato = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'America/Argentina/Buenos_Aires' };
                        var fechaFormateada = fecha.toLocaleString('es-AR', opcionesDeFormato);
                        document.getElementById('fechaNacimiento').value = fechaFormateada;
                        
                    }
                }
        });
    }
}
// var form = $('#FormContribu').serialize();
// console.log(form);
// $('#single-select-field').select2( {
//     theme: "bootstrap-5",
//     dropdownParent: $('#staticBackdrop'),
//     width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
//     placeholder: $( this ).data( 'placeholder' ),
// } );

// $(document).ready(function(){
//     // buscamos los barrios 
//     $("#buscarBarrio").select2({  
//         theme: "bootstrap-5",
//         selectionCssClass: "select2--medium",
//         dropdownCssClass: "select2--medium",      
//         ajax: {
//           url: "Ajax/Cooperativa/listadoBarrios.php",
//           type: "post",
//           dataType: 'json',
//           delay: 10,
//           data: function (params) {
//             return {
//               searchTerm: params.term // search term
//             };
//           },
//           processResults: function (response) {
//             return {
//               results: response
//             };
//           },
//         }
//       });
/* Multiple Item Picker */

//     //   // bucamos las calles
//     //   $("#buscarCalle").select2({ 
//     //     theme: "bootstrap-5",
//     //     selectionCssClass: "select2--medium",
//     //     dropdownCssClass: "select2--medium",       
//     //     ajax: {
//     //       url: "Ajax/calle.php",
//     //       type: "post",
//     //       dataType: 'json',
//     //       delay: 250,
//     //       data: function (params2) {
//     //         return {
//     //           searchTerm2: params2.term // search term
//     //         };
//     //       },
//     //       processResults: function (response2) {
//     //         return {
//     //           results: response2
//     //         };
//     //       },
//     //     }
//     //   });
    // });

  