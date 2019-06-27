const db = require('../../config/db')
const { gerente: obterGerente } = require('../Query/gerente')

const mutations = {

   async novoGerente(_,{dados},ctx){
        ctx && ctx.validarAdmin()
        try{

            const [id] = await db('gerentes')
                    .insert(dados)

            return db('gerentes')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirGerente(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const gerente = await obterGerente(_,arg)

            if(gerente){
                const {id} = gerente

                await db('gerentes_usuarios')
                .where({gerente_id: id})
                .delete()


                await db('gerentes')
                    .where({id})
                    .delete()
            }
            return gerente
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarGerente(_,{filtro,dados},ctx){
        ctx && ctx.validarAdmin()
        try{
            const gerente = await obterGerente(_,{filtro})
            if(gerente){
                const {id} = gerente

                if(dados){
                    await db('gerentes')
                    .where({id})
                    .update(dados)
                }
            }
            return gerente
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations