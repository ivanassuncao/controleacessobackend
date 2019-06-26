const db = require('../../config/db')
const { setor: obterSetor } = require('../Query/setor')

const mutations = {

   async novoSetor(_,{dados},ctx){
        ctx && ctx.validarAdmin()
        try{

            const [id] = await db('setores')
                    .insert(dados)

            return db('setores')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirSetor(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const setor = await obterSetor(_,arg)

            let reg_setor = null

            if(setor){
                const {id} = setor

                    
                reg_setor = await db('controle_acesso_empresa_terceiras')
                .where({setor_id:id})
                .first()    

                if(reg_setor)
                {
                   return new Error('Existe registro vinculado ao Setor!Favor Verificar')
                }

                await db('setores')
                    .where({id})
                    .delete()
            }
            return setor
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarSetor(_,{filtro,dados},ctx){
        ctx && ctx.validarAdmin()
        try{
            const setor = await obterSetor(_,{filtro})
            if(setor){
                const {id} = setor

                if(dados){
                    await db('setores')
                    .where({id})
                    .update(dados)
                }
            }
            return setor
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations