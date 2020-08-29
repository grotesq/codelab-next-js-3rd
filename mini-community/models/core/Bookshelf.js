// Setting up the database connection
const knex = require('knex')({
    client: 'sqlite',
    connection: {
        filename: './database.db'
    },
    useNullAsDefault: false,
})
export default require('bookshelf')(knex)
