// FUNCIÓN TRADICIONAL
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

// FUNCIÓN NUEVA
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

// lo mismo que la de arriba solo si tiene 1 return
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2("Paola"));
console.log(saludar3("Gustavo"));
console.log(saludar4());

const getUser = () => ({
  uid: "AB123",
  username: "holatodos",
});
const user = getUser();
console.log(getUser());

// TAREA
// 1. transformar una funcion de flecha
// 2. Tiene que retornar un objeto implciito
// 3. Pruebas

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
