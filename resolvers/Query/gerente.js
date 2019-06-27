const db = require('../../config/db')

module.exports = {

gerentes(obj,arg,ctx){
  
    return db('gerentes')
},

gerente(_,{filtro},ctx){
    ctx && ctx.validarAdmin()
    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('gerentes')
                .where({id})
                .first()
    }else{
        return null
    }
}

}