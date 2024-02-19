const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#apellidos");
const correo = document.querySelector("#correo");
const telefono = document.querySelector("#telefono");
const mensaje = document.querySelector("#correo");
const enviar = document.querySelector("#mensaje");
const errores = document.querySelector("#errores");
let mensajeErrores = [];

const validar = (evento) => {
evento.preventDefault();
mensajeErrores = [];

if (nombre.value.trim().length === 0) {
  mensajeErrores.push("El nombre es un campo obligatorio");
}

if (!/^[a-zA-Z0-9]*$/.test(nombre.value.trim())) {
  mensajeErrores.push("El nombre no tiene caracteres válidos");
}

if (!/^[a-zA-Z0-9]*$/.test(apellidos.value.trim())) {
  mensajeErrores.push("El nombre no tiene caracteres válidos");
}

if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim())){
    mensajeErrores.push('Introduce una dirección de correo electrónico válida')
}

if (!/^[0-9]{9}$/.test(telefono.value.trim())) {
  mensajeErrores.push("Introduce un teléfono válido");
}

if (mensajeErrores.length === 0 && confirm("¿Desea enviar el formulario?")){
  formulario.submit();
} else if (mensajeErrores.length > 0) {
  errores.textContent = "";
  console.log(mensajeErrores);
  mensajeErrores.forEach(function (mensaje) {
    const miLi = document.createElement("li");
    miLi.textContent = mensaje;
    errores.appendChild(miLi);
  });
}
};

document.getElementById("enviar").addEventListener("click", validar);

function agregarEventoLimpieza(idElemento, idError) {
let elemento = document.getElementById(idElemento);
let spanError = document.getElementById(idError);

elemento.addEventListener("change", function () {
  spanError.innerText = "";
  spanError.classList.remove("error");
  elemento.classList.remove("error");
  elemento.classList.remove("borderError");
});
}

agregarEventoLimpieza("nombre", "error1");
agregarEventoLimpieza("apellidos", "error2");
agregarEventoLimpieza("telefono", "error3");
agregarEventoLimpieza("correo", "error4");