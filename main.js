import { saludo } from './saludo.js';
import { despedida } from './despedida.js';
import mensaje from './mensaje.js';
import { sumar, multiplicar } from './matematicas.js';
import { capitalizar, contarCaracteres } from './cadenas.js';

saludo();
despedida();
console.log(mensaje);

console.log("Suma 5 + 3 =", sumar(5, 3));
console.log("Multiplicación 4 × 6 =", multiplicar(4, 6));

const texto = "hola mundo";
console.log("Capitalizado:", capitalizar(texto));
console.log("Número de caracteres:", contarCaracteres(texto));