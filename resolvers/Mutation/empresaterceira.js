const db = require('../../config/db')
const { empresaterceira: obterEmpresaTerceira } = require('../Query/empresaterceira')

const mutations = {

   async novaEmpresaTerceira(_,{dados},ctx){
        ctx && ctx.validarAdmin()
        try{

            const [id] = await db('empresas_terceiras')
                    .insert(dados)

            return db('empresas_terceiras')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirEmpresaTerceira(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const empresaterceira = await obterEmpresaTerceira(_,arg)
            if(empresaterceira){
                const {id} = empresaterceira

                await db('empresas_terceiras_prestadores')
                .where({empresa_terceira_id: id})
                .delete()

                await db('empresas_terceiras')
                    .where({id})
                    .delete()
            }
            return empresaterceira
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarEmpresaTerceira(_,{filtro,dados},ctx){
        ctx && ctx.validarAdmin()
        try{
            const empresaterceira = await obterEmpresaTerceira(_,{filtro})
            if(empresaterceira){
                const {id} = empresaterceira

                if(dados){
                    await db('empresas_terceiras')
                    .where({id})
                    .update(dados)
                }
            }
            return empresaterceira
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations