export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

pokemonIds.push(+'11'); // ✅ Una forma rápida de conversion de tipos

console.log(pokemonIds); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
}

export const charmander:Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 4,
}

console.log(bulbasaur);
console.log(charmander);

export const pokemons:Pokemon[] = [];
// pokemons.push(1, 'string', bulbasaur); // En js no debería haber problema, pero en ts si

pokemons.push(bulbasaur, charmander);
console.log(pokemons);
