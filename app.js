const argv = require('yargs')
              .command('listar', 'Imprime en consola la tabla de multiplicar', {
                base: {
                  demand: true,
                  alias: 'b'
                },
                limite: {
                  alias: 'l',
                  default: 10
                }
              })
              .help()
              .argv;

const { crearArchivo } = require('./multiplicar/multipĺicar');

// console.log("process.argv:", process.argv);

const argv2 = process.argv;

// console.log("argv.base:", argv.base);
console.log("argv.limite:", argv.limite);

// const base = parametro.split('=')[1];


// crearArchivo(base)
//   .then(archivo => console.log(`Archivo creado: ${archivo}`))
//   .catch(e => console.log(e));
