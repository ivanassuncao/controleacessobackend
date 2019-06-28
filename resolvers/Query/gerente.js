const db = require('../../config/db')

module.exports = {

gerentes(obj,arg,ctx){
  
    return db('gerentes')
        .leftJoin('usuarios','usuarios.id','gerentes.usuario_id')
        .select('gerentes.*','usuarios.nome')
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