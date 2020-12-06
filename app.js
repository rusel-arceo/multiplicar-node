//Requiered
const {crearArchivo, listarTabla} = require('./multiplicar/crearArchivo.js');
const argv= require('./configuracion/yargs').argv; //Esto es para que se extraiga argv, de lo contrario se importa todo el codigo y tendria que hacer argv.argv
const colors=require('colors');
const colors2 = require('colors/safe');

let {_:comando}=argv; //pudo haber sido comando=argv._.[0]
comando=comando[0];
const {base} = argv;
const {limite}=argv;

switch(comando)
{
    case 'listar':
        console.log("Enlistando Tabla");
        listarTabla(base,limite);
    break;

    case 'crear':
        console.log("Se creará el archivo");
        crearArchivo(base,limite)
        .then((archivo)=>{
            console.log(`SE HA CREADO EL ARCHIVO:`, colors2.green(`TABLA DEL ${archivo}`) );
            
        })
        .catch(err=>{console.log(`No se creo el archivo ${err}`);});
    break;

    default:
        console.log("No se reconoce el comando");
}

//console.log(instruccion);
//console.log(argv2);
//const {base}=argv;
//parametro = parametro.split('='); //divide el terxto por el caracter enviado
//base = parametro[1];

//console.log(base); 


 
