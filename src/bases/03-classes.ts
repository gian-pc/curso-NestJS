import { cha } from './03-classes';

// Forma corta de declarar una clase
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string
    ) {}

    get imageUrl() {
        return `https://pokemon.com/${this.id}.png`;
    }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}!`);
    }
}

export const charmander = new Pokemon(1, 'Charmander');

// charmander.id  = 10; // ❌ No se puede reasignar el valor de una propiedad de solo lectura
// charmander.name = 'Mew'; // ✅ Se puede reasignar el valor de una propiedad publica

console.log(charmander);
charmander.scream();
charmander.speak();