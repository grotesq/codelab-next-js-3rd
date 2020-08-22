// Setting up the database connection
const knex = require('knex')({
    client: 'sqlite',
    connection: {
        filename: './db/my-tunes.db'
    },
    useNullAsDefault: false,
  })
  const bookshelf = require('bookshelf')(knex)
  
  // Defining models
  const Album = bookshelf.model('Album', {
    tableName: 'albums'
  })

export default Album;