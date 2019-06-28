const db = require('../../config/db')

module.exports = {

requisicoesinternabydata(_,{filtro},ctx){
  
    if(!filtro) return null
    let {data_inicial,data_final} = filtro
   
    data_final =  data_final + " 23:59" 

    if(data_inicial){
    
        return db('requisicoes_internas')
                .leftJoin('empresas', 'empresas.id', 'requisicoes_internas.empresa_id')
                .leftJoin('setores', 'setores.id', 'requisicoes_internas.setor_id')
                .leftJoin('usuarios', 'usuarios.id', 'requisicoes_internas.usuario_id')
                .leftJoin('items_internos', 'items_internos.id', 'requisicoes_internas.item_id')
                .select('requisicoes_internas.*','empresas.nome_empresa','setores.nome_setor', 'usuarios.nome',
                'items_internos.nome_item','items_internos.unidade')
                .where('data_requisicao', '>=', data_inicial)
                .andWhere('data_requisicao','<' , data_final)
    }else{
        return null
    }
   
},
requisicoesinterna(_,{filtro},ctx){
   
    if(!filtro) return null
    const {id} = filtro
    if(id){
        return db('requisicoes_internas')
                .where({id})
                .first()
    }else{
        return null
    }
}

}