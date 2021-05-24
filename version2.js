//1. Este elemento me permitira leer el archivo
const fs = require('fs');

//2. Aca lo traigo usando la propiedad readFile que me leera el archivo
fs.readFile('C:/Users/deixy/OneDrive/Escritorio/retojs/corpus.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    //Como estoy en una promesa debo utilizar el data en este contexto
    //texto_vectorizado = Array.from(data);
    //Primero convertire lo que viene en mayuscula
    let texto = data.toUpperCase();
    //console.log(texto);
    //Ahora lo convierto en un array (usable)
    texto_vectorizado = [...texto];
    console.log(texto_vectorizado);
    //Defino la logica para empezar a recorrerlo y demas calculos
    texto_vectorizado.forEach(element => console.log(element));
});