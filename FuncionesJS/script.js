var ListaDescarga = document.getElementById("ListaDescarga");
var CamionesActivosList = document.getElementById("CamionesActivosList");
var CamionesInactivosList = document.getElementById("CamionesInactivosList");


$(document).ready(function () {
  $('#ListaDescarga').DataTable({
    language: {
      url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
    }
  });
});

$(document).ready(function () {
  $('#CamionesActivosList').DataTable({
    language: {
      url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
    }
  });
});


$(document).ready(function () {
  $('#CamionesInactivosList').DataTable({
    language: {
      url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
    }
  });
});



// Data Table Lista Descargas
// $(document).ready(function () {
//   $("#ListaDescarga").DataTable({
//     responsive: true,
//     lengthChange: false,
//     autoWidth: false,
//     buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
//     language: {
//       url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
//     }
//   }).buttons().container().appendTo('#ListaDescarga_wrapper .col-md-6:eq(0)');
// });
// $(document).ready(function () {
//   $("#CamionesInactivosList").DataTable({
//     responsive: true,
//     lengthChange: false,
//     autoWidth: false,
//     buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
//     language: {
//       url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
//     }
//   }).buttons().container().appendTo('#CamionesActivosList_wrapper .col-md-6:eq(0)');
// });

// $(document).ready(function () {
//   $("#CamionesInactivosList").DataTable({
//     responsive: true,
//     lengthChange: false,
//     autoWidth: false,
//     buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
//     language: {
//       url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
//     }
//   }).buttons().container().appendTo('#CamionesInactivosList_wrapper .col-md-6:eq(0)');
// });

// Funcion cerrar Session cuando se cierra la ultima pestaña del sistema
function cerrarSession() {
  // llamamos al archivo cerrarSesion para romper la misma
  $.ajax({
    url: "cerrarSesion.php",
    success: function () {
      alert("Session finalizada");
    }
  });
}

