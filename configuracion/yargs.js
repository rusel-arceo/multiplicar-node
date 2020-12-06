const opts = { //Definimos un objeto que ademas dentro tiene mas objetos
    base:{
        demand:true,  //obligatorio
        alias:'b' //nombre alterno al mandar el valor
    },
    limite:{
        alias:'l',
        default:10  //valor por defecto
    }
}

const argv= require('yargs')
            .help() //muestra los argumentos, si son requeridos y valores por defecto descritos en command
            .command('listar','imprime la tabla de multiplicar', opts) //permite expresar los comandos y parametros que se recibirán
            .command('crear','Crea una archivo con la tabla de multiplicar',opts) //permite expresar los comandos y parametros que se recibirán
            .argv;

module.exports = {
    argv
}            