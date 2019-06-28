const db = require('../../config/db')
const { requisicoesinterna: obterRequisicoesInterna } = require('../Query/requisicoesinterna')

const mutations = {

   async novoRequisicoesInterna(_,{dados},ctx){
    
        try{

            const [id] = await db('requisicoes_internas')
                    .insert(dados)

            return db('requisicoes_internas')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirRequisicoesInterna(_,arg,ctx){

        try{
            const requisicoesinterna = await obterRequisicoesInterna(_,arg)

            let reg_requisicao = null
          
            if(requisicoesinterna){
                const {id} = requisicoesinterna

                   
            reg_requisicao =  await db('requisicoes_internas')
                                .where({id})
                                .whereNotNull('requisicoes_internas.data_aprovacao')
                                .first()    

            if(reg_requisicao)
            {
            return new Error('Requisição Aprovada!Favor verificar...')
            }

                await db('requisicoes_internas')
                    .where({id})
                    .delete()
            }
            return requisicoesinterna
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarRequisicoesInterna(_,{filtro,dados},ctx){
        ctx && ctx.validarUsuarioFiltro(filtro)
        try{
            const requisicoesinterna = await obterRequisicoesInterna(_,{filtro})
            if(requisicoesinterna){
                const {id} = requisicoesinterna

                if(dados){
                    await db('requisicoes_internas')
                    .where({id})
                    .update(dados)
                }
            }
            return requisicoesinterna
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async aprovarRequisicoesInterna(_,{filtro,dados},ctx){
   
        try{
            const requisicoesinterna = await obterRequisicoesInterna(_,{filtro})

            let reg_requisicao = null
             
            if(requisicoesinterna){
                const {id} = requisicoesinterna
                console.log(dados)
                reg_requisicao =  await db('gerentes_usuarios')
                                .innerJoin('gerentes','gerentes.id','gerentes_usuarios.gerente_id')
                                .where('gerentes.usuario_id','=', dados.gerente_id)
                                .andWhere('gerentes_usuarios.usuario_id', '=',dados.usuario_id)
                                .first()    

                if(!reg_requisicao)
                {
                    return new Error('Usuário sem permissão de aprovação...')
                }

                if(dados){
                    await db('requisicoes_internas')
                    .where({id})
                    .update(dados)
                }
            }
            return requisicoesinterna
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations