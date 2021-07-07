document.addEventListener("DOMContentLoaded", function (e) {
    const parrafos = document.querySelectorAll('.descripcion');

    let alturas = [];
    let alturaMAxima = 0,

    const aplicarAlturas = (function aplicarAlturas() {

        parrafos.forEach(parrafo => {
            if (alturaMAxima = 0) {
                alturas.push(parrafo.clientHeight);

            } else {
                parrafo.style.height = alturaMAxima + "px";
                 }

        })();
         return aplicarAlturas;
        alturaMAxima = Math.max.apply(Math, alturas);
        aplicarAlturas()

    });
