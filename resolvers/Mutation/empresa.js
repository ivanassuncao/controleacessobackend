const db = require('../../config/db')
const { empresa: obterEmpresa } = require('../Query/empresa')

const mutations = {

   async novaEmpresa(_,{dados},ctx){
    ctx && ctx.validarAdmin()
        try{

            const [id] = await db('empresas')
                    .insert(dados)

            return db('empresas')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirEmpresa(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const empresa = await obterEmpresa(_,arg)
            if(empresa){
                const {id} = empresa
                await db('empresas')
                    .where({id})
                    .delete()
            }
            return empresa
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarEmpresa(_,{filtro,dados},ctx){
        ctx && ctx.validarAdmin()
        try{
            const empresa = await obterEmpresa(_,{filtro})
            if(empresa){
                const {id} = empresa

                if(dados){
                    await db('empresas')
                    .where({id})
                    .update(dados)
                }
            }
            return empresa
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations