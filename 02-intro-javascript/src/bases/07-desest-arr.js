const personajes = ["Rachael", "Joey", "Ross", "Monica"];

const [, , p1] = personajes;
console.log(p1);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// TAREA
// 1. el primer valor del arreglo se llamara nombre
// 3. el segundo se llamara setNombre

const hola = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = hola("Rachael");
console.log(nombre);
setNombre();

// DUDAS!!!
