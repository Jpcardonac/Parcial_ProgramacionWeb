// //Asincronismo

// //callbacks

// mostrarmensaje = (mensaje, funcioncallback) => {

//     setTimeout(() => {
//     funcioncallback();

// }, 5000);

// console.log('Mensaje recibido:', mensaje);
// funcioncallback();
// }



// funcioncallback = () => {
//     console.log("Callback Ejecutado")
// }

// mostrarmensaje("Hola Mundo", funcioncallback);


// //Promesas

const obtenernumeroaleatorio = () => {
    return new Promise((resolve, reject) =>{
        const numero = Math.random()

        if (numero > 0.5){
            resolve(numero)
        }else{
            reject("El numero es menor o igual a 0.5")
        }
    })
}

obtenernumeroaleatorio().then((numero) => {
    console.log("Numero obtenido", numero)
})
.catch((error) => {
    console.log('Error:', error)
})

//Async Await


const obtenerYmostrarnumeroaleatorio = async () => {

    try{
        const numero = await obtenernumeroaleatorio();
        console.log('Numero obtenido:', numero);
    }catch(error){
        console.log('Ocurrio un error:', error)
    }
};

