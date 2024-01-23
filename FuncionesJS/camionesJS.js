function convertirAMayusculas(inputId) {
  var input = document.getElementById(inputId);
  // Eliminar caracteres especiales utilizando una expresión regular
  var textoSinEspeciales = input.value.replace(/[^a-zA-Z0-9]/g, '');
  // Convertir el texto limpio a mayúsculas
  input.value = textoSinEspeciales.toUpperCase();
}

document.addEventListener('DOMContentLoaded', function () {
  // Tu código aquí
  var domBuscar = document.getElementById('dom_buscar');
  if (domBuscar) {
    domBuscar.addEventListener('keyup', function () {
      var valor = this.value;
      this.value = valor.toUpperCase();
    });
  }
});

function validaPropiedadCamion() {
  var checkBox = document.getElementById("propiedad_muni");


  if (checkBox.checked) {

    var checkChoferTitular = document.querySelector('#chofer_titular');

    // Desmarcar el checkbox
    checkChoferTitular.checked = false;
    // alert("El checkbox está seleccionado");
    var divTitularTab = document.querySelector('div[aria-labelledby="titular-tab"]');
    // Seleccionar los campos por sus nombres
    var nombreCompleto = divTitularTab.querySelector('#nombre_completo');
    var dni = divTitularTab.querySelector('#dni');
    var fechaNac = divTitularTab.querySelector('#fecha_nac');
    var idNacionalidad = divTitularTab.querySelector('#id_nacionalidad');
    var telefono = divTitularTab.querySelector('#telefono');
    var idBarrio = divTitularTab.querySelector('#id_barrio_t');
    var idCalle = divTitularTab.querySelector('#id_calle_t');

    // Deshabilitar los campos
    nombreCompleto.required = false;
    dni.required = false;
    fechaNac.required = false;
    idNacionalidad.required = false;
    telefono.required = false;
    idBarrio.required = false;
    idCalle.required = false;

    //LI NAV ITEMS
    var ItemTabTitular = document.querySelector('#btnTabTitular');
    var ItemTabCamion = document.querySelector('#btnTabCamion');

    //NAV LINKS ITEMS
    var BtnCamion = document.querySelector('#camion-tab');
    var BtnTitular = document.querySelector('#titular-tab');

    //DIV TAB PANE
    var divtitular = document.querySelector('#titular');
    var divcamion = document.querySelector('#camion');

    // Ocultar el botón
    ItemTabTitular.style.display = 'none';

    divtitular.classList.remove('active', 'show');
    divcamion.classList.add('active', 'show');

    BtnCamion.classList.add('active');
    BtnTitular.classList.remove('active');

  } else {
    // alert("El checkbox no está seleccionado");

    var divTitularTab = document.querySelector('div[aria-labelledby="titular-tab"]');
    // Seleccionar los campos por sus nombres
    var nombreCompleto = divTitularTab.querySelector('#nombre_completo');
    var dni = divTitularTab.querySelector('#dni');
    var fechaNac = divTitularTab.querySelector('#fecha_nac');
    var idNacionalidad = divTitularTab.querySelector('#id_nacionalidad');
    var telefono = divTitularTab.querySelector('#telefono');
    var idBarrio = divTitularTab.querySelector('#id_barrio_t');
    var idCalle = divTitularTab.querySelector('#id_calle_t');

    // Deshabilitar los campos
    nombreCompleto.required = true;
    dni.required = true;
    fechaNac.required = true;
    idNacionalidad.required = true;
    telefono.required = true;
    idBarrio.required = true;
    idCalle.required = true;

    var ItemTabTitular = document.querySelector('#btnTabTitular');
    var ItemTabCamion = document.querySelector('#btnTabCamion');

    var BtnCamion = document.querySelector('#camion-tab');
    var BtnTitular = document.querySelector('#titular-tab');



    var divtitular = document.querySelector('#titular');
    var divcamion = document.querySelector('#camion');


    // Ocultar el botón
    btnTabTitular.style.display = 'block';

    divcamion.classList.add('active', 'show');
    btnTabCamion.classList.add('active');
    btnTabTitular.classList.remove('active');
  }
}

function ValidaChoferTitular() {
  var checkBox = document.getElementById("chofer_titular");


  if (checkBox.checked) {
    var checkPropiedadMuni = document.querySelector('#propiedad_muni');
    // Desmarcar el checkbox
    checkPropiedadMuni.checked = false;
    // alert("El checkbox no está seleccionado");

    var divTitularTab = document.querySelector('div[aria-labelledby="titular-tab"]');

    var div_idTipo = divTitularTab.querySelector('#ocultarTipoChofer');
    var OcultarTipoLicenciaTitular = divTitularTab.querySelector('#OcultarTipoLicenciaTitular');
    var OcultarVencimientoLicenciaTitular = divTitularTab.querySelector('#OcultarVencimientoLicenciaTitular');

    div_idTipo.style.display = 'block';
    OcultarTipoLicenciaTitular.style.display = 'block';
    OcultarVencimientoLicenciaTitular.style.display = 'block';

    // Seleccionar los campos por sus nombres
    var id_tipo_chofer = divTitularTab.querySelector('#id_tipo_chofer');
    var tipo_licencia_titular = divTitularTab.querySelector('#tipo_licencia_titular');
    var vencimiento_licencia_titular = divTitularTab.querySelector('#vencimiento_licencia_titular');
    var nombreCompleto = divTitularTab.querySelector('#nombre_completo');
    var dni = divTitularTab.querySelector('#dni');
    var fechaNac = divTitularTab.querySelector('#fecha_nac');
    var idNacionalidad = divTitularTab.querySelector('#id_nacionalidad');
    var telefono = divTitularTab.querySelector('#telefono');
    var idBarrio = divTitularTab.querySelector('#id_barrio_t');
    var idCalle = divTitularTab.querySelector('#id_calle_t');

    // Deshabilitar los campos
    id_tipo_chofer.required = true;
    tipo_licencia_titular.required = true;
    vencimiento_licencia_titular.required = true;
    nombreCompleto.required = true;
    dni.required = true;
    fechaNac.required = true;
    idNacionalidad.required = true;
    telefono.required = true;
    idBarrio.required = true;
    idCalle.required = true;

    var ItemTabTitular = document.querySelector('#btnTabTitular');
    var ItemTabCamion = document.querySelector('#btnTabCamion');

    var BtnCamion = document.querySelector('#camion-tab');
    var BtnTitular = document.querySelector('#titular-tab');

    var divtitular = document.querySelector('#titular');
    var divcamion = document.querySelector('#camion');


    // Ocultar el botón
    btnTabTitular.style.display = 'block';

    // divcamion.classList.remove('active', 'show');
    // btnTabTitular.classList.add('active', 'show');
    // btnTabCamion.classList.add('active');
    // btnTabTitular.classList.remove('active');
  } else {
    // alert("hola");
    var divTitularTab = document.querySelector('div[aria-labelledby="titular-tab"]');
    var divcamion = document.querySelector('#camion');
    divcamion.classList.remove('show');


    var div_idTipo = divTitularTab.querySelector('#ocultarTipoChofer');
    var id_tipo_chofer = divTitularTab.querySelector('#id_tipo_chofer');
    var OcultarTipoLicenciaTitular = divTitularTab.querySelector('#OcultarTipoLicenciaTitular');
    var OcultarVencimientoLicenciaTitular = divTitularTab.querySelector('#OcultarVencimientoLicenciaTitular');
    var tipo_licencia_titular = divTitularTab.querySelector('#tipo_licencia_titular');
    var vencimiento_licencia_titular = divTitularTab.querySelector('#vencimiento_licencia_titular');


    OcultarTipoLicenciaTitular.style.display = 'none';
    OcultarVencimientoLicenciaTitular.style.display = 'none';
    id_tipo_chofer.required = false;
    tipo_licencia_titular.required = false;
    vencimiento_licencia_titular.required = false;
    div_idTipo.style.display = 'none';
  }
}

function BusquedaCamion() {
  // Obtenemos el valor del input dominio
  var dominio = document.getElementById("dom_buscar").value;

  // Realizamos la petición AJAX para buscar al dominio
  $.ajax({
    method: "POST",
    url: "Ajax/camiones/camiones_buscarDominio.php",
    data: { dominio: dominio },
    success: function (r) {
      // Convertimos la respuesta JSON en un objeto JavaScript
      // console.log(r);

      var camion = JSON.parse(r);
      // console.log(camion); 

      // alert(camion);
      if (camion === "camion_existe") {
        document.getElementById("alertDominioExiste").style.display = "block";
        document.getElementById("alertDominio").style.display = "none";
        document.getElementById("alertDniFalseTitular").style.display = "none";
        limpiarCampos();
      } else {
        if (camion === "no se encontro dominio") {
          document.getElementById("alertDominio").style.display = "block";
          document.getElementById("alertDominioExiste").style.display = "none";
          limpiarCampos();
        } else {
          if (camion.mensaje === "SinDomicilio") {
            document.getElementById("alertDniFalseTitular").style.display = "none";
            document.getElementById("alertDominio").style.display = "none";
            document.getElementById("alertDominioExiste").style.display = "none";

            document.getElementById("dominio").value = camion.dominio;
            document.getElementById("modelo").value = camion.modelo;
            document.getElementById("marca").value = camion.marca;
            document.getElementById("tipo_servicio").value = camion.servicio;

            document.getElementById("nombre_completo").value = camion.nombre_completo;
            document.getElementById("dni").value = camion.dni;
            document.getElementById("telefono").value = camion.telefono;
            document.getElementById("id_nacionalidad").value = camion.id_nacionalidad;

            var InputFechaNac = document.getElementById("fecha_nac");
            InputFechaNac.removeAttribute("type", "date");

            document.getElementById("dominio").readOnly = true;
            document.getElementById("modelo").readOnly = true;
            document.getElementById("marca").readOnly = true;
            document.getElementById("nombre_completo").readOnly = true;
            document.getElementById("dni").readOnly = true;
            document.getElementById("fecha_nac").readOnly = true;

          } else {
            document.getElementById("alertDniFalseTitular").style.display = "none";
            document.getElementById("alertDominio").style.display = "none";
            document.getElementById("alertDominioExiste").style.display = "none";

            document.getElementById("dominio").value = camion.dominio;
            document.getElementById("modelo").value = camion.modelo;
            document.getElementById("marca").value = camion.marca;
            document.getElementById("tipo_servicio").value = camion.servicio;

            document.getElementById("nombre_completo").value = camion.nombre_completo;
            document.getElementById("dni").value = camion.dni;
            document.getElementById("telefono").value = camion.telefono;
            document.getElementById("id_nacionalidad").value = camion.id_nacionalidad;

            var InputFechaNac = document.getElementById("fecha_nac");
            InputFechaNac.removeAttribute("type", "date");

            document.getElementById("fecha_nac").value = camion.fecha_nacimiento;

            document.getElementById("id_barrio_t").value = camion.barrio;
            document.getElementById("id_calle_t").value = camion.calle;
            document.getElementById("numero").value = camion.numero;
            document.getElementById("mz").value = camion.mz;
            document.getElementById("sector").value = camion.sector;
            document.getElementById("parcela").value = camion.parcela;
            document.getElementById("casa").value = camion.casa;
            document.getElementById("torre").value = camion.torre;
            document.getElementById("piso").value = camion.piso;
            document.getElementById("dpto").value = camion.dpto;

            document.getElementById("dominio").readOnly = true;
            document.getElementById("modelo").readOnly = true;
            document.getElementById("marca").readOnly = true;
            document.getElementById("nombre_completo").readOnly = true;
            document.getElementById("dni").readOnly = true;
            document.getElementById("fecha_nac").readOnly = true;
          }

        }
      }
    },
    error: function (error) {
      // Manejamos los errores de la petición AJAX
      console.error("Error en la petición AJAX: " + error);
    },
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var btnBuscarCamion = document.getElementById("btnBuscarCamion");
  if (btnBuscarCamion) {
    btnBuscarCamion.addEventListener("click", function () {
      BusquedaCamion();
    });
  }
});

// document.getElementById("btnBuscarCamion").addEventListener("click", function () { BusquedaCamion(); });



function validarFormulario(Id_formulario, event) {

  var idForm = Id_formulario;
  var campos = document.querySelectorAll(
    "#" +
    Id_formulario +
    " input[required], #" +
    Id_formulario +
    " select[required], #" +
    Id_formulario +
    " textarea[required]"
  );


  if (idForm === 'altaChoferes') {
    var MsjTelerror = document.getElementById("MsjTelerror");
    var telefono = document.getElementById("telefono_ch").value;
    var telefono2 = document.getElementById("telefono2_ch").value;

    var vencimiento = document.getElementById("vencimiento_licencia").value;

    var msj = "de la licencia";

    var formCompleto = true; // Variable para controlar si el formulario está completo

    var numeroLimpio1 = telefono.toString().replace(/\s/g, "").replace(/-/g, "");
    var numeroLimpio2 = telefono2.toString().replace(/\s/g, "").replace(/-/g, "");

    var fechaNacimiento = document.getElementById("fecha_nacimiento_ch")
    if (!validarEdad(fechaNacimiento)) {
      formCompleto = false; // La edad es menor que 18 años
      // alert("La persona debe tener al menos 18 años 01");
    } else {
      formCompleto = true;
    }



    // Obtener la fecha actual
    var fechaActual = new Date(); //mostrar

    // Convertir la fecha proporcionada a un objeto Date
    var fechaIngresada = new Date(vencimiento); //mostrar

    // Verificar si la fecha ingresada es igual o menor que la fecha actual

    if (fechaIngresada <= fechaActual) {
      formCompleto = false; // La fecha ingresada es igual o menor que la fecha actual
      alert("El la fecha de vencimiento " + msj + " se encuentra expirada 01");
    } else {
      formCompleto = true; // La fecha ingresada es mayor que la fecha actual

      if (numeroLimpio1.length === 10 && !isNaN(numeroLimpio1)) {
        formCompleto = true; // El número de teléfono tiene exactamente 10 dígitos y son todos números
        var MsjTelerror = document.getElementById("MsjTelerror").style.display = "none";
        if (telefono2) {
          if (numeroLimpio2.length === 10 && !isNaN(numeroLimpio2)) {
            formCompleto = true; // El número de teléfono tiene exactamente 10 dígitos y son todos números
          } else {
            formCompleto = false; // El número de teléfono no cumple con los requisitos

            alert("el telefono 2 no corresponde al formato adecuado (10 digitos)");
          }
        }
      } else {
        formCompleto = false; // El número de teléfono no cumple con los requisitos
        // alert(tieneAtributoRequired);
        // alert("el telefono 1 no corresponde al formato adecuado (10 digitos)");

        MsjTelerror.style.display = "block";
      }
    }
  } else if (idForm === 'formFiltroCamion') {  ////////////////////////////////////////////// 
    var telefono = document.getElementById("telefono").value;
    // var tieneAtributoRequired = telefono.hasAttribute('required');

    var telefono2 = document.getElementById("telefono2").value;
    var vencimiento = document.getElementById("vencimiento_seguro").value;
    var msj = "del seguro";

    var checkChoferTitular = document.getElementById("propiedad_muni");

    var checkBox = document.getElementById("chofer_titular");

    if (checkBox.checked) {
      var vencimiento_licencia_titular = document.getElementById("vencimiento_licencia_titular").value;
      // alert(vencimiento_licencia_titular)
      var fechaActual = new Date();
      var añoA = fechaActual.getFullYear();
      var mesA = ('0' + (fechaActual.getMonth() + 1)).slice(-2); // Sumar 1 al mes ya que en JavaScript los meses van de 0 a 11
      var díaA = ('0' + fechaActual.getDate()).slice(-2);

      // Formatear la fecha en el nuevo formato "Y/mm/dd"
      var fechaActual = añoA + '-' + mesA + '-' + díaA;

      if (vencimiento_licencia_titular <= fechaActual || vencimiento_licencia_titular === fechaActual) {
        formCompleto = false; // La fecha ingresada es igual o menor que la fecha actual
        // alert("El la fecha de vencimiento de la licencia se encuentra expirada 02");

        var MsjVencimientoLicencia = document.getElementById("MsjVencimientoLicencia");
        MsjVencimientoLicencia.style.display = "block";
      } else {
        formCompleto = true; // La fecha ingresada es mayor que la fecha actual
        var MsjVencimientoLicencia = document.getElementById("MsjVencimientoLicencia");
        MsjVencimientoLicencia.style.display = "none";
      }
    }
    var fechaNacimiento = document.getElementById("fecha_nac").value;

    if (fechaNacimiento) {
      if (!validarEdad(fechaNacimiento)) {
        formCompleto = false; // La edad es menor que 18 años
        // alert("La persona debe tener al menos 18 años 02");

        var MsjMayorEdad = document.getElementById("MsjMayorEdad");
        MsjMayorEdad.style.display = "block";

      } else {
        formCompleto = true;
        var MsjMayorEdad = document.getElementById("MsjMayorEdad");
        MsjMayorEdad.style.display = "block";
      }

    }



    var formCompleto = true; // Variable para controlar si el formulario está completo

    var numeroLimpio1 = telefono.toString().replace(/\s/g, "").replace(/-/g, "");
    var numeroLimpio2 = telefono2.toString().replace(/\s/g, "").replace(/-/g, "");


    if (checkChoferTitular.checked) {
      // alert(checkChoferTitular);
    } else {
      if (vencimiento) {
        var fechaActual = new Date();
        var añoA = fechaActual.getFullYear();
        var mesA = ('0' + (fechaActual.getMonth() + 1)).slice(-2); // Sumar 1 al mes ya que en JavaScript los meses van de 0 a 11
        var díaA = ('0' + fechaActual.getDate()).slice(-2);

        // Formatear la fecha en el nuevo formato "Y/mm/dd"
        var fechaActual = añoA + '-' + mesA + '-' + díaA;

        console.log(fechaActual + '/' + vencimiento);

        if (vencimiento <= fechaActual || vencimiento === fechaActual) {
          formCompleto = false; // La fecha ingresada es igual o menor que la fecha actual
          var CampoVencimiento = 'no';
          // alert("El la fecha de vencimiento " + msj + " se encuentra expirada 03");
          var MsjVencimientoSeguro = document.getElementById("MsjVencimientoSeguro");

          MsjVencimientoSeguro.style.display = "block";
        } else {
          formCompleto = true; // La fecha ingresada es mayor que la fecha actual
          var CampoVencimiento = 'si';

          var MsjVencimientoSeguro = document.getElementById("MsjVencimientoSeguro");

          MsjVencimientoSeguro.style.display = "none";
        }
      }
    }
  }




  for (var i = 0; i < campos.length; i++) {
    if (
      campos[i].value === "" ||
      (campos[i].tagName === "SELECT" && campos[i].value === "Seleccionar")
    ) {
      campos[i].classList.add("campo-incompleto"); // Agrega la clase para resaltar el campo
      formCompleto = false; // Marca el formulario como incompleto
      // alert("debe completar todos los campos");


    } else {
      campos[i].classList.remove("campo-incompleto"); // Elimina la clase si el campo está completo
      campos[i].classList.add("campo-completo");
    }
  }

  if (CampoVencimiento === 'no') {
    var vencimiento = document.getElementById("vencimiento_seguro").focus();
  }

  // if (validacionInterno.existe === true) {
  if (formCompleto === false) {
    var MsjCampos = document.getElementById("MsjCampos");

    MsjCampos.style.display = "block";
    // alert("Por favor, complete todos los campos obligatorios en el formulario");
    event.preventDefault();
  }
  // event.preventDefault();
}

var registros = 0;

function nuevoRegistro() {
  if (registros < 2) {
    var container = document.getElementById("registros");
    var newregistros = container.cloneNode(true);
    container.parentNode.insertBefore(newregistros, container.nextSibling);

    var removeButtonDiv = document.createElement("div");
    removeButtonDiv.setAttribute("class", "col-4");

    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Eliminar registro";
    removeButton.setAttribute("class", "btn btn-danger w-100 mb-2");
    removeButton.setAttribute("onclick", "removeRegistros(this)");
    // newregistros.appendChild(removeButton);

    removeButtonDiv.appendChild(removeButton);
    newregistros.appendChild(removeButtonDiv);

    registros++;
  } else {
    alert("Solo se permiten 2 registros");
  }
}

function removeRegistros(button) {
  button.parentNode.parentNode.remove();
  registros--;
}

function limpiarCampos() {
  var inputs = document.getElementsByTagName("input");
  var selects = document.getElementsByTagName("select");
  var textareas = document.getElementsByTagName("textarea");

  document.getElementById("dominio").readOnly = false;
  document.getElementById("modelo").readOnly = false;
  document.getElementById("marca").readOnly = false;
  document.getElementById("nombre_completo").readOnly = false;
  document.getElementById("dni").readOnly = false;
  // document.getElementById("direccion").readOnly = false;
  document.getElementById("telefono").readOnly = false;
  document.getElementById("fecha_nac").readOnly = false;

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }

  for (var i = 0; i < selects.length; i++) {
    selects[i].selectedIndex = 0;
  }

  for (var i = 0; i < textareas.length; i++) {
    textareas[i].value = "";
  }
}

function BuscarChofer() {
  // Obtenemos el valor del input DNI
  var dni = document.getElementById("doc_chofer").value;
  var idCamion = document.getElementById("idCamion").value;

  // alert(idCamion);

  // Verificamos si el DNI tiene al menos 7 caracteres (cantidad válida para la identificación de una persona)
  if (dni.length >= 7) {
    // Realizamos la petición AJAX para buscar al chofer
    document.getElementById("alertDniIncorrecto").style.display = "none";
    $.ajax({
      method: "POST",
      url: "Ajax/camiones/camiones_buscarChofer.php",
      data: { dni: dni, idCamion: idCamion },
      success: function (r) {
        // Convertimos la respuesta JSON en un objeto JavaScript
        var chofer = JSON.parse(r);
        // console.log(chofer);

        // if (chofer === 'El DNI no tiene la cantidad mínima de caracteres') {
        //   //   // Actualizamos los campos del formulario con los datos del chofer

        // } else {
        if (chofer === "chofer_existe") {
          // alert("este chofer existe y ya esta asignado a este camion");
          document.getElementById("alertExisteChoferxCamion").style.display =
            "block";
          // limpiarSeccion('altaChoferes');
        } else {
          //   // Manejamos el caso en el que no se encuentre un chofer con el DNI proporcionado
          document.getElementById("alertExisteChoferxCamion").style.display =
            "none";

          if (chofer.infoPersona === "GestionAmbiental") {
            document.getElementById("nombre_c_chofer").value = chofer.nombre_completo;
            document.getElementById("dni_ch").value = chofer.dni;
            document.getElementById("telefono_ch").value = chofer.telefono;
            document.getElementById("telefono2_ch").value = chofer.telefono2;
            document.getElementById("mail_ch").value = chofer.mail;
            document.getElementById("id_nacionalidad_ch").value = chofer.id_nacionalidad;
            document.getElementById("id_barrio_chofer").value = chofer.barrio;
            document.getElementById("id_calle_chofer").value = chofer.calle;
            document.getElementById("numero_ch").value = chofer.numero;
            document.getElementById("mz_ch").value = chofer.mz;
            document.getElementById("sector_ch").value = chofer.sector;
            document.getElementById("parcela_ch").value = chofer.parcela;
            document.getElementById("casa_ch").value = chofer.casa;
            document.getElementById("torre_ch").value = chofer.torre;
            document.getElementById("piso_ch").value = chofer.piso;
            document.getElementById("dpto_ch").value = chofer.dpto;
            document.getElementById("fecha_nacimiento_ch").value = chofer.fecha_nacimiento;


            document.getElementById("tipo_chofer").value = chofer.tipoChofer;
            document.getElementById("tipo_licencia").value = chofer.tipoLicencia;
            document.getElementById("vencimiento_licencia").value = chofer.fecVencimientoLicencia;

          } else {
            document.getElementById("nombre_c_chofer").value = chofer.nombre_completo;
            document.getElementById("dni_ch").value = chofer.dni;
            document.getElementById("telefono_ch").value = chofer.telefono;
            document.getElementById("id_nacionalidad_ch").value = chofer.id_nacionalidad;
            document.getElementById("id_barrio_chofer").value = chofer.barrio;
            document.getElementById("id_calle_chofer").value = chofer.calle;
            document.getElementById("numero_ch").value = chofer.numero;
            document.getElementById("mz_ch").value = chofer.mz;
            document.getElementById("sector_ch").value = chofer.sector;
            document.getElementById("parcela_ch").value = chofer.parcela;
            document.getElementById("casa_ch").value = chofer.casa;
            document.getElementById("torre_ch").value = chofer.torre;
            document.getElementById("piso_ch").value = chofer.piso;
            document.getElementById("dpto_ch").value = chofer.dpto;
          }


        }

        // }
      },
      error: function (error) {
        // Manejamos los errores de la petición AJAX
        console.error("Error en la petición AJAX: " + error);
      },
    });
  } else {
    // Manejamos el caso en el que el DNI no tiene la cantidad mínima de caracteres
    document.getElementById("alertDniIncorrecto").style.display = "block";
    // console.log("El DNI no tiene la cantidad mínima de caracteres");
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var btnBuscarChofer = document.getElementById("btn_buscar_chofer");
  if (btnBuscarChofer) {
    btnBuscarChofer.addEventListener("click", function () {
      BuscarChofer();
    });
  }
});
// document
//   .getElementById("btn_buscar_chofer")
//   .addEventListener("click", function () {
//     BuscarChofer();
//   });

function limpiarSeccion(id) {
  // Obtener el elemento con el id especificado
  var contenedor = document.getElementById(id);

  // Obtener todos los campos de entrada dentro del contenedor
  var campos = contenedor.getElementsByTagName("input");
  var selects = contenedor.getElementsByTagName("select");
  var textareas = contenedor.getElementsByTagName("textarea");

  // Recorrer y limpiar los campos de tipo input
  for (var i = 0; i < campos.length; i++) {
    campos[i].value = campos[i].value = ""; // Limpiar el valor eliminando espacios en blanco al principio y al final
    campos[i].readOnly = false;
  }

  // Recorrer y limpiar los campos de tipo select
  for (var i = 0; i < selects.length; i++) {
    selects[i].value = selects[i].value = "";
    selects[i].readOnly = false; // Limpiar el valor eliminando espacios en blanco al principio y al final
  }

  // Recorrer y limpiar los campos de tipo textarea
  for (var i = 0; i < textareas.length; i++) {
    textareas[i].value = textareas[i].value = "";
    textareas[i].readOnly = false; // Limpiar el valor eliminando espacios en blanco al principio y al final
  }
}

function BuscarTitular() {
  // Obtenemos el valor del input DNI
  var dni = document.getElementById("doc_titular").value;

  // Verificamos si el DNI tiene al menos 7 caracteres (cantidad válida para la identificación de una persona)
  if (dni.length >= 7) {
    document.getElementById("alertDniTitular").style.display = "none";
    // Realizamos la petición AJAX para buscar al chofer
    $.ajax({
      method: "POST",
      url: "Ajax/camiones/camiones_buscarPersona.php",
      data: { dni: dni },
      success: function (r) {
        // Convertimos la respuesta JSON en un objeto JavaScript
        // console.log(r);

        var titular = JSON.parse(r);

        // alert(titular)

        if (titular == "error_dni") {
          //   // Actualizamos los campos del formulario con los datos del titular
          // alert("El titular no fue encontrado");
          document.getElementById("alertDniFalseTitular").style.display =
            "block";
          limpiarSeccion("titular");
        } else {
          //   // Manejamos el caso en el que no se encuentre un titular con el DNI proporcionado
          document.getElementById("alertDniFalseTitular").style.display =
            "none";

          document.getElementById("nombre_completo").value =
            titular.nombre_completo;
          document.getElementById("dni").value = titular.dni;
          document.getElementById("telefono").value = titular.telefono;
          document.getElementById("id_nacionalidad").value =
            titular.id_nacionalidad;

          var InputFechaNac = document.getElementById("fecha_nac");
          InputFechaNac.removeAttribute("type", "date");

          document.getElementById("fecha_nac").value = titular.fecha_nacimiento;

          document.getElementById("id_barrio_t").value = titular.barrio;
          // document.getElementById("direccion").value = titular.direccion;
          document.getElementById("id_calle_t").value = titular.calle;
          document.getElementById("numero").value = titular.numero;
          document.getElementById("mz").value = titular.mz;
          document.getElementById("sector").value = titular.sector;
          document.getElementById("parcela").value = titular.parcela;
          document.getElementById("casa").value = titular.casa;
          document.getElementById("torre").value = titular.torre;
          document.getElementById("piso").value = titular.piso;
          document.getElementById("dpto").value = titular.dpto;
        }
      },
      error: function (error) {
        // Manejamos los errores de la petición AJAX
        console.error("Error en la petición AJAX: " + error);
      },
    });
  } else {
    // Manejamos el caso en el que el DNI no tiene la cantidad mínima de caracteres
    // console.log("El DNI no tiene la cantidad mínima de caracteres");
    document.getElementById("alertDniTitular").style.display = "block";
    document.getElementById("alertDniFalseTitular").style.display = "none";
    limpiarSeccion("titular");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var btnBuscarTitular = document.getElementById("btn_buscar_titular");
  if (btnBuscarTitular) {
    btnBuscarTitular.addEventListener("click", function () {
      BuscarTitular();
    });
  }
});

// document
//   .getElementById("btn_buscar_titular")
//   .addEventListener("click", function () {
//     BuscarTitular();
//   });



$(document).on("click", ".btn_adm_choferes", function () {
  var idCamion = $(this).attr("data-idCamion");
  var interno = $(this).attr("data-interno");
  var dominio = $(this).attr("data-dominio");

  $("#dataInterno").val(interno);
  $("#idCamion").val(idCamion);
  $("#datadominio").val(dominio);

  $("#ModalA_Chofer").modal("show");
});

$(document).on("click", ".btn_baja_camion", function () {
  var idCamion = $(this).attr("baja-idCamion");
  var dominio = $(this).attr("baja-dominio");
  $("#bajaidCamion").val(idCamion);
  $("#bajadominio").val(dominio);

  $("#ModalB_Camion").modal("show");
});

$(document).on("click", ".btn_baja_chofer", function () {
  var idCamion = $(this).attr("data-idCamion");
  var idChofer = $(this).attr("data-idChofer");

  $("#idBajaCamion").val(idCamion);
  $("#bajaidChofer").val(idChofer);

  $("#ModalB_Chofer").modal("show");
});

$(document).on("click", ".btn_rehabilita_chofer", function () {
  var idCamion = $(this).attr("activa-idCamion");
  var idChofer = $(this).attr("activa-idChofer");

  $("#idActCamion").val(idCamion);
  $("#idActChofer").val(idChofer);

  $("#ModalR_Chofer").modal("show");
});

$(document).on("click", ".btn_modi_persona", function () {
  var id_persona_chofer = $(this).attr("id_persona_chofer");
  var id_camion = $(this).attr("id_camion");
  var val_apellidosNombres = $(this).attr("val_apellidosNombres");
  var val_dni = $(this).attr("val_dni");
  var val_fechaNacimiento = $(this).attr("val_fechaNacimiento");
  var val_Nacionalidad = $(this).attr("val_Nacionalidad");
  var val_obs = $(this).attr("val_obs");
  var fecVencimientoLicencia = $(this).attr("fecVencimientoLicencia");

  $("#id_persona_chofer").val(id_persona_chofer);
  $("#id_camion").val(id_camion);
  $("#val_apellidosNombres").val(val_apellidosNombres);
  $("#val_dni").val(val_dni);
  $("#val_fechaNacimiento").val(val_fechaNacimiento);
  $("#val_Nacionalidad").val(val_Nacionalidad);
  $("#val_obs").val(val_obs);
  $("#val_fecVencimientoLicencia").val(fecVencimientoLicencia);



  $("#ModalM_persona").modal("show");
});

$(document).on("click", ".btn_modi_contacto", function () {
  var val_idCamion = $(this).attr("val_idCamion");
  var val_idContacto = $(this).attr("val_idContacto");
  var val_celular1 = $(this).attr("val_celular1");
  var val_celular2 = $(this).attr("val_celular2");
  var val_mail = $(this).attr("val_mail");

  $("#val_idCamion").val(val_idCamion);
  $("#val_idContacto").val(val_idContacto);
  $("#val_celular1").val(val_celular1);
  $("#val_celular2").val(val_celular2);
  $("#val_mail").val(val_mail);

  $("#ModalM_contacto").modal("show");
});

$(document).on("click", ".btn_modi_domicilio", function () {
  var val_idCamion_dom = $(this).attr("val_idCamion_dom");
  var val_idDomicilio = $(this).attr("val_idDomicilio");
  var val_idBarrio = $(this).attr("val_idBarrio_dom");
  var val_idCalle = $(this).attr("val_idCalle_dom");
  var val_nro = $(this).attr("val_nro");
  var val_mz = $(this).attr("val_mz");
  var val_sector = $(this).attr("val_sector");
  var val_parcela = $(this).attr("val_parcela");
  var val_casa = $(this).attr("val_casa");
  var val_torre = $(this).attr("val_torre");
  var val_piso = $(this).attr("val_piso");
  var val_depto = $(this).attr("val_depto");

  // alert(val_nro);
  // alert(val_idCalle);

  $("#val_idCamion_dom").val(val_idCamion_dom);
  $("#val_idDomicilio").val(val_idDomicilio);
  $("#val_idBarrio").val(val_idBarrio);
  $("#val_idCalle").val(val_idCalle);
  $("#val_nro_dom").val(val_nro);
  $("#val_mz").val(val_mz);
  $("#val_sector").val(val_sector);
  $("#val_parcela").val(val_parcela);
  $("#val_casa").val(val_casa);
  $("#val_torre").val(val_torre);
  $("#val_piso").val(val_piso);
  $("#val_depto").val(val_depto);

  $("#ModalM_domicilio").modal("show");
});

$(document).on("click", ".btn_modi_camion", function () {
  var data_interno = $(this).attr("data-interno");
  var data_idCamion = $(this).attr("data-idCamion");
  var data_dominio = $(this).attr("data-dominio");
  var data_modelo = $(this).attr("data-modelo");
  var data_marca = $(this).attr("data-marca");
  var data_chasis = $(this).attr("data-chasis");
  var data_tipo_servicio = $(this).attr("data-tipo_servicio");
  var data_seguro = $(this).attr("data-seguro");
  var data_vencimiento_seguro = $(this).attr("data-vencimiento_seguro");
  var data_descripcion_cam = $(this).attr("data-descripcion_cam");

  $("#modi_idCamion").val(data_idCamion);
  $("#modi_dominio").val(data_dominio);
  $("#modi_modelo").val(data_modelo);
  $("#modi_marca").val(data_marca);
  $("#modi_chasis").val(data_chasis);
  $("#modi_tipo_servicio").val(data_tipo_servicio);
  $("#modi_interno").val(data_interno);
  $("#modi_seguro").val(data_seguro);
  $("#modi_vencimiento_seguro").val(data_vencimiento_seguro);
  $("#modi_descripcion_cam").val(data_descripcion_cam);

  $("#ModalM_camion").modal("show");
});

// Agregar un evento "click" al botón
function ValidaInterno() {
  alert("valida interno");
  // consultarBtn.addEventListener("click", function () {
  // Obtener el valor del input
  var valor = document.getElementById("interno").value;

  // Realizar la petición AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "valida_interno.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Convertir la respuesta a un objeto JSON
      var respuesta = JSON.parse(xhr.responseText);

      // Verificar si el valor existe
      if (respuesta.existe) {
        // Mostrar un mensaje de error en el input usando el estilo de validación de Bootstrap
        document.getElementById("valida-interno-err").style.display = "block";
        // document.getElementById("valida-interno-err").classList.remove("is-valid");
      } else {
        // Si el valor no existe, remover el mensaje de error y agregar la clase "is-valid"
        document.getElementById("valida-interno-err").style.display = "none";
        // document.getElementById("valida-interno-err").classList.add("is-valid");
      }
    }
  };
  // var data = "valor=" + valor;
  // xhr.send(data);
  // });
}

function ValidaVencimientoSeguro() {
  var vencimientoseguro = document.getElementById("modi_vencimiento_seguro").value;
  // Obtener la fecha actual
  var fechaActual = new Date(); //mostrar

  // Convertir la fecha proporcionada a un objeto Date
  var fechaIngresada = new Date(vencimientoseguro); //mostrar
  // alert(fechaIngresada);

  // Verificar si la fecha ingresada es igual o menor que la fecha actual

  //mostrar
  if (fechaIngresada <= fechaActual) {
    formCompleto = false; // La fecha ingresada es igual o menor que la fecha actual
    alert("La licencia fecha de vencimiento de la licencia ingresada ya se encuentra  04");

  } else {
    formCompleto = true; // La fecha ingresada es mayor que la fecha actual
  }

  if (formCompleto === false) {
    event.preventDefault();
  }
}


function validarEdad(fechaNacimiento) {
  var fechaNac = new Date(fechaNacimiento);
  var edadMinima = 18;
  var anioActual = new Date().getFullYear();
  var anioNac = fechaNac.getFullYear();
  var mesNac = fechaNac.getMonth() + 1;
  var diaNac = fechaNac.getDate();
  var anios = anioActual - anioNac;

  if (new Date(anioActual, mesNac - 1, diaNac) > new Date(anioActual, new Date().getMonth(), new Date().getDate())) {
    anios--;
  }

  if (anios >= edadMinima) {
    return true; // La edad es mayor o igual a 18 años
  } else {
    return false; // La edad es menor que 18 años
  }
}

function ValidaFormularioModiPersona() {
  var fechaNacimiento = document.getElementById("val_fechaNacimiento").value;
  var dni = document.getElementById("val_dni").value;
  // var formCompleto = true;

  // Obtener la fecha actual
  // var fechaActual = new Date();

  // Convertir la fecha proporcionada a un objeto Date
  // var fechaIngresada = new Date(fechaNacimiento);

  // Verificar si la fecha ingresada es igual o menor que la fecha actual

  if (!validarEdad(fechaNacimiento)) {
    formCompleto = false; // La edad es menor que 18 años
    // alert("La persona debe tener al menos 18 años 02");

  } else {
    formCompleto = true;

    if (dni.length < 7 || dni.length > 8) {
      formCompleto = false; // El dni no cumple con el mínimo correspondiente
      alert("El dni no cumple con el mínimo correspondiente o supera el maximo de caracteres");
    } else {
      formCompleto = true;
    }

  }


  // alert(formCompleto)

  if (formCompleto === false) {
    event.preventDefault();
  }
}

function limitarCaracteres(inputId, cantidadCaracteres) {
  var input = document.getElementById(inputId);
  input.oninput = function () {
    var valor = input.value;
    // Eliminar caracteres no numéricos y la letra "e"
    valor = valor.replace(/\D/g, '').replace(/e/gi, '');
    // Limitar la cantidad de caracteres
    if (valor.length > cantidadCaracteres) {
      valor = valor.slice(0, cantidadCaracteres);
    }
    input.value = valor;
  };
}

//EVITA EL ENVIO DE FORMULARIO AL PRESIONAR ENTER
document.addEventListener('DOMContentLoaded', function () {
  var formFiltroCamion = document.getElementById('formFiltroCamion');
  if (formFiltroCamion) {
    formFiltroCamion.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        BuscarCamion(); // Llamar a la función BuscarCamion al presionar Enter
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var altaChoferes = document.getElementById('altaChoferes');
  if (altaChoferes) {
    altaChoferes.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Agregar lógica adicional si es necesaria
      }
    });
  }

  var bajaCamion = document.getElementById('BajaCamion');
  if (bajaCamion) {
    bajaCamion.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Agregar lógica adicional si es necesaria
      }
    });
  }

  var bajaChofer = document.getElementById('BajaChofer');
  if (bajaChofer) {
    bajaChofer.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Agregar lógica adicional si es necesaria
      }
    });
  }

  var activarChofer = document.getElementById('ActivarChofer');
  if (activarChofer) {
    activarChofer.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Agregar lógica adicional si es necesaria
      }
    });
  }

  var modificaPersona = document.getElementById('modificaPersona');
  if (modificaPersona) {
    modificaPersona.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Agregar lógica adicional si es necesaria
      }
    });
  }

  var modificaContacto = document.getElementById('modificaContacto');
  if (modificaContacto) {
    modificaContacto.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Agregar lógica adicional si es necesaria
      }
    });
  }

  var modificaDomicilio = document.getElementById('modificaDomicilio');
  if (modificaDomicilio) {
    modificaDomicilio.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Agregar lógica adicional si es necesaria
      }
    });
  }

  var modificaCamion = document.getElementById('modificaCamion');
  if (modificaCamion) {
    modificaCamion.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Agregar lógica adicional si es necesaria
      }
    });
  }
});

// document.getElementById('formFiltroCamion').addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//   }
// });

// document.getElementById('altaChoferes').addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//   }
// });

// document.getElementById('BajaCamion').addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//   }
// });

// document.getElementById('BajaChofer').addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//   }
// });

// document.getElementById('ActivarChofer').addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//   }
// });

// document.getElementById('modificaPersona').addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//   }
// });


// document.getElementById('modificaContacto').addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//   }
// });

// document.getElementById('modificaDomicilio').addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//   }
// });

// document.getElementById('modificaCamion').addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//   }
// });






// function ValidaFormularioModiPersona() {
//   var fechaNacimiento = document.getElementById("val_fechaNacimiento").value;
//   var dni = document.getElementById("val_dni").value;
//   // Obtener la fecha actual
//   var fechaActual = new Date(); //mostrar

//   // Convertir la fecha proporcionada a un objeto Date
//   var fechaIngresada = new Date(fechaNacimiento); //mostrar
//   // alert(fechaIngresada);

//   // Verificar si la fecha ingresada es igual o menor que la fecha actual


//   //mostrar
//   if (fechaIngresada <= fechaActual) {
//     formCompleto = false; // La fecha ingresada es igual o menor que la fecha actual
//     alert("el conductor debe cumplir con la mayoria de edad");

//   } else {
//     formCompleto = true; // La fecha ingresada es mayor que la fecha actual

//     if (dni.length >= 7 || dni.length <= 8) {
//       formCompleto = true; // La fecha ingresada es mayor que la fecha actual
//     } else {
//       formCompleto = false; // La fecha ingresada es igual o menor que la fecha actual
//       alert("El dni no cumple con el minimo correspondiente");
//     }
//   }

//   alert(formCompleto)


//   if (formCompleto === false) {
//     event.preventDefault();
//   }
// }
