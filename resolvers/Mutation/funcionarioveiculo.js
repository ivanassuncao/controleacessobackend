const db = require('../../config/db')
const { funcionarioveiculo: obterFuncionarioVeiculo } = require('../Query/funcionarioveiculo')

const mutations = {

   async novoFuncionarioVeiculo(_,{dados},ctx){
        ctx && ctx.validarAdmin()
        try{

            const [id] = await db('funcionarios_veiculos')
                    .insert(dados)

            return db('funcionarios_veiculos')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirFuncionarioVeiculo(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const funcionarioveiculo = await obterFuncionarioVeiculo(_,arg)
            if(funcionarioveiculo){
                const {id} = funcionarioveiculo

                await db('funcionarios_veiculos')
                    .where({id})
                    .delete()
            }
            return funcionarioveiculo
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarFuncionarioVeiculo(_,{filtro,dados},ctx){
        ctx && ctx.validarAdmin()
        try{
            const funcionarioveiculo = await obterFuncionarioVeiculo(_,{filtro})
            if(funcionarioveiculo){
                const {id} = funcionarioveiculo

                if(dados){
                    await db('funcionarios_veiculos')
                    .where({id})
                    .update(dados)
                }
            }
            return funcionarioveiculo
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations