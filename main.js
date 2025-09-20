import { saludo } from './saludo.js';
import { despedida } from './despedida.js';
import mensaje from './mensaje.js';
import { sumar, multiplicar } from './matematicas.js';
import { capitalizar, contarCaracteres } from './cadenas.js';

saludo();
despedida();
document.writeln(mensaje);

document.writeln("Suma 5 + 3 =", sumar(5, 3));
document.writeln("Multiplicación 4 × 6 =", multiplicar(4, 6));

const texto = "hola mundo";
document.writeln("Capitalizado:", capitalizar(texto));
document.writeln("Número de caracteres:", contarCaracteres(texto));