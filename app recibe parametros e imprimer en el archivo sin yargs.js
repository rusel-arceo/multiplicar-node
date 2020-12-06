//Requiered
const {crearArchivo} = require('./multiplicar/crearArchivo.js');
//desestruture, recibi la función crearArchivo
let base='a';
let parametro = process.argv[2];
//Nos proporciona los parametro que carga por defecto node, asi como lo que mandamos con --parametro=5
//Normarmente carga dos por defaul y apartir del tercero es el nuestro. aunque podria complicarse si desconocemos
//si se han enviado o no parametro.
parametro = parametro.split('='); //divide el terxto por el caracter enviado
base = parametro[1];

console.log(base); 

 crearArchivo(base).then (archivo=>{
    console.log(`Se creo el archivo ${ archivo }`);    
})

.catch(
    err=> { console.log(`Existe un error: ${err}`) }
);


