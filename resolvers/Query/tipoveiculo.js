const db = require('../../config/db')

module.exports = {

tipoveiculos(obj,arg,ctx){
  
    return db('tipo_veiculos')
},

tipoveiculo(_,{filtro},ctx){
    ctx && ctx.validarAdmin()
    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('tipo_veiculos')
                .where({id})
                .first()
    }else{
        return null
    }
}

}