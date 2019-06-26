const jwt = require('jwt-simple')

module.exports = async ({ req }) => {

    //Simula um usuario
    //await require('./simularLogin')(req)

    const auth = req.headers.authorization  
    const token = auth && auth.substring(7)
   
    let usuario = null
    let admin = false
    let portaria = false
    let recepcao = false
    let gerente = false

    if(token){
        try{

            let conteudoToken = jwt.decode(token,process.env.APP_AUTH_SECRET)
            
            if(new Date(conteudoToken.exp * 1000) > new Date()){
                usuario = conteudoToken
            }
        }catch(e){
            //throw new Error(e)
        }
    }

    if(usuario && usuario.perfis){
        admin = usuario.perfis.includes('admin')
        portaria =  usuario.perfis.includes('portaria')
        recepcao = usuario.perfis.includes('recepcao')
        gerente = usuario.perfis.includes('gerente')
    }

    const err = new Error('Acesso negado!')


    return{
        usuario,
        admin,
        portaria,
        recepcao,
        gerente,
        validarUsuario(){
            if(!usuario) throw err
        },
        validarAdmin(){
            if(!admin) throw err
        },
        validarPortaria(){
            if(!portaria) throw err
        },
        validarRecepcao(){
            if(!recepcao) throw err
        },
        validarGerente(){
            if(!gerente) throw err
        },
        validarUsuarioFiltro(filtro){
            if(admin) return

            if(!usuario) throw err

            if(!filtro) throw err

            const { id, email } = filtro

            if(!id && !email) throw err

            if(id && id ==! usuario.id) throw err

            if(email && email ==! usuario.email) throw err

        }
    }

}