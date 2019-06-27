const db = require('../../config/db')
const { controleacessoempresaterceira: obterControleAcessoEmpresaTerceira } = require('../Query/controleacessoempresaterceira')

const mutations = {

   async novoControleAcessoEmpresaTerceira(_,{dados},ctx){
    
        try{

            const [id] = await db('controle_acesso_empresa_terceiras')
                    .insert(dados)

            return db('controle_acesso_empresa_terceiras')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirControleAcessoEmpresaTerceira(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const controleacessoempresaterceira = await obterControleAcessoEmpresaTerceira(_,arg)
            if(controleacessoempresaterceira){
                const {id} = controleacessoempresaterceira
                await db('controle_acesso_empresa_terceiras')
                    .where({id})
                    .delete()
            }
            return controleacessoempresaterceira
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarControleAcessoEmpresaTerceira(_,{filtro,dados},ctx){
  
        try{
            const controleacessoempresaterceira = await obterControleAcessoEmpresaTerceira(_,{filtro})
            if(controleacessoempresaterceira){
                const {id} = controleacessoempresaterceira

                if(dados){
                    await db('controle_acesso_empresa_terceiras')
                    .where({id})
                    .update(dados)
                }
            }
            return controleacessoempresaterceira
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations