// //Programacion funcional

// // Asignar una funcion a una variable

// const suma = function(a, b){
//     return a + b;
// }

// console.log(suma(3,5))

// //Pasar funcion como argumento a otra funcion

// function operacion(a,b , funcion){
//     return funcion(a, b)
// }

// console.log(operacion(4, 7 , suma ))

// //retornar una funcion como resultado de otra funcion

// function multiplicador(numero1){
//     return function(numero2){
//         return numero1 * numero2
//     }
// }

// const primerllamado = multiplicador(2)
// console.log(primerllamado(5))

// //almacenar funciones en estructuras de datos

// const funciones = {
//     suma: function(a,b){
//         return a + b;
//     },
//     nombre: 'Juan',
//     resta: function(a,b){
//         return a - b;
//     }
// }

// console.log(funciones.resta(5,3))

//Funciones puras

//Impura

// let contador = 0

// function suma(num) {
//     contador += num;
//     return contador;
// }

// console.log(suma(5))
// console.log(suma(3))

// //Pura

// function sumapura(a,b ){
//     return a + b;
// }

// console.log(sumapura(4,6))


// //Inmutabilidad

// let persona = {
//     nombre: "Juan",
//     edad: 45
// }

// //directo
// persona.edad = 10
// console.log(persona)

// //Objeto inmutable

// let personas = Object.freeze({
//     nombre: "Juan",
//     edad: 45
// })
// personas.edad = 10

// console.log(personas)


// //Copia inmutable

// let persona = {
//     nombre: "Juan",
//     edad: 45,
// };

// const copiapersona = {...persona, edad: 90, nacionalidad: "Colombiano"
// }

// console.log(copiapersona)

//Arrow functions / funciones flecha

// const saludo2 = () => console.log('Hola')
// saludo2();

// const sumar = (a,b) => a + b

// console.log(sumar(5, 9));

// //Declarativa

// // Imperativa

// const numeros = [1,2,3,4,5,6]

// // let cuadrados = []

// // for(let i = 0; i < numeros.length; i++){
// //     cuadrados.push(numeros[i] * numeros[i])
// // }

// // console.log(cuadrados)

// //Declarativa

// const cuadradosdeclarativos = numeros.map(num => num * num)

// console.log(cuadradosdeclarativos)


// //Filter

// const nume = [1,2,3,4,5,6]
// const pares = nume.filter(numero => numero % 2 === 0);

// console.log(pares)

// //reduce

// const suma = nume.reduce((acc, curr) => acc + curr, 0)

// console.log(suma)

//foreach

const numeros = [1,2,3,4,5,6]

numeros.forEach(function(numero, index){
    console.log(`Numero en la posicion ${index}: ${numero}`);
})

//find

// const frutas = ["Manzana", "Peras", "Maracuya", "Pera"]

// const frutasencontrada = frutas.find(fruta => fruta === "Pera")

// console.log(frutasencontrada)

//Some

const frutas = ["Manzana", "Peras", "Maracuya", "Pera"]

const resultado = frutas.some(fruta => fruta === "Peras")

console.log(resultado)



