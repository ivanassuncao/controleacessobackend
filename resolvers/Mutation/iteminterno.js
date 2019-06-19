const db = require('../../config/db')
const { iteminterno: obterItemInterno } = require('../Query/iteminterno')

const mutations = {

   async novoItemInterno(_,{dados},ctx){
       
        try{

            const [id] = await db('items_internos')
                    .insert(dados)

            return db('items_internos')
                .where({id})
                .first()        

        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async excluirItemInterno(_,arg,ctx){
      
        try{
            const iteminterno = await obterItemInterno(_,arg)
            if(iteminterno){
                const {id} = iteminterno
                await db('items_internos')
                    .where({id})
                    .delete()
            }
            return iteminterno
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    },

    async alterarItemInterno(_,{filtro,dados},ctx){
       
        try{
            const iteminterno = await obterItemInterno(_,{filtro})
            if(iteminterno){
                const {id} = iteminterno

                if(dados){
                    await db('items_internos')
                    .where({id})
                    .update(dados)
                }
            }
            return iteminterno
        }catch(e){
            throw new Error(e.sqlMessage)
        }
    }

}

module.exports = mutations