
//Requireds
const fs = require('fs');
const colors=require('colors');
const colors2 = require('colors/safe');//en  caso que no estemos seguros que es un string le podemos aplicar este como una función al console.log

const calcularTabla = (base, limite=10)=>
{
 let data='';
 for (let i=1;i<=limite;i++)
      {
         data +=`${base}*${i}=${base*i}\n`;
      }
      return data;
}

const listarTabla = ( base, limite=10) => {
    
    console.log('======================='.green);
    console.log(colors2.blue(`=   tabla de ${ base }     =`));
    console.log(`=======================`.green);

    console.log(calcularTabla( base, limite).red);
}

const crearArchivo = ( base, limite=10) => {

      return new Promise((resolve, reject) => {
       
        const data=calcularTabla(base,limite);
        const archivo=`tablas/tabla del-${base}-AL-${limite}.txt`;
        if(!Number(base))  //revisa si es un número, en este caso la negación
           { 
            reject('La base proporcionada No es un número');
            return;
           }

            
        fs.writeFile(archivo, data, (err) => {
            if (err)
            {reject (err);}
            else{
                resolve(archivo);
            }    
        }
        ); //del writeFile
    }); //el callback donde se define todo el procedimieto y 
    //cierra la promesa
}

module.exports = {
    crearArchivo,
    listarTabla
}