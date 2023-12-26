
const inputTarea = document.getElementById("tarea");
const botonAgregar = document.getElementById("agregar-tarea");
const botonBorrarTodo = document.getElementById("borrar-todo");
const listaTareas = document.getElementById("lista");


botonAgregar.addEventListener("click", agregarTarea);
inputTarea.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarTarea();
    }
});
botonBorrarTodo.addEventListener("click", borrarTodasLasTareas);


function agregarTarea() {
    const tareaTexto = inputTarea.value.trim();

    if (tareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.innerHTML = `
            <span>${tareaTexto}</span>
            <span class="eliminar" onclick="eliminarTarea(this)">Eliminar</span>
        `;

        listaTareas.appendChild(nuevaTarea);

        inputTarea.value = "";

        guardarTareasEnLocalStorage();
    }
}

function eliminarTarea(elemento) {
    const tareaEliminar = elemento.parentNode;

    listaTareas.removeChild(tareaEliminar);

    guardarTareasEnLocalStorage();
}

function borrarTodasLasTareas() {
    while (listaTareas.firstChild) {
        listaTareas.removeChild(listaTareas.firstChild);
    }

    guardarTareasEnLocalStorage();
}

function guardarTareasEnLocalStorage() {
    const tareas = Array.from(listaTareas.children).map(tarea => tarea.querySelector("span").textContent);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function cargarTareasDesdeLocalStorage() {
    const tareasGuardadas = localStorage.getItem("tareas");

    if (tareasGuardadas) {
        const tareas = JSON.parse(tareasGuardadas);
        tareas.forEach(tareaTexto => {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.innerHTML = `
                <span>${tareaTexto}</span>
                <span class="eliminar" onclick="eliminarTarea(this)">Eliminar</span>
            `;
            listaTareas.appendChild(nuevaTarea);
        });
    }
}

cargarTareasDesdeLocalStorage();