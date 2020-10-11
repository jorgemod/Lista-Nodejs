const argv = require('./config/yargs').argv; // aquí utilizamos las configuraciones de nuestros comandos 
// pormedio de nuestra variable arv que tiene todas las configuraciones
const crear = require('./por_hacer/to_do');
var colors = require('colors');
//console.log(argv);

let comando = argv._[0];
let listado_por_hacer = [];
switch (comando) {
    case 'crear':
        {
            console.log('crear por hacer');
            let tarea = crear.crear(argv.descripcion);
            console.log(tarea);
        }
        break;
    case 'listar':
        {
            console.log('mostrar todas las notas');
            let listado = crear.getListado();
            for (tarea of listado) {
                console.log("=====================Por hacer======================".green);
                console.log(tarea.descripcion);
                console.log('Estado', tarea.completado);
                console.log("====================================================".green);
            }
        }
        break;
    case 'actualizar':
        {
            console.log('actualizar las notas');
            let completado = crear.actualizar(argv.descripcion, argv.completado);
            console.log(completado);
        }
        break;
    case 'borrar':
        {
            console.log('borrar una tarea');
            let borrado = crear.borrar(argv.descripcion);
            console.log(borrado);
        }
        break;
    default:
        console.log('comando no encontrado');
}