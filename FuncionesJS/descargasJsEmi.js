function mostrarSeleccion() {
    var opciones = document.getElementsByName('metodoFiltro');
    var ocultaBuscadorDominio = document.getElementById("ocultaBuscadorDominio");
    var ocultaSelectDominio = document.getElementById("ocultaSelectDominio");

    var choferesCamionSelect = document.getElementById("choferesCamion");
    var coopSelect = document.getElementById("coopSelect");
    var GruposSelect = document.getElementById("GruposSelect");
    var id_zonaSelect = document.getElementById("id_zona");
    opciones.forEach(function (opcion) {
        if (opcion.checked) {
            // console.log('La opción seleccionada es: ' + opcion.value);
            if (opcion.value === '1') {

                choferesCamionSelect.value = "";
                coopSelect.value = "";
                GruposSelect.value = "";
                id_zonaSelect.value = "";

                ocultaBuscadorDominio.style.display = "none";
                ocultaSelectDominio.style.display = "block";
                document.getElementById("valida-vencimiento-seg").style.display = "none";
                document.getElementById("buscar_dom_descarga").value = ""
            } else {


                // Establecer el valor de los elementos select como vacío
                choferesCamionSelect.value = "";
                coopSelect.value = "";
                GruposSelect.value = "";
                id_zonaSelect.value = "";


                ocultaBuscadorDominio.style.display = "block";
                ocultaSelectDominio.style.display = "none";
                document.getElementById("valida-vencimiento-seg").style.display = "none";
                document.getElementById("camionesSelect").value = ""


            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Tu código aquí
    var domDescarga = document.getElementById('buscar_dom_descarga');

    if (domDescarga) {
        domDescarga.addEventListener('keyup', function () {
            var valor = this.value;
            this.value = valor.toUpperCase();
            convertirAMayusculas('buscar_dom_descarga')
        });
    }
});


function BusquedaDominioDescarga() {
    var dominio = document.getElementById("buscar_dom_descarga").value;

    $.ajax({
        method: "POST",
        url: "Ajax/descargas/filtro_dominio_descarga.php",
        data: { dominio: dominio },
        success: function (r) {
            // Convertimos la respuesta JSON en un objeto JavaScript
            // console.log(r);

            var camion = JSON.parse(r);
            // camionGlobal = camion;
            // console.log(camion)
            // CargaCamionFiltro
            document.getElementById("CargaCamionFiltro").value = camion;
            if (camion === "seguro_vencido") {
                document.getElementById("alertSeguroVencido").style.display = "block";

            } else {
                document.getElementById("alertSeguroVencido").style.display = "none";

                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        // Manejar la respuesta y actualizar el segundo select
                        var datos = JSON.parse(xhr.responseText);
                        RecargarChoferes(datos);
                        // console.log(datos)
                    }
                };


                xhr.open('GET', 'Ajax/descargas/choferes_x_camion.php?idCamion=' + camion, true);
                xhr.send();
            }


        },
        error: function (error) {
            // Manejamos los errores de la petición AJAX
            console.error("Error en la petición AJAX: " + error);
        },
    });
}



document.addEventListener('DOMContentLoaded', function () {
    var btnBusquedaDominioDescarga = document.getElementById("btnBuscarDomDescarga");
    if (btnBusquedaDominioDescarga) {
        btnBusquedaDominioDescarga.addEventListener("click", function () {
            BusquedaDominioDescarga();

        });
    }
});


function SelectorCamiones() {
    // Obtener el valor seleccionado del primer select
    var valorSeleccionado = document.getElementById('camionesSelect').value;


    // alert(valorSeleccionado)
    // Realizar una llamada AJAX para obtener los datos del segundo select basado en el valor seleccionado del primero
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Manejar la respuesta y actualizar el segundo select
            var datos = JSON.parse(xhr.responseText);
            RecargarChoferes(datos);
            // console.log(datos)
        }
    };


    xhr.open('GET', 'Ajax/descargas/choferes_x_camion.php?idCamion=' + valorSeleccionado, true);
    xhr.send();
}

// Esta función actualiza el segundo select con los datos obtenidos de la llamada AJAX
function RecargarChoferes(datos) {

    // console.log(datos)
    // alert("askdakdkañlkdñlsak")
    var segundoSelect = document.getElementById('choferesCamion');
    segundoSelect.focus();
    // Limpiar las opciones actuales del segundo select
    segundoSelect.innerHTML = '';
    // Agregar nuevas opciones basadas en los datos recibidos
    for (var i = 0; i < datos.length; i++) {
        var opcion = document.createElement('option');
        opcion.value = datos[i].id;
        opcion.textContent = datos[i].nombre_completo;

        if (datos[i].id === "disabled") {
            opcion.selected = true; // Agregar la propiedad disabled
            opcion.value = "";
            // opcion.textContent = "Seleccionar Chofer";
        }

        if (datos[i].deshabilitado) {
            opcion.disabled = true; // Agregar la propiedad disabled
        }

        segundoSelect.appendChild(opcion);
    }
}

var camionesSelect = document.getElementById("camionesSelect");

if (camionesSelect) {
    // Asociar la función SelectorCamiones al evento onchange del primer select
    // document.getElementById('camionesSelect').onchange = SelectorCamiones;
    document.addEventListener('DOMContentLoaded', function () {
        // Asignar el evento onchange al elemento con el ID "camionesSelect"
        document.getElementById('camionesSelect').onchange = SelectorCamiones;
    });

}



// Esta función se ejecutará cuando se seleccione una opción en el primer select
function SelectorCooperativas() {

    // Obtener el valor seleccionado del primer select
    var valorSeleccionado = document.getElementById('coopSelect').value;

    $.ajax({
        method: "POST",
        url: "Ajax/descargas/validaCooperativaDescargas.php",
        data: { idCooperativa: valorSeleccionado },
        success: function (r) {
            // Convertimos la respuesta JSON en un objeto JavaScript
            // console.log(r);

            var cooperativa = JSON.parse(r);

            // console.log(cooperativa)

            if (cooperativa === "seguro_coop_vencido") {

                document.getElementById("valida-vencimiento-seg").style.display = "block";

            } else {
                document.getElementById("valida-vencimiento-seg").style.display = "none";
            }
        },
        error: function (error) {
            // Manejamos los errores de la petición AJAX
            console.error("Error en la petición AJAX: " + error);
        },
    });
    // alert(valorSeleccionado)
    // Realizar una llamada AJAX para obtener los datos del segundo select  basado en el valor seleccionado del primero
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Manejar la respuesta y actualizar el segundo select
            var datos = JSON.parse(xhr.responseText);
            RecargarGrupos(datos);
            // console.log(datos)
        }
    };

    xhr.open('GET', 'Ajax/descargas/grupos_x_coperativa.php?idCooperativa=' + valorSeleccionado, true);
    xhr.send();
}

// Esta función actualiza el segundo select con los datos obtenidos de la llamada AJAX
function RecargarGrupos(datos) {
    $("#tablaEquipo").empty();
    // console.log(datos)
    // alert("askdakdkañlkdñlsak")
    var segundoSelect = document.getElementById('GruposSelect');
    segundoSelect.focus();
    // Limpiar las opciones actuales del segundo select
    segundoSelect.innerHTML = '';
    // Agregar nuevas opciones basadas en los datos recibidos
    for (var i = 0; i < datos.length; i++) {
        var opcion = document.createElement('option');
        opcion.value = datos[i].id;
        if (datos[i].id === "disabled") {
            opcion.selected = true; // Agregar la propiedad disabled
            opcion.value = "";
            // opcion.textContent = "Seleccionar Chofer";
        }
        opcion.textContent = datos[i].grupo;
        segundoSelect.appendChild(opcion);
    }
}


var coopSelect = document.getElementById("coopSelect");
if (coopSelect) {
    document.addEventListener('DOMContentLoaded', function () {
        // Asignar el evento onchange al elemento con el ID "coopSelect"
        document.getElementById('coopSelect').onchange = SelectorCooperativas;
    });
}

// Asociar la función SelectorCooperativas al evento onchange del primer select
// document.getElementById('coopSelect').onchange = SelectorCooperativas;


///////////////////////////////////////////////

// Esta función se ejecutará cuando se seleccione una opción en el primer select
function SelectGrupo() {
    // Obtener el valor seleccionado del primer select
    var valorSeleccionado = document.getElementById('GruposSelect').value;
    // alert(valorSeleccionado)
    $.post(
        "Ajax/descargas/equipo_x_grupo.php", //se envian a esta direccion
        {
            idGrupo: valorSeleccionado
        },
        function (data) {
            // console.log(data)
            $("#tablaEquipo").html(data); //se muestra la informacion en la etiqueta con id #mensajes
        }
    );

}


var gruposSelect = document.getElementById("gruposSelect");
if (gruposSelect) {
    document.addEventListener('DOMContentLoaded', function () {
        // Asignar el evento onchange al elemento con el ID "gruposSelect"
        document.getElementById('gruposSelect').onchange = SelectorCooperativas;
    });
}



function ValidaEquipo() {
    var checkboxes = document.getElementsByName("asistenciaEquipo[]");
    var alMenosUnoSeleccionado = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            alMenosUnoSeleccionado = true;
            break;
        }
    }

    if (!alMenosUnoSeleccionado) {
        alert("Debe seleccionar al menos un cooperativista para continuar");
        event.preventDefault();  // Esto evitará que el formulario se envíe si no hay al menos un checkbox seleccionado
    }
}

// Asociar la función SelectGrupo al evento onchange del primer select
// document.getElementById('gruposSelect').onchange = SelectGrupo;

