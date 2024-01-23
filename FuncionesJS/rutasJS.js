$(document).ready(function () {
    var height = $(window).height();
    var width = $(window).width();

    if (width > 1000) {
        var altAjuste = height - 98;
        var altNavV = height - 113;
        $('#Ajuste').height(altAjuste);
        $('#navV').height(altNavV);
    }
});


$(document).ready(function () {
    function ajustarAlturas() {
        var height = $(window).height();
        var width = $(window).width();

        if (width > 1000) {
            var altAjuste = height - 98;
            var altNavV = height - 98;
            $('#Ajuste').height(altAjuste);
            $('#navV').height(altNavV);
        }
    }

    // Ejecuta la función al cargar la página
    ajustarAlturas();

    // Ejecuta la función cuando cambia el tamaño de la ventana
    $(window).on('resize', ajustarAlturas);
});