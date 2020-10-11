const fs = require('fs');

let lista = [];

const guardarDB = () => {
    let datos = JSON.stringify(lista);
    fs.writeFile('bd/data.json', datos, (error) => {
        if (error) {
            throw new Error('no pudimos grabar compa', error);
        }
    })
}
const cargarDB = () => {
    try {

        lista = require('../bd/data.json');
    } catch (error) {
        lista = [];
    }
}
const getListado = () => {
    cargarDB();
    return lista
}
const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion, // esto es igual a descripcion : descripcion
        completado: false
    };
    lista.push(tarea);
    guardarDB();
    return tarea;
}
const actualizar = (descripcion, estado = True) => {
    cargarDB();
    let index = lista.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        lista[index].completado = estado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}
const borrar = (descripcion) => {
    cargarDB();
    lista = lista.filter(tarea => tarea.descripcion != descripcion);
    guardarDB();
    return true;

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}