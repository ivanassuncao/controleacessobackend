const db = require('../../config/db')
const { controleacessovisitante: obterControleAcessoVisitante } = require('../Query/controleacessovisitante')

const mutations = {

   async novoControleAcessoVisitante(_,{dados},ctx){
    
        try{

            const [id] = await db('controle_acesso_visitantes')
                    .insert(dados)

            return db('controle_acesso_visitantes')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirControleAcessoVisitante(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const controleacessovisitante = await obterControleAcessoVisitante(_,arg)
            if(controleacessovisitante){
                const {id} = controleacessovisitante
                await db('controle_acesso_visitantes')
                    .where({id})
                    .delete()
            }
            return controleacessovisitante
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarControleAcessoVisitante(_,{filtro,dados},ctx){
  
        try{
            const controleacessovisitante = await obterControleAcessoVisitante(_,{filtro})
            if(controleacessovisitante){
                const {id} = controleacessovisitante

                if(dados){
                    await db('controle_acesso_visitantes')
                    .where({id})
                    .update(dados)
                }
            }
            return controleacessovisitante
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations