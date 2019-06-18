const db = require('../../config/db')
const { funcionario: obterFuncionario } = require('../Query/funcionario')

const mutations = {

   async novoFuncionario(_,{dados},ctx){
        ctx && ctx.validarAdmin()
        try{

            const [id] = await db('funcionarios')
                    .insert(dados)

            return db('funcionarios')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirFuncionario(_,arg,ctx){
        ctx && ctx.validarAdmin()
        try{
            const funcionario = await obterFuncionario(_,arg)
            if(funcionario){
                const {id} = funcionario
                await db('funcionarios')
                    .where({id})
                    .delete()
            }
            return funcionario
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarFuncionario(_,{filtro,dados},ctx){
        ctx && ctx.validarAdmin()
        try{
            const funcionario = await obterFuncionario(_,{filtro})
            if(funcionario){
                const {id} = funcionario

                if(dados){
                    await db('funcionarios')
                    .where({id})
                    .update(dados)
                }
            }
            return funcionario
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations