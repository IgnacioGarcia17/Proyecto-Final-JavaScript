
let tipo = prompt("Ingresa el tipo de prenda");
let estilo = prompt("Ingresa el estilo de la prenda");
let minimo = Number(prompt("Ingresar Precio Minimo"));
let maximo = Number(prompt("Ingresar Precio Maximo"));
let talle = prompt("Ingresar el talle");
let color = prompt("Ingresar Color de la prenda");
let material = prompt("Ingresar material de la prenda");

const datosBusqueda = {
  tipo: tipo,
  estilo: estilo,
  minimo: minimo,
  maximo: maximo,
  talle: talle,
  color: color,
  material: material,
};

function mostrarPrendas(prendas) {
  prendas.forEach((prenda) => {
    let respuesta = document.querySelector("ul");
    respuesta.innerHTML += `
          <li>${prenda.tipo}  -  ${prenda.estilo}  -  Talle ${prenda.talle}  -  Material ${prenda.material}  -  Precio $${prenda.precio}  -  Color ${prenda.color}</li>
    `;
    console.log(`
          ${prenda.tipo}  -  ${prenda.estilo}  -  Talle ${prenda.talle}  -  Material ${prenda.material}  -  Precio $${prenda.precio}  -  Color ${prenda.color}
    `);
  });
}

function filtrarTipo(prenda) {
  if (datosBusqueda.tipo) {
    return prenda.tipo === datosBusqueda.tipo;
  } else {
    return prenda;
  }
}

function filtrarEstilo(prenda) {
  if (datosBusqueda.estilo) {
    return prenda.estilo === datosBusqueda.estilo;
  } else {
    return prenda;
  }
}

function filtrarMinimo(prenda) {
  if (datosBusqueda.minimo) {
    return prenda.precio >= datosBusqueda.minimo;
  } else {
    return prenda;
  }
}

function filtrarMaximo(prenda) {
  if (datosBusqueda.maximo) {
    return prenda.precio <= datosBusqueda.maximo;
  } else {
    return prenda;
  }
}

function filtrarTalle(prenda) {
  if (datosBusqueda.talle) {
    return prenda.talle === datosBusqueda.talle;
  } else {
    return prenda;
  }
}

function filtrarMaterial(prenda) {
  if (datosBusqueda.material) {
    return prenda.material === datosBusqueda.material;
  } else {
    return prenda;
  }
}

function filtrarColor(prenda) {
  if (datosBusqueda.color) {
    return prenda.color === datosBusqueda.color;
  } else {
    return prenda;
  }
}

function filtrarPrendas() {
  const resultado = prendas
    .filter(filtrarTipo)
    .filter(filtrarEstilo)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarTalle)
    .filter(filtrarMaterial)
    .filter(filtrarColor);

  if (resultado.length > 0) {
    mostrarPrendas(resultado);
  } else {
    alert("No se encontraron prendas con esas caracteristicas");
  }
}

filtrarPrendas();
