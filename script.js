const obtenervalorinput = () => {
    let inputtexto = document.getElementById('input_Personaje');
    let valor = inputtexto.value
    peticionAPI(valor)
}

const peticionAPI = (Pokemon) => {
    const baseUrl = 'https://pokeapi.co/api/v2/';
    const endpoint = `pokemon/${Pokemon}`;
    const url = `${baseUrl}${endpoint}`;

    axios.get(url)
    .then(res => printdata(res.data))
    .catch(err => console.log(err))
}

const printdata = (data) => {
    let respuesta = document.getElementById('showinfo');
    respuesta.innerHTML =  `
    <img src="${data.sprites.front_default}" alt="${data.name}" width="150" height="150">
    <ul id="pokemon-stats">
        <p>Type: ${data.types[0].type.name}</p>
        <p>HP: ${data.stats[0].base_stat}</p>  
        <p>Attack: ${data.stats[1].base_stat}</p>
        <p>Defense: ${data.stats[2].base_stat}</p>
        <p>Special Attack: ${data.stats[3].base_stat}</p>
        <p>Special Defense: ${data.stats[4].base_stat}</p>
        <p>Speed: ${data.stats[5].base_stat}</p>
    </ul>
  `;
}
