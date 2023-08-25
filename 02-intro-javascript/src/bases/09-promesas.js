import { getHeroeById } from "./bases/08-imp-ex";

// // EN CASO DE QUE SI FUNCIONE
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//   }, 2000);
// });

// promesa.then((heroe) => {
//   console.log("heroe", heroe);
// });

// EN CASO DE REJECT
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     reject("no se pudo encontrar el heroe");
//   }, 2000);
// });

// promesa.then((heroe) => {
//     console.log("heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("no se pudo encontrar el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(100)
  .then((heroe) => console.log("heroe", heroe))
  .catch((err) => console.warn(err));
