const db = require('../../config/db')
const { tipoveiculo: obterTipoVeiculo } = require('../Query/tipoveiculo')

const mutations = {

   async novoTipoVeiculo(_,{dados},ctx){
        ctx && ctx.validarAdmin()
        try{

            const [id] = await db('tipo_veiculos')
                    .insert(dados)

            return db('tipo_veiculos')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirTipoVeiculo(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const tipoveiculo = await obterTipoVeiculo(_,arg)

            let reg_tipoveiculo = null

            if(tipoveiculo){
                const {id} = tipoveiculo

                    
                reg_tipoveiculo = await db('controle_acesso_empresa_terceiras')
                .where({tipo_veiculo_id:id})
                .first()    

                if(reg_tipoveiculo)
                {
                   return new Error('Existe registro vinculado ao Tipo de Veiculo!Favor Verificar')
                }

                await db('tipo_veiculos')
                    .where({id})
                    .delete()
            }
            return tipoveiculo
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarTipoVeiculo(_,{filtro,dados},ctx){
        ctx && ctx.validarAdmin()
        try{
            const tipoveiculo = await obterTipoVeiculo(_,{filtro})
            if(tipoveiculo){
                const {id} = tipoveiculo

                if(dados){
                    await db('tipo_veiculos')
                    .where({id})
                    .update(dados)
                }
            }
            return tipoveiculo
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations