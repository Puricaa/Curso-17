console.log('Hola desde Index.js');

// Comentario de una sola linea

/*
    comentario de 
    multiples lineas
*/


// Variables
/*
    Una variable es un espacio en memoria que se reserva para almacenar un valor
    y que puede ser modificado en cualquier momento.
*/

// Declarición de variables.
var nombre ='Anderson'; 
console.log(nombre);


//Tipos de datos.
/*
    Los tipos de datos son los diferentes formas en las en las que se pueden representar
    los valores en JavaScript.
*/
nombre = 'Mercedes'; //String
console.log(nombre);
var edad = 25; //Number
var sueldo = 2500.50; // Number
console.log(edad + sueldo); // 2525.50
var tieneTrabajo = true; // Boolean
var tieneDinero = false; // Boolean
console.log(tieneTrabajo, tieneDinero);
var puestoDeTrabajo; // Undefined
console.log(puestoDeTrabajo);
var nulo = null; // Null
console.log(nulo);

// Objeto
var persona = {
    nombre: 'Anderson',
    edad: 23,
    tieneTrabajo: true
};

console.log(persona, persona.nombre, persona.edad, persona.tieneTrabajo);

persona = {
    nombre: 'Anderson',
    edad: 23,
    tieneTrabajo: true,
    mascota: {
        nombre: 'Firulais',
        edad: 3,
        tipo: 'perro',
    }
};

// Accceder al nombre de la mascota
console.log(persona.mascota.nombre);

// Arreglos (Arrays)
var frutas = ['Manzana', 'Pera', 'Uva', 'Sandia'];
console.log(frutas);
console.log(frutas[0]); // Manzana

var compras = [
    ['Manzana', 2],
    ['Pera', 3],
    ['Uva', 1],
    ['Sandia', 1],
    [{nombre: 'Papaya', precio: 50}, 2]
];

console.log(compras[1][0]); // Pera
//console.log(compras[4][0].nombre); // Papaya
console.log(compras[4][0]['nombre']); // Papaya

/* Ejercicios de tipos de datos
    segun el siguiente objeto

    var compras = {
    frutas: [
    {
        nombre: 'Manzana',
        tipos: ['Roja', 'Verde'],
        cantidad: 2,
        precio: 5
    },
    {
        nombre: 'Pera',
        cantidad: 3,
        precio: 6
    },
    {
        nombre: 'Uva',
        tipos: ['Verde', 'Morada'],
        cantidad: 1,
        precio: 10
    },
    {
        nombre: 'Sandia',
        cantidad: 1,
        precio: 20
        tamaños: ['Grande', 'Mediana', 'Pequeña']
    }
    ],
    charcuteria: [
    {
        nombre: 'Jamón',
        cantidad: 1,
        precio: 100
    },
    {
        nombre: 'Salchichón',
        cantidad: 2,
        precio: 50
    }
    ]
}

imprimir en consola:
1. El nombre de la segunda fruta
2. El precio de la uva
3. El valor "Grande" de la sandia
4. El nombre del segundo elemento de charcuteria

opcional:
1. El precio total de las frutas
2. El precio total de la charcuteria
3. El precio total de la compra
*/

var compras = {
    frutas: [
    {
        nombre: 'Manzana',
        tipos: ['Roja', 'Verde'],
        cantidad: 2,
        precio: 5
    },
    {
        nombre: 'Pera',
        cantidad: 3,
        precio: 6
    },
    {
        nombre: 'Uva',
        tipos: ['Verde', 'Morada'],
        cantidad: 1,
        precio: 10
    },
    {
        nombre: 'Sandia',
        cantidad: 1,
        precio: 20,
        tamaños: ['Grande', 'Mediana', 'Pequeña']
    }
    ],
    charcuteria: [
    {
        nombre: 'Jamón',
        cantidad: 1,
        precio: 100
    },
    {
        nombre: 'Salchichón',
        cantidad: 2,
        precio: 50
    }
    ]
}

console.log(compras.frutas[1].nombre); // Pera
console.log(compras.frutas[2].precio); // 10
console.log(compras.frutas[3].tamaños[0]); // Grande
console.log(compras.charcuteria[1].nombre); // Salchichón 

// Opcional
console.log((compras.frutas[0].precio * compras.frutas[0].cantidad) + (compras.frutas[1].precio * compras.frutas[1].cantidad) + (compras.frutas[2].precio * compras.frutas[2].cantidad) + (compras.frutas[3].precio * compras.frutas[3].cantidad)); // 58
console.log((compras.charcuteria[0].cantidad * compras.charcuteria[0].precio) + (compras.charcuteria[1].cantidad * compras.charcuteria[1].precio)); // 200
console.log((compras.frutas[0].precio * compras.frutas[0].cantidad) + (compras.frutas[1].precio * compras.frutas[1].cantidad) + (compras.frutas[2].precio * compras.frutas[2].cantidad) + (compras.frutas[3].precio * compras.frutas[3].cantidad) + (compras.charcuteria[0].cantidad * compras.charcuteria[0].precio) + (compras.charcuteria[1].cantidad * compras.charcuteria[1].precio)); // 258

// Operadores comparativos
/*
    Los operadores comparativo son utilizados para comparar dos valores y 
    devolver un valor booleano.
*/

var condicional = 5 == '5'; // true
//Lista de operadores comparativos
// > Mayor que 
// < Menor que 
// >= Mayor o igual que 
// <= Menor o igual que 
// == Igual que 
// === Estrictamente igual que 
// != Diferente que 
// !== Estrictamente diferente que 

// Operadores lógicos
/*
    Los operadores lógicos son utilizados para combinar dos o más valores
    booleanos y devolver un valor booleano.
*/
/*
    Lista de operadores lógicos 
    && AND (Y)
    || OR (O)
    ! NOT (NO)
*/

condicional = 5 > 3 && 3 < 2; // false
condicional = 5 > 3 || 3 < 2; // true
condicional = !(!(5 > 3)); // false

/* ----- ACTIVADAD PARA REALIZAR EN CLASE ----- */

// (Facil)
var uno = !true || false; // false
var dos = false && ! false;
var tres = true && ! false;

//(Medio)
var cuatro = (5 === 5) || (true);
var cinco = (!0) || (5 > 0);
var seis = (3 > 4) && (!0);

//Avanzado
var siete = ( ((false || true) && (!false && true) )) || (true && false) //true
var ocho = (6 === 3+3) && (9/3 >=3); //true
var nueve = (!(!false) || (("1" == 1)) && (!false === true) ); //true

//Hardcore
var diez = !(!true) === !(!(5 >= 5) ); // true
var once = !(true && (!true === ! (!(8 === 4*2) )) ); //true

//Ultra-Hardcore
var doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false); //true

 //Leyenda
var trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));
