const db = require('../../config/db')
const { controleacessofuncionario: obterControleAcessoFuncionario } = require('../Query/controleacessofuncionario')

const mutations = {

   async novoControleAcessoFuncionario(_,{dados},ctx){
    
        try{

            const [id] = await db('controle_acesso_funcionarios')
                    .insert(dados)

            return db('controle_acesso_funcionarios')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirControleAcessoFuncionario(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const controleacessofuncionario = await obterControleAcessoFuncionario(_,arg)
            if(controleacessofuncionario){
                const {id} = controleacessofuncionario
                await db('controle_acesso_funcionarios')
                    .where({id})
                    .delete()
            }
            return controleacessofuncionario
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarControleAcessoFuncionario(_,{filtro,dados},ctx){
  
        try{
            const controleacessofuncionario = await obterControleAcessoFuncionario(_,{filtro})
            if(controleacessofuncionario){
                const {id} = controleacessofuncionario

                if(dados){
                    await db('controle_acesso_funcionarios')
                    .where({id})
                    .update(dados)
                }
            }
            return controleacessofuncionario
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations