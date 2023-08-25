const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "new york",
    zip: 8968576,
    lat: 14.323,
    lng: 34.45,
  },
};

// const persona2 = persona;
// persona2.nombre = "Peter";
// no cambia el nombre de la persona 2 simplemente imprime por orden del código

const persona2 = { ...persona };
//con los 3 puntos(spread), se extraen las propiedades de persona y se copian en persona 2
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
