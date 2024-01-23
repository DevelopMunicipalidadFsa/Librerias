// function agregarBarrio() {

//     var select = document.getElementById('codBarrio');
//     var selectedIndex = select.selectedIndex;

//     if (selectedIndex !== -1) {
//         var id = select.options[selectedIndex].value;
//         var detalle = select.options[selectedIndex].text;

//         document.getElementById("tablaBarriosXZona").insertRow(-1).innerHTML =
//             '<td style="visibility:collapse; display:none;"><input type="hidden" id="codBarrio" name="idBarrio" value="' + id + '"/>' +
//             '</td><td class="text-center">' + detalle +
//             '</td><td class="text-center"><button type="button" class="btn btn-danger" onclick="eliminarBarrio()" title="Borrar"><i class="fas fa-times"></i></button></td>';

//         actualizarEstadoBotonGuardar();
//     }
// }

var barriosSeleccionados = {};


function agregarBarrio() {
    var select = document.getElementById('codBarrio');
    var selectedIndex = select.selectedIndex;

    if (selectedIndex !== -1) {
        var id = select.options[selectedIndex].value;
        var detalle = select.options[selectedIndex].text;

        if (!barriosSeleccionados[id]) {
            barriosSeleccionados[id] = detalle;

            document.getElementById("tablaBarriosXZona").insertRow(-1).innerHTML =
                '<td style="visibility:collapse; display:none;"><input type="hidden" id="codBarrio" name="idBarrio" value="' + id + '"/>' +
                '</td><td class="text-center">' + detalle +
                '</td><td class="text-center"><button type="button" class="btn btn-danger" onclick="eliminarBarrio()" title="Borrar"><i class="fas fa-times"></i></button></td>';

            actualizarEstadoBotonGuardar();
        } else {
            Swal.fire({
                title: "El barrio ya ha sido seleccionado",
                text: "Seleccione un barrio diferente.",
                icon: "warning"
            });
        }
    }
}


function eliminarBarrio() {

    var tablaZonas = document.getElementById("tablaBarriosXZona");
    var numeroFila = tablaZonas.rows.length;

    if (numeroFila <= 1)
        alert('Error');
    else
        tablaZonas.deleteRow(numeroFila - 1);

    actualizarEstadoBotonGuardar();
}


function actualizarEstadoBotonGuardar() {

    var tablaZonas = document.getElementById("tablaBarriosXZona");
    var botonguardar = document.getElementById("btnGuardar");

    var hayBarriosSeleccionados = tablaZonas.rows.length > 2;

    botonguardar.disabled = !hayBarriosSeleccionados;
}


function validarBarrio(idBarrioJS) {
    $.ajax({
        method: "POST",
        url: "Ajax/Zonas/validarBarrio.php",
        data: { idBarrio: idBarrioJS },
        success: function (r) {
            var r = JSON.parse(r);
            if (r.length > 0) {
                $("#botonAgregar").prop("disabled", true);
                $("#agregarBarrioBoton").prop("disabled", true);
                Swal.fire({
                    title: "El barrio: '" + r[0].DETALLE + "' ya existe en la Zona: " + r[0].nroZona,
                    text: "Seleccione un barrio válido.",
                    icon: "warning"
                });
            } else {
                $("#botonAgregar").prop("disabled", false);
                $("#agregarBarrioBoton").prop("disabled", false);
            }
        }
    });
}


function insertarRegistro() {

    var tabla = document.getElementById("tablaBarriosXZona");
    var aArray = $('#FormZona').serializeArray();

    Swal.fire({
        title: "<small>¿Estás seguro de realizar esta acción?</small>",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Confirmar",
        denyButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                method: "POST",
                url: "Ajax/Zonas/agregarZonas.php",
                data: { zona: aArray },
                success: function (r) {
                    var r = JSON.parse(r);
                    if (r === "ok") {
                        Swal.fire("Registro correcto!", "", "success").then((result) => {
                            let BarriosPorZona = listarBarriosPorZonas();
                            window.location.href = window.location.href;
                        });
                    } else {
                        Swal.fire("Error!", "", "error");
                    }
                }
            });
        } else if (result.isDenied) {
            Swal.fire("Registro cancelado", "", "info");
        }
    });
}


function listarBarriosPorZonas() {

    $.ajax({
        method: "POST",
        url: "Ajax/Zonas/listaBarriosPorZona.php",
        data: {},
        success: function (r) {
            var datos = JSON.parse(r);

            $("#tablaBarriosPorZonas tbody").empty();

            for (var i = 0; i < datos.length; i++) {
                var fila = '<tr>' +
                    '<td>' + datos[i].nroZona + '</td>' +
                    '<td>' + datos[i].descripcion + '</td>' +
                    '<td class="text-center">' +
                    '<button type="button" class="btn btn-outline-primary me-2" title="Detalle" data-bs-toggle="modal" data-bs-target="#modalDetallesZona" onclick="cargarBarrios(' + datos[i].nroZona + ')">' +
                    '<i class="fa-solid fa-list"></i>' +
                    '</button>' +
                    '<button type="button" class="btn btn-outline-warning" title="Editar" data-bs-toggle="modal" data-bs-target="#modalModificarZona" onclick="cargarBarriosModificar(' + datos[i].nroZona + ')">' +
                    '<i class="fas fa-pencil"></i>' +
                    '</button>' +
                    '</td>' +
                    '</tr>';

                $("#tablaBarriosPorZonas tbody").append(fila);
            }

            $('#tablaBarriosPorZonas').DataTable({
                language: {
                    url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
                }
            });
        },
        error: function (error) {
            console.log('Error al obtener datos: ' + error);
        }
    });
}


$(document).ready(function () {
    listarBarriosPorZonas();
});


function cargarBarrios(nroZonaJS) {

    var valor = '';
    valor += "<span>" + nroZonaJS + "</span>";
    $('#numeroZona').html(valor);
    $.ajax({
        method: "POST",
        url: "Ajax/Zonas/listaBarriosPorID.php",
        data: { nroZona: nroZonaJS },
        success: function (r) {
            try {
                var barrios = JSON.parse(r);
                $('#listaBarriosZona').empty();

                for (var i = 0; i < barrios.length; i++) {
                    var barrioFormateado = barrios[i].BarriosConId.trim();
                    var barrioArray = barrioFormateado.split(',');

                    for (var j = 0; j < barrioArray.length; j++) {

                        var partes = barrioArray[j].trim().split(':');
                        var idBarrio = partes[0];
                        var detalleBarrio = partes[1];

                        $('#listaBarriosZona').append('<li data-id="' + idBarrio + '">' + detalleBarrio + '</li>');
                    }
                }
            } catch (e) {
                console.error('Error al parsear datos JSON: ' + e.message);
            }
        },
        error: function (error) {
            console.log('Error al obtener barrios: ' + error);
        }
    });
}


$(document).on('show.bs.modal', '[id^="modalDetallesZona"]', function (event) {
    var button = $(event.relatedTarget); // Botón que activó el modal
    var nroZona = button.data('nroZona'); // Extraer información del atributo data-nroZona del botón

    $('#numeroZona').text(nroZona);
});


function cargarBarriosModificar(nroZonaJS) {
    var dato = '';
    dato += "<span>" + nroZonaJS + "</span>";
    $('#numeroZona').html(dato);

    $.ajax({
        method: "POST",
        url: "Ajax/Zonas/modificacionBarriosPorZona.php",
        data: { nroZona: nroZonaJS },
        success: function (r) {
            try {
                var respuesta = JSON.parse(r);
                var barrios = respuesta.barrios;
                var tbody = $('#tablaBarriosXZonaModificar tbody');
                var idZona = respuesta.idZona;

                $('#idZona').html("<span>" + idZona + "</span>");
                $('#idZonaInput').val(idZona).prop('readonly', true);

                tbody.empty();

                for (var i = 0; i < barrios.length; i++) {
                    var barrioFormateado = barrios[i].BarriosConId.trim();
                    var barrioArray = barrioFormateado.split(',');

                    var boton = document.getElementById("agregarBarrioBoton");
                    boton.onclick = function () {
                        agregarBarrioModificar(idZona);
                    };

                    for (var j = 0; j < barrioArray.length; j++) {
                        var partes = barrioArray[j].trim().split(':');
                        var idBarrio = partes[0];
                        var detalleBarrio = partes[1];

                        var row = $('<tr>');
                        row.append('<td style="visibility:collapse; display:none;"><input type="hidden" id="codBarrioModificarInput" name="idBarrio" value="' + idBarrio + '"/>');
                        row.append('<td class="text-center"><input type="hidden" name="idZona" id="idZonaInput" value="' + idZona + '" readonly>' + detalleBarrio + '</td>');
                        row.append('<td class="text-center"><button type="button" class="btn btn-danger" onclick="validarEliminarBarrioModificar(' + idBarrio + ')" title="Borrar" data-idbarrio="' + idBarrio + '"><i class="fas fa-times"></i></button></td>');

                        tbody.append(row);
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },
        error: function (error) {
            console.log('Error al obtener barrios: ' + error);
        }
    });
}


$(document).on('show.bs.modal', '[id^="modalModificarZona"]', function (event) {
    var button = $(event.relatedTarget); // Botón que activó el modal
    var nroZona = button.data('nroZona'); // Extraer información del atributo data-nroZona del botón

    // Actualizar el número de zona en el modal
    $('#numeroZona').text(nroZona);
});


// function agregarBarrioModificar(idZona) {

//     var select = document.getElementById('codBarrioModificar');
//     var selectedIndex = select.selectedIndex;

//     if (selectedIndex !== -1) {
//         var id = select.options[selectedIndex].value;
//         var detalle = select.options[selectedIndex].text;

//         if (!barriosSeleccionados[id]) {
//             barriosSeleccionados[id] = detalle;

//             document.getElementById("tablaBarriosXZonaModificar").insertRow(-1).innerHTML =
//             '<td style="visibility:collapse; display:none;"><input type="hidden" id="codBarrioModificarInput_' + id + '" name="idBarrioNuevo" value="' + id + '"/>' +
//             '</td><td class="text-center"><input type="hidden" name="idZonaNuevo" id="idZonaInput" value="'+idZona+'" readonly>' + detalle +
//             '</td><td class="text-center"><button type="button" class="btn btn-danger" onclick="eliminarBarrioPorZona()" title="Borrar"><i class="fas fa-times"></i></button></td>';

//         } else {
//             Swal.fire({
//                 title: "El barrio ya ha sido seleccionado",
//                 text: "Seleccione un barrio diferente.",
//                 icon: "warning"
//             });
//         }
//     }
// }

function agregarBarrioModificar(idZona) {
    var select = document.getElementById('codBarrioModificar');
    var selectedIndex = select.selectedIndex;

    if (selectedIndex !== -1) {
        var id = select.options[selectedIndex].value;
        var detalle = select.options[selectedIndex].text;

        if (!barriosSeleccionados[id]) {
            barriosSeleccionados[id] = detalle;

            document.getElementById("tablaBarriosXZonaModificar").insertRow(-1).innerHTML =
                '<td style="visibility:collapse; display:none;"><input type="hidden" id="codBarrioModificarInput_' + id + '" name="idBarrioNuevo" value="' + id + '"/>' +
                '</td><td class="text-center"><input type="hidden" name="idZonaNuevo" id="idZonaInput" value="' + idZona + '" readonly>' + detalle +
                '</td><td class="text-center"><button type="button" class="btn btn-danger" onclick="eliminarBarrioPorZona()" title="Borrar"><i class="fas fa-times"></i></button></td>';

            var botonGuardarCambios = $('#botonGuardarCambios');
            botonGuardarCambios.removeClass('d-none');

        } else {
            Swal.fire({
                title: "El barrio ya ha sido seleccionado",
                text: "Seleccione un barrio diferente.",
                icon: "warning"
            });
        }
    }
}


function eliminarBarrioPorZona() {

    var tablaBarrioPorZona = document.getElementById("tablaBarriosXZonaModificar");
    var numeroFila = tablaBarrioPorZona.rows.length;
    var botonGuardarCambios = $('#botonGuardarCambios');

    if (numeroFila <= 1)
        alert('Error');
    else
        tablaBarrioPorZona.deleteRow(numeroFila - 1);
    botonGuardarCambios.addClass('d-none');
}


function validarRegistroAltaModificacion() {

    var tabla = document.getElementById("tablaBarriosXZonaModificar");
    var bArray = $('#FormBarrioPorZona').serializeArray();

    Swal.fire({
        title: "<small>¿Estás seguro de realizar esta acción?</small>",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Confirmar",
        denyButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                method: "POST",
                url: "Ajax/Zonas/agregarBarriosPorZonas.php",
                data: { barrioZona: bArray },
                success: function (r) {
                    var r = JSON.parse(r);
                    if (r === "ok") {
                        Swal.fire("Registro correcto!", "", "success").then((result) => {
                            window.location.href = window.location.href;
                        });
                    } else {
                        Swal.fire("Error!", "", "error");
                    }
                }
            });
        } else if (result.isDenied) {
            Swal.fire("Registro cancelado", "", "info");
        }
    });
}


function validarEliminarBarrioModificar(idBarrio) {

    var filaAEliminar = $("#tablaBarriosXZonaModificar").find('input[name="idBarrio"][value="' + idBarrio + '"]').closest('tr');

    Swal.fire({
        title: "<small>¿Estás seguro de realizar esta acción?</small>",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Confirmar",
        denyButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            if (filaAEliminar.length > 0) {
                eliminarBarrio(idBarrio);
            } else {
                alert('Error: No se encontró la fila correspondiente al ID del barrio.');
            }
        } else if (result.isDenied) {
            Swal.fire("Baja cancelada", "", "info");
        }
    });
}


// function eliminarBarrio(idBarrio) {
//     $.ajax({
//         method: "POST",
//         url: "Ajax/Zonas/bajaBarrioPorZona.php",
//         data: { idBarrio: idBarrio },
//         success:function(r){
//             var r = JSON.parse(r);
//             if(r==="ok"){
//                 Swal.fire("Baja correcta!", "", "success").then((result) => {
//                     filaAEliminar.remove();
//                 });
//             }else{
//                 Swal.fire("Error!", "", "error");
//             }
//         },
//         error: function (error) {
//             console.error('Error en la solicitud AJAX: ' + error);
//         }
//     });
// }

function eliminarBarrio(idBarrio) {
    var filaAEliminar = $("#tablaBarriosXZonaModificar").find('input[name="idBarrio"][value="' + idBarrio + '"]').closest('tr');

    $.ajax({
        method: "POST",
        url: "Ajax/Zonas/bajaBarrioPorZona.php",
        data: { idBarrio: idBarrio },
        success: function (r) {
            var r = JSON.parse(r);
            if (r === "ok") {
                filaAEliminar.remove();

                Swal.fire("Baja correcta!", "", "success");
            } else {
                Swal.fire("Error!", "", "error");
            }
        },
        error: function (error) {
            console.error('Error en la solicitud AJAX: ' + error);
        }
    });
}
