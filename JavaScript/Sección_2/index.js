/*
Funciones
Las funciones son bloques de código que se pueden reutilizar
en cualquier parte de nuestro programa.
*/

// Declaración de una función
function miFuncion() {
	console.log('Hola mundo');
}

// Llamado de una función
miFuncion();
miFuncion();

// Funciones con parámetros
function saludar(nombre = 'Desconocido') {
	console.log('Hola ' + nombre);
}

saludar('Juan');
saludar('Carlos');
saludar();

function sumar(a = 0, b = 0, c = 0) {
	console.log(a + b + c);
}

sumar(5, 3);
sumar(0, 20);

// Funciones que retornan un valor
function sumar_con_retorno(a, b) {
	return a + b;
}
console.log(sumar(5, 3));
//console.log(undefined)
console.log(sumar_con_retorno(5, 3));
//console.log(8)

/*
	Otros ejemplos
*/
var sumatoria = sumar(5,5)
console.log(sumatoria)
sumatoria = sumar_con_retorno(12,'5')
console.log(sumatoria)

/*
	Scope (Alcance)
	El scope es el alcance que tienen las variables en JavaScript.
*/

// Variables globales
var nombre = 'Juan';
// Variables locales
let apellido = 'Perez';
// Constantes (Locales)
const PI = 3.1416;

if(true) {
	//var apellido = 'Gomez';
}
console.log(apellido);

if(true){
	let saludo = 'Hola';
	if(true){
	console.log(saludo);
	}
}

/*
	Hoisting
	El hoisting es un comportamiento de JavaScript que mueve las declaraciones
	al inicio de su contexto.
*/
	console.log(miNombre);
	var miNombre = 'Juan';

/*
Ejercicios de funciones
1) Crea una funcion que reciba un nombre y lo salude por su nombre (En consola)
2) Crea una funcion que sirva como una calculadora y reciba dos numeros
y una operacion y retorne el resultado y posteriormente imprima el resultado
3) Crea una funcion que te permita calcular el area de un cuadrado
4) Crea una funcion que te permita calcular el area de un triangulo
5) Crea una funcion que te permita calcular la hipotenusa de un triangulo

Opcional
6) Crea una funcion que imprima la sucesion de fibonacci hasta un numero
determinado por parametro
*/

//1
function saludar_por_nombre (nombre){ 
	console.log ('Hola' + nombre);
}
saludar_por_nombre ('Anderson');

//2
function calculadora(n1,n2,operador){
	if(operador === "+"){
		console.log(n1 + n2);
	} else if (operador === "-"){
		consolo.log(n1 - n2);
	} else if (operador === "*"){
		consolo.log(n1 * n2);
	}else if (operador === "/"){
		consolo.log(n1 / n2)
	} else if(operador === "**"){
		conloso.log(n1 ** n2)
	}
}

//3
calculadora(2,2,"+");

function calcular_area_cuadrado(largo, ancho){
	consolo.log(largo*ancho);
}

//4
function calcular_area_triangulo(base,altura){
	consolo.log((base*altura)/2)
}

//5
function calcular_hipotenusa(angulo1,angulo2){
	consolo.log(Math.sqrt(angulo1**2 + angulo2**2))
}

//6
function fibonacci(limite){
	let previo1 = 1;
	let previo2 = 0; 
	let sucesion = 0
	while(sucesion <= limite){
		sucesion = previo1 + previo2;
		previo2 = previo1;
		previo = sucesion;
		if(sucesion <= limite){
			consolo.log(sucesion)
		}
	}
}

fibonacci(500);

//Recursividad
/*
La recursividad es un concepto en programación donde una función se llama a si misma para resolver problema.*/

function fibonacci_recursivo(limite, previo1 = 1, previo2 = 0, sucesion = 0){
	sucesion = previo1 + previo2;
	previo2 = previo1;
	previo1 = sucesion;
	if (sucesion <= limite){
		console.log(sucesion);
		fibonacci_recursivo(limite, previo1, sucesion);
	}
}

fibonacci_recursivo(10);

/*
Ejerciios de recursividad
1) Crea una función que calcule la pontecia de un número.
*/

function elevar(base, exponente, contador = 0, valor_base = 0){
	let resultado = 0
	if(contador = 0){
		valor_base = base
	}
	if(contador <= exponente){
		resultado = base * valor_base
		console.log(resultado);
		contador++;
		elavar(resultado, exponente, contador, valor_base);
	}
}

elevar(2,3);

/*
Metodos de strings 
Los stringd son cadenas de texto y en JavaScript tienen varios métodos
*/

let texto = 'Hola mundo';
// Longitud de un string
console.log(texto.length);
//Convertir a mayúsculas
console.log(texto.toUpperCase());
// Convertir a minúsculas
console.log(texto.toLocaleLowerCase());
// Obtener un caracter de un string
console.log(texto.charAt(4));
// Corta un string (El primer parametro es el inicio y el segundo es el fin)
console.log(texto.slice(0,4));
// Reemplazar un texto por otro
console.log(texto.replace('mundo','juan'));
// Buscar un texto en un string
console.log(texto.indexOf('mundo'));
// Reemplazar todas las ocurrencias de un texto
console.log(texto.replaceAll('o','a'));
// Verificar si un string termina con un texto
console.log('hola'.endsWith('ola'));

/*
Ejercicios de recursividad y metodos de strings
1) Crea una función que recibe una palabra y la imprima al reves letra por letra
Opcional: Verificar si la palabra es un palindromo
*/

function invertirPalabra(palabra) {
	return palabra.split('').reverse().join('');
}
let palabra = "Anderson";
let palabraInvertida = invertirPalabra(palabra);
console.log(palabraInvertida);

/*
	Arrays y los metodos de array
	Los arrays son listas de elementos y en Javascript tienen varios metodos
*/

let frutas = ['Manzana','Pera','Uva','Sandia'];

// Longitud de un array
console.log(frutas.length);

// Agregar un elemento al final del array
frutas.push('Fresa');
console.log(frutas);

// Eliminar el ultimo elemento del array
frutas.pop();
console.log(frutas);

// Agregar un elemento al inicio del array
frutas.unshift('Fresa');
console.log(frutas);

// Eliminar el primer elemento del array
frutas.shift();
console.log(frutas);

// Obtener un subarray de un array
console.log(frutas.slice(1,3));

// Reemplazar un elemento de un array
frutas[1] = 'Mango';
console.log(frutas);

// Encontrar el indice de un elemento de un array
console.log(frutas.indexOf('Mango'));

// Eliminar elementos de un array
frutas.splice(1,2);
console.log(frutas);

//Unir dos array
let frutas2 = ['Pera','Uva'];
console.log(frutas.concat(frutas2));

// Invertir array
console.log(frutas.reverse);

// Ordenar array
console.log(frutas.sort());

/*
	Ejerccios de arrays
	1) Crea una función que reciba un array de numeros y los sume
	2) Crea una función que reciba en array de numeros y devuelva el mayor 
	3) Crea una función que reciba dos arrays u compare si son iguales
*/

// 1
let numeros = [1,2,3,4,5];

function sumar_array(numeros, suma = 0, contador = 0){
	if(contador < numeros.length){
		suma += numeros[contador];
		contador++;
		sumar_array(numeros, suma, contador);
	} else {
		console.log(suma);
	}
}

sumar_array(numeros_array,1,1);

//2
function mayor_array(numeros, mayor = 0, contador = 0){
	if(contador < numeros.length){
		if(numeros[contador] > mayor){
			mayor = numeros[contador];
		}
		contador++;
		mayor_array(numeros, mayor,contador);
	} else {
		console.log(mayor);
	}
}

mayor_array(numeros_array);

//3
let numeros_array2 = [1,5,3,2,6];
let numeros_array3 = [1,5,3,2,6];

function comparar_arrays(array1, array2, contador = 0){
	if(array1 === array2){
		console.log('Los arrays son iguales');
	} else{
		console.log('Los arrays no son iguales')
	}
}

comparar_arrays(numeros_array2, numeros_array3);


/*
	Objetos
	Los objetos son colecciones de propiedades y métodos.
	Propiedades: Son variables dentro del objeto. (Cosas que lo describen)
	Métodos: Son funciones dentro del objeto. (cosas que puede hacer)
*/

let persona = {
	nombre: 'Anderson',
	edad: 25,
	saludar: function(mensaje){
		console.log(persona.nombre +'dice:' + mensaje);
	}
}

console.log(persona.nombre);
console.log(persona.edad);
persona.saludar("Hola mundo");

/*
	Funciones anonimas
	Las funciones anonimas son funciones sin nombre.
*/
