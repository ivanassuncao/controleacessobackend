const db = require('../../config/db')

module.exports = {

controleacessoempresaterceirabydata(_,{filtro},ctx){
  
    if(!filtro) return null
    let {data_inicial,data_final} = filtro
   
    data_final =  data_final + " 23:59" 

    if(data_inicial){
    
        return db('controle_acesso_empresa_terceiras')
                .leftJoin('empresas', 'empresas.id', 'controle_acesso_empresa_terceiras.empresa_id')
                .leftJoin('setores', 'setores.id', 'controle_acesso_empresa_terceiras.setor_id')
                .leftJoin('empresas_terceiras', 'empresas_terceiras.id', 'controle_acesso_empresa_terceiras.empresa_terceira_id')
                .leftJoin('empresas_terceiras_prestadores','empresas_terceiras_prestadores.id','controle_acesso_empresa_terceiras.prestador_id')
                .select('controle_acesso_empresa_terceiras.*','empresas.nome_empresa','empresas_terceiras.nome_empresa_terceira','empresas_terceiras_prestadores.nome_prestador',
                'empresas_terceiras_prestadores.cpf', 'setores.nome_setor'
                )
                .where('data_entrada', '>=', data_inicial)
                .andWhere('data_entrada','<' , data_final)
                .whereNull('controle_acesso_empresa_terceiras.data_saida')
    }else{
        return null
    }
   
},
controleacessoempresaterceirabydatasaida(_,{filtro},ctx){
  
    if(!filtro) return null
    let {data_inicial,data_final} = filtro

    data_final =  data_final + " 23:59"
   
    if(data_inicial){

      
        return db('controle_acesso_empresa_terceiras')
                .leftJoin('empresas', 'empresas.id', 'controle_acesso_empresa_terceiras.empresa_id')
                .leftJoin('setores', 'setores.id', 'controle_acesso_empresa_terceiras.setor_id')
                .leftJoin('empresas_terceiras', 'empresas_terceiras.id', 'controle_acesso_empresa_terceiras.empresa_terceira_id')
                .leftJoin('empresas_terceiras_prestadores','empresas_terceiras_prestadores.id','controle_acesso_empresa_terceiras.prestador_id')
                .select('controle_acesso_empresa_terceiras.*','empresas.nome_empresa','empresas_terceiras.nome_empresa_terceira','empresas_terceiras_prestadores.nome_prestador',
                'empresas_terceiras_prestadores.cpf', 'setores.nome_setor'
                )
                .where('data_entrada', '>=', data_inicial)
                .andWhere('data_entrada','<' , data_final)
                .whereNotNull('controle_acesso_empresa_terceiras.data_saida')
    }else{
        return null
    }
   
},
controleacessoempresaterceira(_,{filtro},ctx){
   
    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('controle_acesso_empresa_terceiras')
                .where({id})
                .first()
    }else{
        return null
    }
}

}