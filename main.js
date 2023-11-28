
let puntosPepe = 0;
let puntosJavier = 0;

let tiro = 0;

const MINIMO_PUNTOS = 0;
const MAXIMO_PUNTOS = 100;

while (puntosPepe < 100 && puntosJavier < 100) {
    tiro += 1;
    let tiroPepe = Math.ceil(Math.random() * (MAXIMO_PUNTOS - MINIMO_PUNTOS) + MINIMO_PUNTOS);
    let tiroJavier = Math.ceil(Math.random() * (MAXIMO_PUNTOS - MINIMO_PUNTOS) + MINIMO_PUNTOS);

    console.log("--------------Tiro " + tiro + "--------------");
    console.log("Pepe suma: " + tiroPepe + " puntos");
    console.log("Javier suma: " + tiroJavier + " puntos");

    puntosPepe += tiroPepe;
    puntosJavier += tiroJavier;

    console.log("Puntos de Pepe: " + puntosPepe);
    console.log("Puntos de Javier: " + puntosJavier);
}

console.log("--------------GANADOR-------------");

if (puntosPepe >= puntosJavier) {
    console.log("Gano Pepe");
} else {
    console.log("Gano Javier");
}
