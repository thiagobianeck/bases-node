const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multipĺicar');

let comando = argv._[0];

switch( comando ) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log('Archivo creado: ', `${archivo}`.green.bold))
      .catch(e => console.log(`${e}`.red));
    break;
  default:
    console.log('Comando no reconocido');
}
