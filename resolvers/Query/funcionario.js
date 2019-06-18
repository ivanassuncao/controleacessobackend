const db = require('../../config/db')

module.exports = {

funcionarios(obj,arg,ctx){
    ctx && ctx.validarAdmin()
    return db('funcionarios')
},

funcionario(_,{filtro},ctx){
    ctx && ctx.validarAdmin()
    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('funcionarios')
                .where({id})
                .first()
    }else{
        return null
    }
}

}