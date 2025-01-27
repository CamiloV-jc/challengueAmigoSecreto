/// Obtener referencias al DOM 

//Guarda el nombre ingresado por el usuario
const inputNombre = document.getElementById('amigo');
// almacena y muestra los nombre ingresados
const listaNombres = document.getElementById('listaAmigos');
//muestra el resultado
const resultado = document.getElementById('resultado');

// // Array para almacenar los nombres
let nombres = [];

// Función para adicionar nombres a la lista y validar que no tenga carasteres
function agregarAmigo() {
  const nombre = inputNombre.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === '') {
    alert('Por favor, Ingresa un nombre.');
    return;
  }

  // Agregar el nombre al array y mostrarlo en la lista
  nombres.push(nombre);
  const li = document.createElement('li');
  li.textContent = nombre;
  listaNombres.appendChild(li);

  // Limpiar el campo de texto
  inputNombre.value = '';
}

// Función para realizar el sorteo
function sortearAmigo() {
  if (nombres.length === 0) {
    alert('La lista está vacía. Agrega al menos un nombre antes de realizar el sorteo.');
    return;
  }

  // Seleccionar un nombre aleatorio
  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const amigoSecreto = nombres[indiceAleatorio];

  // Mostrar el resultado en pantalla
  resultado.innerHTML = `<li> El ganador del juego es: <strong>${amigoSecreto}</strong></li>`;
}
