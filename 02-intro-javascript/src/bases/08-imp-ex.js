import heroes, { owners } from "../data/heroes";
//
export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => {
  return heroes.filter((heroes) => heroes.owner === owner);
};

// console.log(getHeroesByOwner("DC"));
