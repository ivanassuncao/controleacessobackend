const db = require('../../config/db')

module.exports = {
    funcionario() {
        return db('funcionarios')
         
    }
}