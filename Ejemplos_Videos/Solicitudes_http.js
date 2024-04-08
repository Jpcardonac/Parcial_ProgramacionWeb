//Solicitudes http

// Fetch API
const baseURL = 'https://jsonplaceholder.typicode.com/';
const endpoint = '/posts/1';
const url = `${baseURL}${endpoint}`;
console.log(url)


const options = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }, 
}


fetch(url, options)
.then(Response => Response.json())
.then(datos => console.log(datos))




// //Async Await

// const fetchData = async () => {
//     try{
//         const response = await fetch(baseURL2)
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log('Error:', error)
//     }
// }

// fetchData();


