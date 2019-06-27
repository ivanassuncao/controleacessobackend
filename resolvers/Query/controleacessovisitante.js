const db = require('../../config/db')

module.exports = {

controleacessovisitantenomeempresavisitante(obj,arg,ctx){

    return db('controle_acesso_visitantes')
            .select('nome_empresa_visitante')
},    

controleacessovisitantenomevisitante(obj,arg,ctx){

    return db('controle_acesso_visitantes')
            .select('nome_visitante')
},    


controleacessovisitantebydata(_,{filtro},ctx){
  
    if(!filtro) return null
    let {data_inicial,data_final} = filtro
   
    data_final =  data_final + " 23:59" 

    if(data_inicial){
    
        return db('controle_acesso_visitantes')
                .leftJoin('empresas', 'empresas.id', 'controle_acesso_visitantes.empresa_id')
                .leftJoin('setores', 'setores.id', 'controle_acesso_visitantes.setor_id')
                .select('controle_acesso_visitantes.*','empresas.nome_empresa','setores.nome_setor')
                .where('data_entrada', '>=', data_inicial)
                .andWhere('data_entrada','<' , data_final)
                .whereNull('controle_acesso_visitantes.data_saida')
    }else{
        return null
    }
   
},
controleacessovisitantebydatasaida(_,{filtro},ctx){
  
    if(!filtro) return null
    let {data_inicial,data_final} = filtro

    data_final =  data_final + " 23:59"
   
    if(data_inicial){

      
        return db('controle_acesso_visitantes')
                .leftJoin('empresas', 'empresas.id', 'controle_acesso_visitantes.empresa_id')
                .leftJoin('setores', 'setores.id', 'controle_acesso_visitantes.setor_id')
                .select('controle_acesso_visitantes.*','empresas.nome_empresa','setores.nome_setor')
                .where('data_entrada', '>=', data_inicial)
                .andWhere('data_entrada','<' , data_final)
                .whereNotNull('controle_acesso_visitantes.data_saida')
    }else{
        return null
    }
   
},
controleacessovisitante(_,{filtro},ctx){
   
    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('controle_acesso_visitantes')
                .where({id})
                .first()
    }else{
        return null
    }
}

}