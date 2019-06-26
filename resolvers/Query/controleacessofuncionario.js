const db = require('../../config/db')

module.exports = {

controleacessofuncionariobydata(_,{filtro},ctx){
  
    if(!filtro) return null
    let {data_inicial,data_final} = filtro
   
    data_final =  data_final + " 23:59" 

    if(data_inicial){
    
        return db('controle_acesso_funcionarios')
                .leftJoin('empresas', 'empresas.id', 'controle_acesso_funcionarios.empresa_id')
                .leftJoin('funcionarios', 'funcionarios.id', 'controle_acesso_funcionarios.funcionario_id')
                .select('controle_acesso_funcionarios.*','empresas.nome_empresa','funcionarios.nome_funcionario')
                .where('data_entrada', '>=', data_inicial)
                .andWhere('data_entrada','<' , data_final)
                .whereNull('controle_acesso_funcionarios.data_saida')
    }else{
        return null
    }
   
},
controleacessofuncionariobydatasaida(_,{filtro},ctx){
  
    if(!filtro) return null
    let {data_inicial,data_final} = filtro

    data_final =  data_final + " 23:59"
   
    if(data_inicial){

      
        return db('controle_acesso_funcionarios')
                .leftJoin('empresas', 'empresas.id', 'controle_acesso_funcionarios.empresa_id')
                .leftJoin('funcionarios', 'funcionarios.id', 'controle_acesso_funcionarios.funcionario_id')
                .select('controle_acesso_funcionarios.*','empresas.nome_empresa','funcionarios.nome_funcionario')
                .where('data_entrada', '>=', data_inicial)
                .andWhere('data_entrada','<' , data_final)
                .whereNotNull('controle_acesso_funcionarios.data_saida')
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