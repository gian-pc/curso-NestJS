export let name = 'Gian';  // Ahora es una variable mutable
export const age = 24;      // Constante, no puede cambiar
export const isActive = true; 

name = 'gian@pc'; // ✅ Ahora esto es válido

export const templateString = `Esto es un string
multilinea
que puede tener
"comillas dobles"
y 'comillas simples'
inyectar valores ${name}
expresiones ${age + 1}
numeros: ${5 + 5}
booleanos: ${isActive}
`;

console.log(templateString); 