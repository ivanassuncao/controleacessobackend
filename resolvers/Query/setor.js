const db = require('../../config/db')

module.exports = {

setores(obj,arg,ctx){
  
    return db('setores')
},

setor(_,{filtro},ctx){
    ctx && ctx.validarAdmin()
    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('setores')
                .where({id})
                .first()
    }else{
        return null
    }
}

}