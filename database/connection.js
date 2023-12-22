knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'mysql246.umbler.com',
        port: '41890',
        user: 'kassiosantosmain',
        password: '+5G|5EmeyPM/+',
        database: 'kassorg'
    }
})
module.exports = knex