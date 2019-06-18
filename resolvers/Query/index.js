const usuario = require('./usuario')
const perfil = require('./perfil')
const funcionario = require('./funcionario')
const empresaterceira = require('./empresaterceira')
const empresaterceiraprestador = require('./empresaterceiraprestador')
const empresa = require('./empresa')

 module.exports = {
    ...usuario,
    ...perfil,
    ...funcionario,
    ...empresaterceira,
    ...empresaterceiraprestador,
    ...empresa
 }