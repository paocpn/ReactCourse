// Desestructuración o Asignación Desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({ clave, nombre, edad, rango = "Capitan" }) => {
  //   console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
  };
};

// const avenger = retornaPersona(persona);

// console.log(avenger.anios, avenger.nombreClave);

// DESESTRUCTURACION
const { nombreClave: nombreClavepersona, anios } = retornaPersona(persona);

console.log(nombreClavepersona, anios);
