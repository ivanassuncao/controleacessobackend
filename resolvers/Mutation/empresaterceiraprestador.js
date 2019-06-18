const db = require('../../config/db')
const { empresaterceiraprestador: obterEmpresaTerceiraPrestador } = require('../Query/empresaterceiraprestador')

const mutations = {

   async novaEmpresaTerceiraPrestador(_,{dados},ctx){
        ctx && ctx.validarAdmin()
        try{

            const [id] = await db('empresas_terceiras_prestadores')
                    .insert(dados)

            return db('empresas_terceiras_prestadores')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirEmpresaTerceiraPrestador(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const empresaterceiraprestador = await obterEmpresaTerceiraPrestador(_,arg)
            if(empresaterceiraprestador){
                const {id} = empresaterceiraprestador

                await db('empresas_terceiras_prestadores')
                    .where({id})
                    .delete()
            }
            return empresaterceiraprestador
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarEmpresaTerceiraPrestador(_,{filtro,dados},ctx){
        ctx && ctx.validarAdmin()
        try{
            const empresaterceiraprestador = await obterEmpresaTerceiraPrestador(_,{filtro})
            if(empresaterceiraprestador){
                const {id} = empresaterceiraprestador

                if(dados){
                    await db('empresas_terceiras_prestadores')
                    .where({id})
                    .update(dados)
                }
            }
            return empresaterceiraprestador
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations