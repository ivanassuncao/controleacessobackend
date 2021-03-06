const db = require('../../config/db')

module.exports = {

empresas(obj,arg,ctx){
  
    return db('empresas')
},

empresa(_,{filtro},ctx){
    ctx && ctx.validarAdmin()
    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('empresas')
                .where({id})
                .first()
    }else{
        return null
    }
}

}