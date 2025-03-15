import axios from "axios";

// Forma corta de declarar una clase
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string
    ) {}

    get imageUrl():string {
        return `https://pokemon.com/${this.id}.png`;
    }

    // métodos
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}!`);
    }


    // Métodos asincronos
    async getMoves(){
        // const moves = 10;
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        return data.moves;
    }

}

export const charmander = new Pokemon(1, 'Charmander');

// charmander.id  = 10; // ❌ No se puede reasignar el valor de una propiedad de solo lectura
// charmander.name = 'Mew'; // ✅ Se puede reasignar el valor de una propiedad publica

// console.log(charmander);
// charmander.scream();
// charmander.speak();

// console.log(charmander.getMoves());
charmander.getMoves();
