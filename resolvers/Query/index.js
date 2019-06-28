const usuario = require('./usuario')
const perfil = require('./perfil')
const funcionario = require('./funcionario')
const empresaterceira = require('./empresaterceira')
const empresaterceiraprestador = require('./empresaterceiraprestador')
const empresa = require('./empresa')
const iteminterno = require('./iteminterno')
const controleacessofuncionario = require('./controleacessofuncionario')
const funcionarioveiculo = require('./funcionarioveiculo')
const setor = require('./setor')
const tipoveiculo = require('./tipoveiculo')
const controleacessoempresaterceira = require('./controleacessoempresaterceira')
const controleacessovisitante = require('./controleacessovisitante')
const gerente = require('./gerente')
const gerenteusuario = require('./gerenteusuario')
const requisicoesinterna = require('./requisicoesinterna')

 module.exports = {
    ...usuario,
    ...perfil,
    ...funcionario,
    ...empresaterceira,
    ...empresaterceiraprestador,
    ...empresa,
    ...iteminterno,
    ...controleacessofuncionario,
    ...funcionarioveiculo,
    ...setor,
    ...tipoveiculo,
    ...controleacessoempresaterceira,
    ...controleacessovisitante,
    ...gerente,
    ...gerenteusuario,
    ...requisicoesinterna
 }