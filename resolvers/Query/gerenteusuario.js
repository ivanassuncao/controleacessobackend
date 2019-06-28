const db = require('../../config/db')

module.exports = {

gerenteusuarioid(_,{filtro},ctx){

    if(!filtro) return null
    const {gerente_id} = filtro
    if(gerente_id){
        return db('gerentes_usuarios')
                .leftJoin('usuarios','usuarios.id','gerentes_usuarios.usuario_id')
                .select('gerentes_usuarios.*','usuarios.nome')
                .where({gerente_id})
    }else{
        return null
    }
},

gerenteusuario(_,{filtro},ctx){

    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('gerentes_usuarios')
                .where({id})
                .first()
    }else{
        return null
    }
}


}