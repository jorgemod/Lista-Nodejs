//para todo esto necesitamos importar la libreria de yargs 
const argv = require('yargs').command('crear', 'crea un archivo de tareas por hacer', { //el comando es crear 
        descripcion: //estas son las opciones que puede tener mi comando 
        {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'actualiza el estado de una tarea', { //actualizar es el comando sobre el cual se trabaja
        descripcion: { //todas estas son las opciones posibles que puede tener mi comando 
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c'
        }
    })
    .command('borrar', 'borrar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tara por eliminar'
        }
    })
    .help().argv
    //para poder usarlo fuera de este archivo necesitamos exportarlo en los modulos de node 
module.exports = {
    argv
}