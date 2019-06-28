const db = require('../../config/db')
const { gerenteusuario: obterGerenteUsuario } = require('../Query/gerenteusuario')

const mutations = {

   async novoGerenteUsuario(_,{dados},ctx){
        ctx && ctx.validarAdmin()
        try{

            const [id] = await db('gerentes_usuarios')
                    .insert(dados)

            return db('gerentes_usuarios')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirGerenteUsuario(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const gerenteusuario = await obterGerenteUsuario(_,arg)
            if(gerenteusuario){
                const {id} = gerenteusuario

                await db('gerentes_usuarios')
                    .where({id})
                    .delete()
            }
            return gerenteusuario
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarGerenteUsuario(_,{filtro,dados},ctx){
        ctx && ctx.validarAdmin()
        try{
            const gerenteusuario = await obterGerenteUsuario(_,{filtro})
            if(gerenteusuario){
                const {id} = gerenteusuario

                if(dados){
                    await db('gerentes_usuarios')
                    .where({id})
                    .update(dados)
                }
            }
            return gerenteusuario
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations