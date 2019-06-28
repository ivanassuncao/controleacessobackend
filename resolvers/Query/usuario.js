const db = require('../../config/db')
const bcrypt = require('bcrypt-nodejs')
const {getUsuarioLogado} = require('../comum/Usuario')

module.exports = {

    async login(_,{ dados }) {
        const usuario = await db('usuarios')
        .where({email: dados.email})
        .first()

        if(!usuario){
            throw new Error('Usuário/Senha inválidos...')
        }

        const compareSenha = bcrypt.compareSync(dados.senha,usuario.senha)

        if(!compareSenha){
            throw new Error('Usuário/Senha inválidos...')
        }

        return getUsuarioLogado(usuario)
    },
    usuarios(obj,arg,ctx) {
        ctx && ctx.validarAdmin()
        return db('usuarios')
    },
    usuario(_, { filtro },ctx) {
        ctx && ctx.validarUsuarioFiltro(filtro)
        if(!filtro) return null
        const { id, email } = filtro
        if(id) {
            return db('usuarios')
                .where({ id })
                .first()
        } else if(email) {
            return db('usuarios')
                .where({ email })
                .first()
        } else {
            return null
        }
    },
    usuariosativos(obj,arg,ctx) {
        return db('usuarios')
            .where('ativo','=',1)
    },
}