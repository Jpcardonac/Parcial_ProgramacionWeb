// //Operadores Logicos y Estructuras de Control

// //If-else

// let edad = 12

// if(edad => 18){
//    console.log('Eres mayor de edad');
// } else {
//     Console.log('Menor de edad')
// }


// //condicional ternario
// edad >= 18 ? console.log('Eres mayor de edad') : console.log('Eres menor de edad');


// //else-if

// let puntaje = 75;

// if(puntaje > 95){
//     console.log('Excelente')
// }else if (puntaje > 70){
//     console.log('Sobresaliente')
// }else {
//     console.log('Sigue intentando')
// }


// //bucles - loops

// //For

// for(let i = 0; i<=5; i++){
//     console.log("Interacion: "+ i)
// }

// //while

// let contador = 0;

// while (contador < 3){
//     console.log("Contando: " + contador)
//     contador++;
// }

//Switch case

let diasemana = "Miercoles";
switch (diasemana){
    case "Lunes":
    console.log("Hoy es lunes")
    break;
    case "Martes":
    console.log("Hoy es Martes")
    break;
    default:
        console.log("Hoy no es ninguno de los dias")
}

//Try-catch

try{
    let resultado = 10/0;
    console.log(resultado)
}catch (error){
    console.log("Error", error.message)
}

// Operadores logicos

//&& (And Logico)

let edad_bool = false;
let persona = false;

if(edad_bool && persona){
console.log("Ambos son verdaderos")
}else{
    console.log("Hay uno que no es verdadero")
}

if(edad_bool || persona){
console.log("Una de las dos es verdadera")
}else{
    console.log("Ambas son falsas")
}

//NOT logico

console.log(!edad_bool)

let nombre = ""
if( nombre === "" || nombre === null || nombre === undefined){
    console.log("El nombre no esta definido")
}

if(!nombre)
{
    console.log('El nombre no esta definido')
}

//Comparador de igualdad (==)

console.log(5 == 5)
console.log(5 == 10)
console.log(5 == '5')

//Comparador de igualdad estricto (===)

console.log(5 === 5)
console.log(5 === '5')

//Comparador de desigualdad (!=)

console.log(5 != 10)
console.log('Hola' != 'Adios')
console.log(5 != '5')

//Comparadores mayor que menor que

console.log(3>2)
console.log(-3 <= -2)

//Objetos

let personas = {
    nombre: "Juan",
    edad: 27,
    casado: false,
    hobbies: ['Leer' , 'Conducir']
}

console.log(personas.hobbies)
console.log(personas['edad'])

personas.ciudad = 'Medellin'
personas.edad = 50
delete personas.casado

console.log(personas)


//Arreglos

let colores = ["Blanco" , "Negro" , "Verde"]

console.log(colores)
console.log(colores[2])

