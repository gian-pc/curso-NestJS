import { name } from "./01-types";

export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

pokemonIds.push(+'11'); // ✅ Una forma rápida de conversion de tipos

console.log(pokemonIds); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export const pokemon = {
    id: 1,
    name: 'Bulbasaur',
}

console.log(pokemon); // { id: 1, name: 'Bulbasaur' }
