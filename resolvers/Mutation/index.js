const usuario = require('./usuario')
const perfil = require('./perfil')
const funcionario = require('./funcionario')
const empresaterceira = require('./empresaterceira')
const empresaterceiraprestador = require('./empresaterceiraprestador')
const empresa = require('./empresa')
const iteminterno = require('./iteminterno')
const controleacessofuncionario = require('./controleacessofuncionario')

 module.exports = {
    ...usuario,
    ...perfil,
    ...funcionario,
    ...empresaterceira,
    ...empresaterceiraprestador,
    ...empresa,
    ...iteminterno,
    ...controleacessofuncionario
 }