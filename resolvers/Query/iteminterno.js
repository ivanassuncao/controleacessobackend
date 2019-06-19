const db = require('../../config/db')

module.exports = {

itemsinternos(obj,arg,ctx){
 
    return db('items_internos')
},

iteminterno(_,{filtro},ctx){
   
    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('items_internos')
                .where({id})
                .first()
    }else{
        return null
    }
}

}