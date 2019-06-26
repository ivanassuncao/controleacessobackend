const db = require('../../config/db')

module.exports = {

funcionarioveiculoid(_,{filtro},ctx){

    if(!filtro) return null
    const {funcionario_id} = filtro
    if(funcionario_id){
        return db('funcionarios_veiculos')
                .where({funcionario_id})
    }else{
        return null
    }
},

funcionarioveiculoidativo(_,{filtro},ctx){

    if(!filtro) return null
    const {funcionario_id} = filtro
 
    if(funcionario_id){
        
        return db('funcionarios_veiculos')
                .where({funcionario_id})
                .andWhere('ativo','=',1)
                .first()
    }else{
        return null
    }
},

funcionarioveiculo(_,{filtro},ctx){

    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('funcionarios_veiculos')
                .where({id})
                .first()
    }else{
        return null
    }
}


}