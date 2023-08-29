document.getElementById("btn").onclick = function () {
    var contAguia = 0;
    var contTubarao = 0;
    var contLobo = 0;
    var contGato = 0;
    var radios = document.getElementsByClassName("pergunta")

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value === "aguia") {
                contAguia++;
            } else if (radios[i].value === "tubarao") {
                contTubarao++;
            } else if (radios[i].value === "lobo") {
                contLobo++;
            } else {
                contGato++;
            }
        }
    }

    const mostrarResultado = Math.max(contAguia, contGato, contLobo, contTubarao);
    switch (mostrarResultado) {
        case contAguia:
            window.open(`../pages/resultsPages/aguia.html?porc=${contAguia*4}`);
            break;
        case contLobo:
            window.open(`../pages/resultsPages/lobo.html?porc=${contLobo*4}`);
            break;
        case contGato:
            window.open(`../pages/resultsPages/gato.html?porc=${contGato*4}`);
            break;
        case contTubarao:
            window.open(`../pages/resultsPages/tubarao.html?porc=${contTubarao*4}`);
            break;
    }
}