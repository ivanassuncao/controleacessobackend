const db = require('../../config/db')

module.exports = {

controleacessofuncionariobydata(_,{filtro},ctx){

    if(!filtro) return null
    const {data_inicial,data_final} = filtro
    if(empresa_terceira_id){
        return db('controle_acesso_funcionarios')
                .where(data_entrada, '>=', data_inicial)
                .andWhere(data_entrada,'<' ,data_final)
    }else{
        return null
    }
   
},

controleacessofuncionario(_,{filtro},ctx){
   
    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('controle_acesso_funcionarios')
                .where({id})
                .first()
    }else{
        return null
    }
}

}