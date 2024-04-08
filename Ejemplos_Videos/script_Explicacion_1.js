//Variables
//Son aquellos que guardan datos
//Pueden ser variables Boolean, numeric, arreglos

//Ejemplos:
let nombre_persona = "Juan"
console.log(nombre_persona)

let Frutas = ["Pera","Banano"]
console.log(Frutas)

//Scope Variables

let global = "Soy Global"
function mifuncion(){
    console.log(global, Frutas)
}

mifuncion()

//Scope Local

function milocal(){
    let local = "Soy local"
    console.log(local)
}
milocal()

// console.log(local)


//Scope Bloque

if(true){
    let insideblock = "Estoy en el bloque"
    console.log(insideblock)
}

//Declaracion Variables

var edad = 20

if(edad => 18){
    var es_adulto = true;
}

console.log(es_adulto)

