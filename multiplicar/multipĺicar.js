// requires
const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite = 10) => {
    
    if(!Number(base)) {
        console.error(`El valor introducido en base ${base}(${typeof base}) no es un número.`);
        return;
    } else if (!Number(limite)){
        console.error(`El valor introducido en limite ${limite}(${typeof limite}) no es un número.`);
        return;
    } else {

        console.log('==============================');
        console.log(`======== TABLA DE ${base} ==========`);
        console.log('==============================');

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    }
};

const crearArchivo = ( base, limite = 10 ) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)) {
            reject(`El valor introducido ${base}(${typeof base}) no es un número.`.red);
            return;
        }

        if(!Number(limite)) {
            reject(`El valor introducido ${limite}(${typeof limite}) no es un número.`.red);
            return;
        }
        
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err){
                reject(err)
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`)
            }
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}

