const db = require('../../config/db')

module.exports = {

empresasterceiras(obj,arg,ctx){
  
    return db('empresas_terceiras')
},

empresaterceira(_,{filtro},ctx){

    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('empresas_terceiras')
                .where({id})
                .first()
    }else{
        return null
    }
}

}