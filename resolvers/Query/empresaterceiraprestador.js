const db = require('../../config/db')

module.exports = {

empresaterceiraprestadorid(_,{filtro},ctx){

    if(!filtro) return null
    const {empresa_terceira_id} = filtro
    if(empresa_terceira_id){
        return db('empresas_terceiras_prestadores')
                .where({empresa_terceira_id})
    }else{
        return null
    }
},

empresaterceiraprestador(_,{filtro},ctx){

    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('empresas_terceiras_prestadores')
                .where({id})
                .first()
    }else{
        return null
    }
}


}